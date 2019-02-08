const defaultTubbies = {
  "tinky-winky": 0,
  "dipsy": 0,
  "laa-laa": 0,
  "po": 0
}

// state functions //
// ===================== //
export const updateStorage = tubbieName => {
  let tubbies = getTubbies();
  tubbies[tubbieName] += 1;
  setTubbies(tubbies);
};

export const setDefaults = () => {
  setTubbies(defaultTubbies);
};

// window functions //
// ===================== //
export const getTubbies = () => {
  return JSON.parse(window.localStorage.getItem(`teletubbies`));
};

export const setTubbies = (tubbies) => {
  window.localStorage.setItem(`teletubbies`, JSON.stringify(tubbies));
};

export const getPagePath = () => {
  return window.location.pathname;
};

// helper functions //
// ===================== //
export const enableButton = (isOff) => {
  const button = document.querySelector(`.footer .button`);
  const disabled = `disabled`;
  if (isOff) {
    button.classList.remove(`button--${disabled}`);
    button.removeAttribute(disabled);
  } else {
    button.classList.add(`button--${disabled}`);
    button.setAttribute(disabled, true);
  }
};

export const getCheckedRadio = () => {
  const radios = [...document.getElementsByName(`poll`)];
  let foundRadio = radios.filter((radio, i) => radio.checked);
  if(foundRadio[0]) {
    return foundRadio[0].value.toLowerCase().replace(" ", "-");
  } else {
    throw "No Selected item found! Something went wrong.";
  }
};
