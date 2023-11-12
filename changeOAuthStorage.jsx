changeOAuthStorage() {
  // REMOVE ANY ESRIJSAPIOAUTH entries in the session or local storages
  const key = 'esriJSAPIOAuth';
  if (window && window.sessionStorage) {
    const oauth = window.sessionStorage.getItem(key);
    if (!oauth) {
      return;
    }
    const oauthObj = JSON.parse(oauth);
    if (window.localStorage) {
      const localStorageoAuths =  window.localStorage.getItem(key);
      if (!localStorageoAuths) {
        window.localStorage.setItem(key, JSON.stringify(oauthObj));
        window.sessionStorage.removeItem(key);
        return;
      }
      const lsAuth = JSON.parse(localStorageoAuths);
      lsAuth['/'] = {...lsAuth['/'], ...oauthObj['/']};
      window.localStorage.setItem(key, JSON.stringify(lsAuth));
      window.sessionStorage.removeItem(key);
    }
  }
}