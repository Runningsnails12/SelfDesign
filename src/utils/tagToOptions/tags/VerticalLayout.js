/** @type {import("..").ComponentOptions} */
const options = {
  width: ['string', 0],
  height: ['string', 0],
  border: ['string', 0],
  'box-shadow': 'string',
  'background-color': 'string',
  'align-content': 'string',
  'justify-content': 'string'
};

/** @type {import("..").ComponentOptions} */
const subOptions = {
  width: ['string', 0],
  height: ['string', 0],
  border: ['string', 0],
  'box-shadow': 'string',
  'background-color': 'string',
  order: 'number'
};

export default {
  options,
  subOptions
};