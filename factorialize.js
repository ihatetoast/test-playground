const factorialize = function (num) {
  //make '5' into 5
  const number = parseInt(num);
  //factorials are the product of pos integers from 1 to the number itself
  let product = 1;
  for(let n = 1; n <= number; n ++){
    product *= n;
  }
  return product;
  
}

// factorialize(5);
module.exports = factorialize;