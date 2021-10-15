const userStr = document.getElementById("userInput");
const myStrFinal = document.getElementById("myString");
const encryptedFinal = document.getElementById("encrypted");
const decryptedFinal = document.getElementById("decrypted");
const stringAfterDecryption = document.getElementById("stringAfterDecryption");
const btn = document.getElementById("btn");

function runEncryption() {
    var myString = userStr.value;
    var password = "12345";

    var encrypted = CryptoJS.AES.encrypt(myString, password);
    var decrypted = CryptoJS.AES.decrypt(encrypted, password);

    myStrFinal.innerHTML = myString;
    encryptedFinal.innerHTML = encrypted;
    decryptedFinal.innerHTML = decrypted;
    stringAfterDecryption.innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
}


btn.addEventListener("click", runEncryption);