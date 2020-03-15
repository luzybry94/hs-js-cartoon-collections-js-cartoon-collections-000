function dwarfRollCall(array) {
  let str = ""
  for(let i = 0; i < array.length; i++) {
  str += `${i+1}. ${array[i]} `
  }
  return str
}

function summonCaptainPlanet(array) {
  let newArray = []
  for(let i = 0; i < array.length; i++) {
    newArray.push(`${array[i].toUpperCase()}!`)
  }
  
  return newArray
}

function longPlaneteerCalls(array) {
  for(let i = 0; i < array.length; i++) {
    if (array[i].length > 4) {
      return true
    } else {
      return false
      }
  }
}

function findTheCheese(snacksArray) {
  let cheeses = ['cheddar', 'gouda', 'camembert']
  for(let i = 0; i < snacksArray.length; i++) {
    
    for(let j = 0; j < cheeses.length; j++) {
      console.log(snacksArray[i])
      console.log(cheeses[j])
      if (snacksArray[i] == cheeses[j]) {
        return cheeses[j]
      } 
        
      
      
    }
  }
  return 'no cheese!'
}

