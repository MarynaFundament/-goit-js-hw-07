import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divInsert = document.querySelector(`.gallery`)
// console.log(divInsert)
const cardsMarkup = createDivEl(galleryItems);
divInsert.insertAdjacentHTML(`beforeend`, cardsMarkup )

function createDivEl(items){
    const markup = galleryItems.map(({preview,original,description }) => {
      return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" 
       src="${preview}"
       alt="${description}" />
    </a>`;
    });
    return markup.join('');
  }


  divInsert.addEventListener(`click`, handleClickElement)

  
  function handleClickElement(event) {
    event.preventDefault();
  
    const targetEl = event.target;
    const targetPicture = targetEl.classList.contains('gallery__image');
    if (!targetPicture) {
      return;
    }
  
    
const lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
  }
  
