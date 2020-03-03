export function getIndex(el,name,value) {
  const prefix = 'data-'
  name = prefix + name
  if (value){
    return el.setAttribute(name,value)
  } else {
    return el.getAttribute(name)
  }
}
