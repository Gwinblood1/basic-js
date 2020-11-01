const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(word, keyword) {
    
    var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.!?,:;'/^-+ ";
    var encryptWord = "";
    for (var i = 0; i < word.length; i++) {
      encryptWord += alphabet.charAt((alphabet.indexOf(word.charAt(i)) + alphabet.indexOf(keyword.charAt(i % keyword.length))) % alphabet.length);
    }
    return encryptWord;
  }
  decrypt(word, keyword) {
    
    var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.!?,:;'/^-+ ";
    var decryptWord = "";
    for (var i = 0; i < word.length; i++) {
      decryptWord += alphabet.charAt(((alphabet.indexOf(word.charAt(i)) + alphabet.length) - alphabet.indexOf(keyword.charAt(i % keyword.length))) % alphabet.length);
    }
    return decryptWord;
  }
}

module.exports = VigenereCipheringMachine;
