import { galleryItems } from './gallery-items.js';
// Change code below this line



const divInsert = document.querySelector(`.gallery`)
// console.log(divInsert)
const cardsMarkup = createDivEl(galleryItems);
divInsert.insertAdjacentHTML(`beforeend`, cardsMarkup )

function createDivEl(items){
    const markup = galleryItems.map(({preview,original,description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    });
    return markup.join('');
  }
  
//   console.log(createDivEl(galleryItems));

  divInsert.addEventListener(`click`, handleClickElement)

  
  function handleClickElement(event) {
    event.preventDefault();
  
    const targetEl = event.target;
    const targetPicture = targetEl.classList.contains('gallery__image');
    if (!targetPicture) {
      return;
    }
  
    const imageSrc = targetEl.dataset.source;
    const lightbox = basicLightbox.create(`
      <img src="${imageSrc}" />
    `);
  
    lightbox.show();

    window.addEventListener('keydown', (event) => {
      if (event.keyCode === 27) {
        lightbox.close(); // закриття модального вікна
      }
    });
  }





