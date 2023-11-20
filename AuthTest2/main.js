//import WebMap from '@arcgis/core/WebMap';
//import MapView from '@arcgis/core/views/MapView';
import WebMap from 'https://js.arcgis.com/4.28/@arcgis/core/WebMap.js';
import MapView from 'https://js.arcgis.com/4.28/@arcgis/core/views/MapView.js';

import { initialize, checkCurrentStatus, signIn, signOut} from './oauth.js';
//import './style.css';

const APP_ID = import.meta.env.VITE_APP_ID;

const btnAuth = document.getElementById('btnAuth');

async function loadMap(){

}

const webmap = new WebMap({
    portalItem: {
        id: '16e8d48059de4d948e10b00aac3569d4'
        //id: '9204932290924d79972be9d9d76251ba'
    }
});

const view = new MapView({
    map: webmap,
    container: 'app'
});

view.ui.add(btnAuth, 'top-right');

async function loadApp(){
    const oauthInfo = initialize(APP_ID);
    console.log(oauthInfo);

}

loadApp();

const button = document.getElementById("btnAuth")
console.log(button.name)
button.addEventListener("click", signOut);

