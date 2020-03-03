function getNumber (min,max){
  return Math.floor(Math.random() * (max-min+1) + min)
}

export function shuffle (arr){
  let list = arr.slice()
  for(let i=0;i<arr.length;i++){
    let j = getNumber(0,i)
    let k = list[i]
    list[i] = list[j]
    list[j] = k
  }
  return list
}
