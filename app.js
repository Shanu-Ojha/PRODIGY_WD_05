let valSearch = document.getElementById('valueSearch');
let city = document.getElementById('city');
let temp = document.getElementById('temp');
let description = document.querySelector('.description');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let form = document.querySelector('form');
let main = document.querySelector('main');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    if (valSearch.value != ''){
        searchWeather();
    }
});

let id = '9505fd1df737e20152fbd78cdb289b6a';
//let id = '72368300ea1dcc99b495e6d0a54908ec';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;
const searchWeather =() => {
    fetch(url + '&q=' + valSearch.value)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data.cod == 200){
            city.querySelector('figcaption').innerText = data.name;
            city.querySelector('img').src = 'https://flagsapi.com/'+data.sys.country+'/shiny/32.png';

            temp.querySelector('img').src = 'https://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png';
            temp.querySelector('figcaption span').innerText = data.main.temp;
            description.innerText = data.weather[0].description;
            clouds.innerText = data.clouds.all;
            humidity.innerText = data.main.humidity;
            pressure.innerText = data.main.pressure;
        } else{
            main.classList.add('error');
            setTimeout(()=>{
                main.classList.remove('error');
            },1000);
        }
        valSearch.value = '';
    });
};
const initialApp= ()=>{
    valSearch.value = 'Lucknow';
    searchWeather();
}
initialApp();