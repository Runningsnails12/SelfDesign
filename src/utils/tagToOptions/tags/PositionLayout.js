/** @type {import("..").ComponentOptions} */
const options = {
  width: ['string', 0],
  height: ['string', 0],
  border: ['string', 0],
  'box-shadow': 'string',
  'background-color': 'string'
};

/** @type {import("..").ComponentOptions} */
const subOptions = {
  ...options,
  'top': 'string',
  'left': 'string',
  'z-index': 'number'
};

export default {
  options,
  subOptions
};