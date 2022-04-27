import React from 'react'


function LogoutComponent() {
    const clearCache = () => {
        if ('caches' in window) {
            caches.keys().then((names) => {
                // Delete all the cache files
                names.forEach(name => {
                    caches.delete(name);
                })
            });
            // Makes sure the page reloads. Changes are only visible after you refresh.
            window.location.reload(true);
        }
    }
    return (
        <div onClick={clearCache()}>LogoutComponent</div>
    )
}

export default LogoutComponent