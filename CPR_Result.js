window.addEventListener('load', () =>{
    const params = (new URL(document.location)).searchParams;
    const city = params.get('cityName');
    const yield = params.get('yieldType');
    const weather = params.get('weatherType');
    document.getElementById('result-cityName').innerHTML = city;
    document.getElementById('result-yieldType').innerHTML = yield;
    document.getElementById('result-weatherType').innerHTML = weather;

})