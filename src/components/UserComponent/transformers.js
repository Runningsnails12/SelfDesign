import { provide } from 'vue';

const userInput = (raw) => {
  return {
    value: raw.values.value,
    type: raw.values.type,
    rows: raw.values.rows,
    dashed: raw.values.dashed
  };
};

const userButton = (raw) => {
  return {
    text: raw.values.text
  };
};

const userImage = (raw) => {
  return {
    alt: raw.values.alt,
    src: raw.values.url,
    width: raw.style.width,
    height: raw.style.height,
  };
};

/**
 * 在用到ComponentDecorator的那个组件setup里执行
 * 之后直接把ComponentDecorator v-slot里的{ data }
 * 使用v-bind传到子组件（<component>）
 */
const useUserComponentTransformer = () => {
  provide(
    '__userComponentTransformers',
    new Map([
      ['Image', userImage],
      ['Text', userInput],
      ['Button', userButton]
    ])
  );
};

export default useUserComponentTransformer;