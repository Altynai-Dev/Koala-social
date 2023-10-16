import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ORDERS_API } from "../../helpers/consts";

export const getCartData = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if(!cart) return {
        user: '',
        totalCost: 0,
        games: []
    };
    return cart;
};

export const setCartData = (cartObj) => {
    cartObj.user = JSON.parse(localStorage.getItem('user'));
    localStorage.setItem('cart', JSON.stringify(cartObj));
};

export const checkGameInCart = (gameId) => {
    const cart = getCartData();
    return cart.games.find(game => game.gameItem.id === gameId);
};

export const countCartTotalCost = (cartGames) => {
    return cartGames.reduce((acc, currVal) => {
        return acc + currVal.totalPrice;
    }, 0);
};

export const toggleGameToCart = (gameObj) => {
    const cart = getCartData();
    if(!checkGameInCart(gameObj.id)) {
        cart.games.push({
            count: 1,
            totalPrice: +gameObj.price,
            gameItem: gameObj
        });
    } else {
        cart.games = cart.games.filter(game => game.gameItem.id !== gameObj.id);
    };
    cart.totalCost = countCartTotalCost(cart.games);
    setCartData(cart);
};

export const changeCountGameInCart = (gameId, count) => {
    if(count < 0) return alert('Count of game must be positive int!');
    const cart = getCartData();
    cart.games = cart.games.map(game => {
        if(game.gameItem.id === gameId) {
            game.count = count;
            game.totalPrice = game.gameItem.price * count;
        };
        return game;
    });
    cart.totalCost = countCartTotalCost(cart.games);
    setCartData(cart);
};

export const deleteGameFromCart = (gameId) => {
    const cart = getCartData();
    cart.games = cart.games.filter(game => game.gameItem.id !== gameId);
    cart.totalCost = countCartTotalCost(cart.games);
    setCartData(cart);
};

export const cleanCart = () => {
    localStorage.removeItem('cart');
};

export const getGamesCountInCart = () => {
    const cart = getCartData();
    return cart.games.length;
};

export const createOrder = createAsyncThunk(
    'cart/createOrder',
    async () => {
        const cart = getCartData();
        if(!cart.games.length) return;
        await axios.post(ORDERS_API, cart);
        cleanCart();
    }
);