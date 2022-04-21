import Cookies from "universal-cookie";

const cookies = new Cookies();

cookies.set('myCat', 'Pacman', { path: '/' });
console.log(cookies.get('myCat'));

const setUserInfo = (userInfo) => {
    cookies.set('userInfgo', JSON.stringify(), { path: '/' })
}
const getUserInfo = () => {
    cookies.get('userInfo');
};
export const cookieManager = {
    setUserInfo, getUserInfo
};