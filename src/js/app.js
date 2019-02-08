// Imports //
// =========================== //
import {
  getPagePath,
  disableButton,
  enableButton,
  getCheckedRadio,
  updateStorage,
  getTubbies,
  setDefaults
} from './helpers';

window.addEventListener('load', function() {
  if (getTubbies() === null ) {
    setDefaults();
  }

  const path = getPagePath();
  if (path === "/" || path === "/index.html" ) {
    // index page do form
    // setup form to save json

    // change event //
    // ================================================ //
    const changeTubbie = (e) => {
      enableButton(true);
    }

    const radios = document.getElementsByName('poll');
    radios.forEach((radio, i) => {
      radio.addEventListener('change', changeTubbie);
    });
    enableButton(false);

    // click /submit event //
    // ================================================ //
    const submitForm = (e) => {
      e.preventDefault();
      updateStorage(getCheckedRadio());
      window.location.href = '/results.html';
    }

    const button = document.querySelector('.footer .button');
    button.addEventListener('click', submitForm);
  }

  if (path === "/results.html") {
    // results page do form
    // load json and  display values

    let tubbies = getTubbies();
    Object.keys(tubbies).forEach((name) =>{
      document.querySelector(`[data-tubbie='${name}'] .poll__result__amount`).innerHTML = tubbies[name];
    });
  }
})
