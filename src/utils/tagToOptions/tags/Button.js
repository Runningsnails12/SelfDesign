/** @type {import("..").ComponentOptions} */
const options = {
  width: ['string', 0],
  height: ['string', 0],
  border: ['string', 0],
  'box-shadow': 'string',
  'background-color': 'string',
  'text-align': 'string',
  'text-decoration': 'string',
  'text-indent': 'string',
  'font-family': 'string',
  'font-size': 'string',
  'font-weight': ['number', 'string']
};

const values = {
  content: 'string'
};

const event = [
  'click',
  'dbclick',
  'mousedown',
  'mouseup'
];

/** @type {import("..").Result} */
export default {
  options,
  values,
  event
};