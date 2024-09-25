export const getToken = async () => {
    const user = JSON.parse(sessionStorage.getItem('userData'))

    return user?.token;
};