
// You should implement your task here.

module.exports = function towelSort (matrix) {
  console.log(matrix);
  if(!matrix || matrix.length == 0) {
    return [];
  }
  
  matrix.forEach((item, index) => {
    if (!(index % 2 == 0)) {
      item.reverse();
    }
  });

  matrix = matrix.join(',').split(',').map(item => item = +item);

  return matrix
}