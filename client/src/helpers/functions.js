import axios from "axios";

export const addDataToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};

export const getAuthUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
};


export const isAdminFunction = () =>{
    const user = getAuthUser();
    if(user.username==="admin") return true;
    return false;
}

export const logout = async() => {
    localStorage.removeItem('user');
    await axios.post('http://localhost:8888/api/auth/logout', {
        withCredentials: true
    })
};

export const checkUserLogin = () => {
    const user = localStorage.getItem('user');
    if(!user) return false;
    return true;
};

export const getTotalPages = async (url) => {
    const { data } = await axios.get(url);
    const totalPages = Math.ceil(data.length / 12);
    return totalPages;
};