const isPrime = (num) =>{
 if(isNaN(num)){
  return false;
 } else if(!Number.isInteger(num)){
    return false;
 } else {
   //divide num by a dividend that increases until it's 1/2 way.
   const dividend = num;
   let divisor = 2;
   while(divisor < dividend/2){
     if(dividend % divisor===0){
       return false;
     }
     divisor ++;
   }
    return true;
 }
};
// isPrime(237);
module.exports = isPrime;