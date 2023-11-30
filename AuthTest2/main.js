//import WebMap from '@arcgis/core/WebMap';
//import MapView from '@arcgis/core/views/MapView';
import WebMap from 'https://js.arcgis.com/4.28/@arcgis/core/WebMap.js';
import MapView from 'https://js.arcgis.com/4.28/@arcgis/core/views/MapView.js';

import { initialize, checkCurrentStatus, signIn, signOut} from './oauth.js';
//import './style.css';

//const APP_ID = import.meta.env.VITE_APP_ID;
const APP_ID = 'n4258Po67A3jM0zzv'    
//UUNJfG1inqh2UohO-3utech    
//n4258Po67A3jM0zzv-APSU
// UXot56dujRmc6J0r - Demo AuthTest
const btnAuth = document.getElementById('btnAuth');

async function loadMap(){

}

const webmap = new WebMap({
    portalItem: {
        //id: '16e8d48059de4d948e10b00aac3569d4'  // 3utech-Oropa_AOI_3_working
        //id: 'bffb830efcee476eabec7396e64c9cb0'   // Demo - CPR_Test2
        id: '28ca9f4c616e4f04b3127afd175d25b2'  //APSU CPR_Test1
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

