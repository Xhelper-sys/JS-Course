const button = document.querySelector('.js-button');
console.log(button.classList.contains('js-button'));

function changeColor(type){
  const buttonGaming = document.querySelector(`.button-${type}`);
  if (buttonGaming.classList.contains('is-toggled')) {
    buttonGaming.classList.remove('is-toggled');
  } else {
    buttonGaming.classList.add('is-toggled');
  }
}