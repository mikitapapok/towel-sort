
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let array = [];

  if (!matrix) {
      return array;
  }
  matrix.map((e,i)=>{
    if(i%2){
      e.reverse()  }
  })
  return array.concat(...matrix);
};