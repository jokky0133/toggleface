// script.js

document.addEventListener('DOMContentLoaded', () => {
  const faceButton = document.getElementById('faceButton');

  faceButton.addEventListener('click', () => {
    faceButton.classList.toggle('happy');
    faceButton.classList.toggle('sad');
  });

  // Create mouth element and append it to the button
  const mouth = document.createElement('div');
  mouth.classList.add('mouth');
  faceButton.appendChild(mouth);
});
