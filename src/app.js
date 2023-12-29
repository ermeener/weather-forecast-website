function searchCity(){

  let apiKey="9a708b23a8ct6o0b4d94fd3134a86038"
  // let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
  console.log(apiUrl);
}


// receives an event
function submitButton(event){
  // this prevents from changes in the webpage even if the you reload the web page
  event.preventDefault();

  let searchInput=document.querySelector("#search-form-input");
  
  let cityElement=document.querySelector("#city");
cityElement.innerHTML=searchInput.value;
}

let searchelement=document.querySelector("#search-name");
searchelement.addEventListener("submit" , submitButton);
