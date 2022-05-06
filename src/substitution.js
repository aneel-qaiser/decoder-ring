// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const standardAlphabet = [
    "a","b", "c", "d", "e",
    "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y",
    "z"];
  
    const coder = (input, subAlpha, standardAlphabet) => input
    .split("")
    .map(char => {
      if(char === " "){
        return " "
      }
      else{
        return subAlpha[standardAlphabet.indexOf(char.toLowerCase())]
      }
    })
    .join("");
  
  function substitution(input, alphabet, encode = true) {
    if(!alphabet || alphabet.split("").length !== 26) return false;
    const subAlpha = [...new Set(alphabet.split(" ").join("").split(""))];
    if(alphabet && subAlpha.length === 26){
      if(encode){
        return coder(input, subAlpha, standardAlphabet); 
      }
      else{
        return coder(input, standardAlphabet, subAlpha);
      };
    };
    return false;
  };

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
