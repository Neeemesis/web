const form = document.querySelector('.temperature__form');
 const submitButton = form.querySelector('.temperature__button');

function sendRequest(e) {
  e.preventDefault(); 
  submitButton.disabled = true; 

  const classroomInput = form.querySelector(".temperature__input--class");
  const temperatureInput = form.querySelector(".temperature__input--temp");

  const body = {
    class: classroomInput.value,
    temp: +temperatureInput.value,
  };

  fetchRequest("POST", tempURL, body)
    .then((response) => {
      submitButton.disabled = false;
    });
}

const tempURL = "http://194.67.93.117:80/temp";

function fetchRequest(method, url, body = null) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
          .then((responseJSON) => {
            showToasts(200, responseJSON);
            form.reset();
            return responseJSON;
          });
      }
      return response.json()
        .then((error) => {
          const e = new Error("Something went wrong");
          e.data = error;
          showToasts(400, error);
          throw e;
        });
    })
    .catch((e) => {
      return e;
    });
}

form.addEventListener("submit", sendRequest);

const toasts = document.querySelector(".toasts");
const toastClose = document.querySelector(".toasts__close");

function showToasts(status, response) {
  toasts.classList.remove("toasts_hidden", "toasts_error");
  toasts.classList.add("toasts_active");

  if (status > 299) {
    toasts.classList.add("toasts_error");
  }

  const toastDiv = document.querySelector(".toasts__body");
  toastDiv.innerHTML = `
    <p class="toasts__title">${response.status}</p>
    <p class="toasts__desc">${response.message}</p>
  `;
  toasts.appendChild(toastDiv);
}

// Закрытие уведомлений
function hideToasts(e) {
  if (e.target.closest(".toasts__close")) {
    toasts.classList.remove("toasts_active");
    toasts.classList.add("toasts_hidden");
  }
}

toasts.addEventListener("click", hideToasts);


const gallery = document.querySelector(".gallery__wrapper");
const imagesURL = "http://194.67.93.117:80/images";
const loadGif = document.querySelector(".gallery__loader");
const retryButton = document.querySelector(".gallery__button");
const messageErrorText = document.querySelector('.message__error');

// Загрузка изображений при загрузке страницы и при клике на кнопку повтора
document.addEventListener("DOMContentLoaded", loadImages);
retryButton.addEventListener("click", loadImages);

// Загрузка изображений
function loadImages() {
  toasts.classList.remove("toasts_active");
  toasts.classList.add("toasts_hidden");

  getImages("GET", imagesURL)
    .then((response) => {
      loadGif.style.display = 'none';

      if (!Array.isArray(response)) return;

      if (response.length === 0) {
        messageErrorText.innerHTML = "Images are not found";
        return;
      }

      gallery.innerHTML = "";
      toasts.classList.remove("toasts_active");
      toasts.classList.add("toasts_hidden");

      response.forEach((imageData) => {
        const imageElement = document.createElement('img');
        imageElement.src = imageData.url;
        imageElement.alt = imageData.alt;
        imageElement.classList.add('gallery__img');

        const captionElement = document.createElement('figcaption');
        captionElement.innerText = imageData.description;
        captionElement.classList.add('gallery__description');

        const figureElement = document.createElement('figure');
        figureElement.appendChild(imageElement);
        figureElement.appendChild(captionElement);
        figureElement.classList.add('gallery__icon');

        const linkElement = document.createElement('a');
        linkElement.classList.add('gallery__link');

        const blockImage = document.createElement('div');
        blockImage.appendChild(figureElement);
        blockImage.appendChild(linkElement);

        gallery.appendChild(blockImage);
      });
    });
}


function getImages(method, url) {
  loadGif.style.display = 'block';

  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
          .then((responseJSON) => {
            return responseJSON;
          });
      }
      return response.json()
        .then((error) => {
          const e = new Error("Something went wrong");
          e.data = error;
          showToasts(500, error[0]);
          throw e;
        });
    })
    .catch((e) => {
      return e;
    });
}
