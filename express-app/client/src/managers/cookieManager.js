import Cookies from "universal-cookie";

// cookie manager for managing userinfo

const cookies = new Cookies();

const setUserInfo = (userInfo) => {
  cookies.set("userInfo", JSON.stringify(userInfo), { path: "/" });
};

const getUserInfo = () => {
  return cookies.get("userInfo");
};

const clearUserInfo = () => {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
  window.location.reload(true);
}
export const cookieManager = {
  setUserInfo,
  getUserInfo,
  clearUserInfo
};
export default cookieManager;