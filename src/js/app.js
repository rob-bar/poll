// Imports //
// =========================== //
import {
  getPagePath,
  disableButton,
  enableButton,
  getCheckedRadio,
  updateStorage,
  getStorage,
  setDefaults
} from './helpers';

window.addEventListener('load', function() {
  const path = getPagePath();
  if (path === "/" || path === "/index.html" ) {
    // index page do form
    // setup form to save json
    const changeTubbie = (e) => {
      enableButton();
    }

    const radios = document.getElementsByName('poll');
    radios.forEach((radio, i) => {
      radio.addEventListener('change', changeTubbie);
      if (!radio.checked && radios.length === i + 1) {
        disableButton();
      }
    });

    const submitForm = (e) => {
      const checkedRadio = getCheckedRadio();
      updateStorage(checkedRadio);
      window.location.href = '/results.html';
    }

    const button = document.querySelector('.footer .button');
    button.addEventListener('click', submitForm);

    if(getStorage() === null ) {
      setDefaults();
    }
  }

  if (path === "/results.html") {
    // results page do form
    // load json and  display values
    if(getStorage() === null ) {
      setDefaults();
    }
    let tubbies = JSON.parse(getStorage());
    document.querySelector("[data-tubbie='tinky-winky'] .poll__result__amount").innerHTML = tubbies['tinky-winky'];
    document.querySelector("[data-tubbie='dipsy'] .poll__result__amount").innerHTML = tubbies['dipsy'];
    document.querySelector("[data-tubbie='laa-laa'] .poll__result__amount").innerHTML = tubbies['laa-laa'];
    document.querySelector("[data-tubbie='po'] .poll__result__amount").innerHTML = tubbies['po'];
  }
})
