export function once(fun){
  let used = false;
  return function(...args){
    if(!used){
      used = true;
      return fun.apply(this, args )
    }
  }
}