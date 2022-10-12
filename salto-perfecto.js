export default function checkSledJump(saltos) {
  let value=true
  let numsCima=[] 
  let numMayor=""
  let numMenores=[]
  console.log(saltos.at(-2))
  if(!(saltos.at(-1) < saltos.at(-2))) return false 
 if(!( saltos.at(0) < saltos.at(1))) return false
  
  let iguales = false
  saltos.forEach((el,i,arr)=>{
    if(el>arr[i+1]){
      if(numMayor =='') {
        numMenores=[...saltos]
        numMayor=numMenores.splice(i,1)
        }                 
    }
     if(el==arr[i+1]) iguales= true
  })
  if(iguales) return false;
  
  const  isMayor=numMenores.find(el=> numMayor>el)
  if(isMayor) value=true

  return value
}