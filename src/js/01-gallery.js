import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const samplesMarkup = createGallerySample(galleryItems);

let instance;

galleryContainer.insertAdjacentHTML("beforeend", samplesMarkup);

galleryContainer.addEventListener("click", onGallerySampleClick);

function createGallerySample(sample) {
  return sample
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
      `;
    })
    .join("");
}

function onGallerySampleClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  openModal(evt);
  // closeModal();
}

function openModal(evt) {
  const instance = basicLightbox.create(`
  <img src="${evt.target.dataset.source}" width="800" height="600">
`);

  instance.show();
}

// function closeModal() {
//   window.addEventListener("keydown", (evt) => {
//     if (evt.code !== "Escape") {
//       return;
//     }
//     instance.close();
//   });
// }
