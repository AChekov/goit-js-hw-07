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
  openModal(evt);
  closeModal();
}

function openModal(evt) {
  instance = basicLightbox.create(`
  <img src="${evt.target.dataset.source}">
`);

  instance.show();
}

function closeModal() {
  document.addEventListener("keydown", (evt) => {
    if (evt.code !== "Escape") {
      return;
    }
    instance.close();
  });
}
