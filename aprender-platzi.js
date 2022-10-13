//advenjs : ¿ Que deberias aprender en platzi
function learn(time, courses) {
  let newCourses= []
  let value
 courses.forEach((el,i,arr)=>{
    arr.forEach((el2,i2,arr2)=>{
      if(i!=i2){
        newCourses.push({
          a:el+el2,
          i1:i,
          i2:i2,
        })
      }
    })
 })
   
  for(let i = time;i>0;i--){
   value =  newCourses.find(el=>el.a ==i)
   if(value) break;
  }
  if(!value) return null
  
  return [value.i1,value.i2]  
}




 learn(10, [2, 3, 8,1,4])// [0, 2] -> con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0 y 2.

learn(25, [10, 15, 20, 5]) // [0, 1] -> los cursos [0, 1] y [2, 3] completan exactamente con 25 horas pero siempre devolvemos el primero que encontremos

learn(8, [8, 2, 1]) // [1, 2] -> para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.

learn(8, [8, 2, 1, 4, 3]) // [3, 4] -> usamos el máximo tiempo disponible así que [3, 4] usa 7 horas y el [1, 2] sólo usaría 3 horas.

learn(4, [10, 14, 20]) // null -> no nos da tiempo a hacer dos cursos
