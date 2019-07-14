
var url="https://data.nasa.gov/resource/gvk9-iz74.json"
console.log(url);
fetch(url)//First API
.then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
.then(response => {
  console.log(response)
  for(let i=0; i<response.length;i++){
    console.log(response[i].center)
    console.log(response[i].city)
    console.log(response[i].center)

    let ol = document.querySelector("ul")
    let li = document.createElement("li")
    let span = document.createElement("span")
    let newButton=document.createElement("button")
    li.appendChild(document.createTextNode(response[i].center+"  |   "+response[i].city+"   |   "+response[i].state+"   |   "+response[i].country+"   |"))
    li.appendChild(span)
    newButton.innerHTML="Temp >"
    ol.appendChild(li)
     temper()
         function temper(){
      console.log("Clicked",response[i].center)
      let lat=response[i].location.latitude
      let long=response[i].location.longitude
      console.log(location+"here")
      let wUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&&APPID=efde7c3602e51e82abca166b2b3c6a2c`
      console.log(wUrl);
      fetch(wUrl)//Second API
      .then(res => res.json())
      .then(response => {
        span.innerHTML=Math.ceil((response.main.temp-273.15)* 9/5 + 32)+"F"//(310.928K − 273.15) × 9/5 + 32 = 100°F
        console.log(response.wind.deg);
      })
    }
  }
})
// .catch(err => {
//   console.log(`error ${err}`)
//   alert("sorry, there are no results for your search")
// });


// function runType(second){
//
//   .catch(err => {
//     console.log(`error ${err}`)
//     alert("sorry, there are no results for your search")
//   });
// }
