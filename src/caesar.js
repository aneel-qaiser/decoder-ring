// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const coder = (input, shift) => input
  .split("")
  .map((char) => {
    const charNum = char.toLowerCase().charCodeAt(0);
    const modShift = shift % 26; //this basically removes having to loop over the alphabet over and over again
    const newCharNum = charNum + modShift;
    if(charNum < 97 || charNum > 122){ //tells code to ignore non-alphabet
      return String.fromCharCode(charNum);
    }
      else if(newCharNum > 122){
        return String.fromCharCode(newCharNum - 26); //122 - 97 = 25 but one is subtracted as letter "a" is also counted
    }
      else if(newCharNum < 97){
        return String.fromCharCode(newCharNum + 26);// 122-97 = 25 but one is added as letter "z" is also counted
      }
    else{
      return String.fromCharCode(newCharNum);
    };
    })
    .join("");

  function caesar(input, shift, encode = true) {
    
    if(!shift || shift > 25 || shift < -25 || shift === 0) return false; //this code could work without this
    
    if(encode) return coder(input, shift);

    return coder(input, -shift);
  };

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
