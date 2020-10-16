
// You should implement your task here.
module.exports = function towelSort (matrix) {
    a=[]
    if(matrix===[]||matrix===undefined){
        return[]}
    for(let i=0;i<matrix.length;i++){
      
    if(i%2!==0){
    a.push(matrix[i].reverse())
      } else{
        a.push(matrix[i])
      } 
    }
    return a.flat()
  }
