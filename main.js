'use strict';

let percentage = Math.trunc(Math.random() * 100) + 1;

document.querySelector('.check').addEventListener('click', function () {
  document.querySelector('.number').textContent = percentage;
  let firstName = document.querySelector('.input-name').value;
  let crushName = document.querySelector('.input-crush').value;
  console.log(firstName, crushName);

  if (!firstName && !crushName) {
    document.querySelector('.message-paragraph').textContent =
      '⛔ Please Enter A Valid Input';
  }

  if (percentage < 31) {
    document.querySelector(
      '.message-paragraph'
    ).textContent = `Oops! Sorry This relationship between ${firstName} and ${crushName} has no chance of working! Nature sometimes do play trick on us. Your Missing rib is out there. Keep On Searching!!!`;
  } else if (percentage < 51) {
    document.querySelector(
      '.message-paragraph'
    ).textContent = `The chance of a relationship working out between ${firstName} and ${crushName} is not very big, but a relationship is very well possible, if the two of you really want it to, and are prepared to make some sacrifices for it. You'll have to spend a lot of quality time together. You must be aware of the fact that this relationship might not work out at all, no matter how much time you invest in it.`;
  } else if (percentage < 71) {
    document.querySelector(
      '.message-paragraph'
    ).textContent = `To be brave is to love unconditionally without expecting anything in return. ${firstName} and ${crushName} needs to put a little effort in your relationship. Things might not be working out as you would like them to, do not hesitate to talk about it with the person involved. Spend time together, talk with each other. `;
  } else {
    document.querySelector(
      '.message-paragraph'
    ).textContent = `${firstName} and ${crushName} are two people in love, alone, isolated from the world, that's beautiful. You look at each other and see the rest of your life in each others eyes. A God given blessing!. For you guys, Love is a promise; it is a souvenir, once given never forgotten.`;
  }
});

// RESET FUNCTIONALIY
document.querySelector('.again').addEventListener('click', function () {
  percentage = Math.trunc(Math.random() * 100) + 1;
  document.querySelector('.number').textContent = '%';
  document.querySelector(
    '.message-paragraph'
  ).textContent = `“You've gotta dance like there's nobody watching, Love like you'll
  never be hurt, Sing like there's nobody listening, And live like
  it's heaven on earth.”`;
  document.querySelector('.input-name').value = '';
  document.querySelector('.input-crush').value = '';
});
