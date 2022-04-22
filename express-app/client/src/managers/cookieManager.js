import Cookies from "universal-cookie";

const cookies = new Cookies();

cookies.set('myCat', 'Pacman', { path: '/' });
console.log(cookies.get('myCat'));

const setUserInfo = (userInfo) => {
    cookies.set('userInfo', JSON.stringify(), { path: '/' })
}
const getUserInfo = () => {
    cookies.get('userInfo');
};
const cookieManager={setUserInfo,getUserInfo};

export default cookieManager;