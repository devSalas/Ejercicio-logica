function canReconfigure(from, to) {
  if(from.length != to.length) return false;
  let value = true
  let aFrom=from.split("") 
  let aTo=to.split("") 
  let ls =[]
  for(let i=0;i<from.length;i++ ){
    
     let resultFrom=ls.find(el=> el[0]== aFrom[i])
     let resultTo= ls.find(el=>el[1]==aTo[i])
     if(!resultFrom || !resultTo) ls.push([aFrom[i],aTo[i]])

      if(resultFrom!==undefined && resultFrom[1]!=aTo[i]) {
        value=false
      }
      if(resultTo!==undefined && resultTo[0]!=aFrom[i]) {
        value=false
      }
  }
  return value
}

let from = 'BAL'
let to   = 'LIB'
canReconfigure(from, to) // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

  from = 'CON'
  to   = 'JUU'
canReconfigure(from, to) // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/
   from = 'XBOX'
    to   = 'XXBO'
canReconfigure(from, to) // false
/* no se puede hacer la transformación:
X -> X
B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra) 
O -> B
X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)
*/

 from = 'XBOX'
 to   = 'XOBX'
canReconfigure(from, to) // true

 from = 'MMM'
 to   = 'MID'
canReconfigure(from, to) // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

 from = 'AA'
 to   = 'MID'



