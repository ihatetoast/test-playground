const palindrome = function(value){
  if(typeof value === "string"){
    const noPunc = value.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    const val = noPunc.replace(/\s/g, '');
    const lav = val.split('').reverse().join('');
    
    if(val === lav){
      return true;
    } else {
      return false;
    }
  } else if(typeof value === "number"){
    const num = value.toString();
    const mun = num.split('').reverse().join('');
    if(num === mun){
      return true;
    }
  }
};

module.exports = palindrome;
