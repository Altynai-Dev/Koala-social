
export const addDataToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};

export const getAuthUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
};