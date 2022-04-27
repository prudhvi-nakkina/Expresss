import React from 'react';
import cookieManager from '../managers/cookieManager';


let deleteCookies = () => {
    console.log("Triggering logout");
    cookieManager.setUserInfo(null);
    // Makes sure the page reloads. Changes are only visible after you refresh.
    window.location.reload(true);
}
function LogoutComponent() {
    return (
        <div onClick={deleteCookies}>LogoutComponent</div>
    )
}

export default LogoutComponent;