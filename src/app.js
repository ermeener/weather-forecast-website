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
