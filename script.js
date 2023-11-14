require([
    'esri/portal/Portal',
    'esri/identity/OAuthInfo',
    'esri/identity/IdentityManager'
], (Portal, OAuthInfo, IdentityManager) => {
    // UI elements
    const loginButton = document.querySelector('#login-button');
    const logoutButton = document.querySelector('#logout-button');
    const greeting = document.querySelector('h1');

    const info = new OAuthInfo({
        appId: "eqoYmbHuNKLOaRUO",
        popup: false,
        portalUrl: 'https://3utech.maps.arcgis.com/arcgis'
    });
    IdentityManager.registerOAuthInfos([info]);

    loginButton.addEventListener('click', () =>{
     console.log(info.portalUrl);
     IdentityManager.getCredential(info.portalUrl + '/sharing');
    });
    logoutButton.addEventListener('click', () => {
     IdentityManager.destroyCredentials();
     window.location.reload();
    });

    const handleLoginSuccess = () => {
        const portal = new Portal();
        portal.authMode = 'immediate';
        portal.load().then(() => {
            console.log(portal);
            loginButton.style = 'display: none';
            logoutButton.style = 'display: inLine-block';
            greeting.textContent = 'Welcome back, ${portal.user.fullName}!';
        });
    };

    IdentityManager.checkSignInStatus(info.portalUrl + '/sharing')
      .then(handleLoginSuccess)
      .catch(() => console.log('Not logged in'));

});

