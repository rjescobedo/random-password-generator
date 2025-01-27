const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById('password-one');
let passwordTwo = document.getElementById('password-two');

function randomPassword() {
    passwordOne.textContent = '';
    passwordTwo.textContent = '';

    for (let i = 0; i < 15; i++) {
        let randomIndexOne = Math.floor(Math.random() * characters.length);
        let randomIndexTwo = Math.floor(Math.random() * characters.length);
    
        passwordOne.textContent += characters[randomIndexOne];
        passwordTwo.textContent += characters[randomIndexTwo];
    }
}

function copyOne() {
    const textToCopy = passwordOne.textContent;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert('Copied 1st Password to Clipboard');
        })
        .catch(err => {
            console.error('Failed to copy: ' + err)
        });
}

function copyTwo() {
    const textToCopy = passwordTwo.textContent;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert('Copied 2nd Password to Clipboard');
        })
        .catch(err => {
            console.error('Failed to copy: ' + err)
        });
}
