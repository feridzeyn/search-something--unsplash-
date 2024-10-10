const form = document.querySelector('#form');
const searchInput = document.querySelector('#searchInput');
const clearButton = document.querySelector('#clearButton');
const flex_wrapper = document.querySelector('.flex-wrapper')
const div = document.querySelector('.images')

runEvent()
function runEvent() {
  
  form.addEventListener('submit', search)
  clearButton.addEventListener('click', clearAll)
}
function clearAll(){
  searchInput.value = "";
Array.from(flex_wrapper.children).forEach((child)=>{
child.remove(); 
})
}

function search(e) {
  e.preventDefault();
  const value = searchInput.value.trim();
  fetch(`https://api.unsplash.com/search/photos/?client_id=C1q-rr3vUcisrUTCxIHJF0CC3bkVq5VzYDg9J9xLyJI&query=${value}`)
    .then(response => {
      response.json()
        .then(data => {
          flex_wrapper.innerHTML = "";

          data.results.forEach((image) => {


            showUI(image.urls.small)
          })
          
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
  
}

function showUI(url) {
 
  let div = document.createElement('div')
  div.className = 'images'

  let img = document.createElement('img');
  img.setAttribute("src", url);
  img.width = '350'
  img.height = '350'
  div.append(img)
  flex_wrapper.append(div)
}