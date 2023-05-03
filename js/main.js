const img1 = document.getElementById('img1')
const div1 = document.getElementById('text1')
const container = document.getElementById('container')

// function add(a) { 
//     console.log(a.id)
//     localStorage.setItem(a.id, 1+Number(localStorage.getItem(a.id)) )
//     // div1.innerHTML = localStorage.getItem(a.id)

// }
// div1.innerHTML = localStorage.getItem('img1')

function generate() {
for (let index = 1; index < 10; index++) {
    const img = document.createElement('img') 
    img.src = `../assets/images/${index}.jpg`
    img.id = `img${index}`
    img.alt = `Винни-Пух`
    img.height = 222
    img.width = 200 

    img.onclick = function() {
        console.log(`img${index}`)
        localStorage.setItem(`img${index}`, 1+Number(localStorage.getItem(`img${index}`)) )
        document.getElementById(`text${index}`).textContent =  localStorage.getItem(`img${index}`)
    } 
    const div = document.createElement('div')
    div.id = `text${index}`
    div.textContent =  localStorage.getItem(`img${index}`)

 

    const icon = document.createElement('img')
    icon.src = `../assets/icons/message.jpg`
    icon.height = 20
    icon.width = 20
    
    
       
        
       

    container.appendChild(img)
    container.appendChild(div)
    container.appendChild(icon)

}
}



// generate()

window.onload = (event) => {
        const container = document.getElementById('container')
        let element = ''
        for (let index = 1; index < 10; index++) {
         element += `<div class="item">
        <img  src="assets/images/${index}.jpg" class="img1" alt="">
        <img src="assets/icons/message.jpg" class="icons" alt="">
       </div>`
         
        } 
        container.innerHTML = element
}

const rootElement = document.querySelector('main .container');
const photos = generatePhotos(10);
const templateElement = document.getElementById('picture-template');
const fragment = templateElement.content;
const picture = fragment.querySelector('.picture');

for (const photo of photos) {
    const pictureElement = picture.cloneNode(true);
    const imgElement = pictureElement.querySelector('img');
    console.log(imgElement);
    imgElement.setAttribute('src', photo.url);
    rootElement.append(pictureElement);
}

console.log(photos);
console.log(fragment);
console.log(picture);
console.log(rootElement);

const elems = document.querySelectorAll('.elem');

for (const elem of elems) {
    elem.addEventListener('click', () => {
        console.log(elem);
    });
}
jQuery(document).ready(function($){
  
    $('.button').on('click', function(e){
      alert('Действие выполнено');
    })
    
  });