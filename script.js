const searchbtn=document.getElementById('btn')
searchbtn.addEventListener('click',fun=()=>{
  cit=document.querySelector('#val').value
  let city=document.getElementById('cityname')
  
  const lin=`https://api.openweathermap.org/data/2.5/weather?q=${cit}&appid=1a2692c2d4ac9be6c0bb8bf7299b8d56`
 
  fetch(lin).then(response=>{
    if(!response.ok){
        alert("No Weather Found")
    }
    return response.json()
  }).then(data=>{
     console.log(data);
     const{name}=data;
     const {lat}=data.coord;
     const{lon}=data.coord; 
     document.getElementById("cityname").innerText="Weather in "+name;
     document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
     const lina=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=1a2692c2d4ac9be6c0bb8bf7299b8d56`
fetch(lina).then(response=>{
    return response.json(); 
}).then(datas=>{
    console.log(datas);
    // let ab=new Date();
  let{temp}=datas.current;
  let{humidity}=datas.current;
  let{wind_speed}=datas.daily[0];
        let{description,icon}=datas.daily[0].weather[0];
    document.getElementById("temperature"+(0)).innerText="temperature "+Number(temp - 273.15).toFixed(1)+"°C" ;
      document.getElementById("humid"+(0)).innerText="Humidity: "+humidity+"%";
      document.getElementById("icon"+(0)).src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
      document.getElementById("description"+(0)).innerText=description;
      document.getElementById("wind"+(0)).innerText="WindSpeed : "+wind_speed+" km/h";
      aa=new Date();
      tm=aa.getHours()+":"+aa.getMinutes();
      let date=aa.toLocaleDateString();
      document.getElementById("date"+(0)).innerText=date+" || Time: "+tm;
      
    for(let i=1;i<8;i++){
      let{max,min}=datas.daily[i].temp;
        let{humidity}=datas.daily[i];
        let{dt}=datas.daily[i];
        let{wind_speed}=datas.daily[i];
        let{description,icon}=datas.daily[i].weather[0];
      document.getElementById("temperature"+(i)).innerText="min: "+Number(min - 273.15).toFixed(1)+"°C  , max: " +Number(max - 273.15).toFixed(1)+"°C";
      document.getElementById("humid"+(i)).innerText="Humidity: "+humidity+"%";
      document.getElementById("icon"+(i)).src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
      document.getElementById("description"+(i)).innerText=description;
      document.getElementById("wind"+(i)).innerText="WindSpeed : "+wind_speed+" km/h";
      ab=new Date();
      ab.setDate(ab.getDate() + i);
      let date=ab.toLocaleDateString();
      document.getElementById("date"+(i)).innerText=date;
      
    }

})

    
  })
})
document.querySelector("#val").addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        fun();
      }
    });