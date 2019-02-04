const defaultTubbie = {
  "tinky-winky": 0,
  "dipsy": 0,
  "laa-laa": 0,
  "po": 0
}

export const updateStorage = tubbie => {
  let tubbies = JSON.parse(window.localStorage.getItem('teletubbies'));
  tubbies[tubbie.value] += 1;
  console.log(tubbie);
  window.localStorage.setItem('teletubbies', JSON.stringify(tubbies));
};

export const getStorage = () => {
  return window.localStorage.getItem('teletubbies');
};

export const setDefaults = () => {
  window.localStorage.setItem('teletubbies', JSON.stringify(defaultTubbie));
};

export const getPagePath = () => {
  return window.location.pathname;
};

export const disableButton = () => {
  const button = document.querySelector('.footer .button');
  button.classList.add('button--disabled');
  button.setAttribute('disabled', true);
};

export const enableButton = () => {
  const button = document.querySelector('.footer .button');
  button.classList.remove('button--disabled');
  button.removeAttribute('disabled');
};

export const getCheckedRadio = () => {
  let foundRadio = null;
  const radios = document.getElementsByName('poll');
  radios.forEach((radio, i) => {
    if (radio.checked) {
      foundRadio = { name: radio.name, value: radio.value.toLowerCase().replace(" ", "-") };
    }
  });
  return foundRadio;
};
