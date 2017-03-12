var memes = ['One love', 'Ein Danker Guy', 'Ein Meemstar', 'a guader Hawara', 'Umweltbeauftrager ♻️️']

function generateMeme() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;

  if(firstName === undefined || firstName === null || firstName.length <= 0) {
    alert('First Name not defined');
    return;
  }
  if(lastName === undefined || lastName === null || lastName.length <= 0) {
    alert('Last Name not defined');
    return;
  }

  var wordCount = firstName.length + lastName.length;

  var memeId = Math.round(Math.random() * (memes.length -1));
  var meme = memes[memeId];

  var outputString = firstName + " " + lastName + "<br>" +
    '2 Wörter <br>' +
    wordCount + ' Buchstaben <br>' +
    meme;

  document.getElementById('output').innerHTML = outputString;
}

window.onload = function() {
  document.getElementById('generateMeme').addEventListener('click', generateMeme);
};
