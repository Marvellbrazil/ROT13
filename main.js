function encryptROT13() {
  const alphabeticalColumn = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',  // First Column
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'  // Second Column
  ];  

  const perAlphabeticalColumn = 26 / 2;

  const numericColumn = [
    '0', '1', '2', '3', '4',  // First Column
    '5', '6', '7', '8', '9'  // Second Column
  ];  

  const perNumericColumn = 10 / 2;

  let output = [];
  let input = this.value;
  let words = input.toUpperCase();
  for (let i = 0; i < words.length; i++) {
    let result = words.charAt(i);
    if (result.match(/[A-Z]/) || result.match(' ')) {
      if (result == ' ') {
        output.push(" ");
      } else if (alphabeticalColumn.indexOf(result) <= 12) {
        let index = alphabeticalColumn.indexOf(result);
        output.push(alphabeticalColumn[index + perAlphabeticalColumn]);
      } else if (alphabeticalColumn.indexOf(result) >= 13 && alphabeticalColumn.indexOf(result) <= 25) {
        let index = alphabeticalColumn.indexOf(result);
        output.push(alphabeticalColumn[index - perAlphabeticalColumn]);
      } else {
        document.getElementById('decryptBox').value = 'Invalid Input';
      }
    } else if (result.match(/[0-9]/)) {
        if (numericColumn.indexOf(result) <= 4) {
          let index = numericColumn.indexOf(result);
          output.push(numericColumn[index + perNumericColumn]);
        } else if (numericColumn.indexOf(result) >= 5 && numericColumn.indexOf(result) <= 9) {
          let index = numericColumn.indexOf(result);
          output.push(numericColumn[index - perNumericColumn]);
        } else if (result.match() != /[A-Z]/ || result.match() != /[0-9]/) {
          output.push(result);
        } else {
          document.getElementById('decryptBox').value = 'Invalid Input';
        }
    } else if (result.isEmpty() && result.length == 0){
        document.getElementById('decryptBox').value = '';
      } 
    }
    document.getElementById('decryptBox').value = output.join('');
}
  
function copyToClipboard() {
    let copyText = document.getElementById('decryptBox');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert('Copied to Clipboard!');
    copyText.setSelectionRange(0, 0);
    copyText.select() = false;
}

function link(){
    location.target = "_blank";
    location.href = this.href;
}

function confirmExit(){
  if (window.close() == true){
    let userConfirm = window.confirm('There's maybe unsaved data, proceed to exit?');
      if(userConfirm){
        window.close();
      }
    }
}
