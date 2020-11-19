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

  if (percentage >= 30) {
    document.querySelector(
      '.message-paragraph'
    ).textContent = `This relationship might work out between ${firstName} and ${crushName}, but the chance is very small. A successful relationship is possible, but you both have to work on it. Do not sit back and think that it will all work out fine, because it might not be working out the way you wanted it to. Spend as much time with each other as possible. Again, the chance of this relationship working out is very small, so even when you do work hard on it, it still might not work out.`;
  }

  if (percentage >= 50) {
    document.querySelector(
      '.message-paragraph'
    ).textContent = `The chance of a relationship working out between ${firstName} and ${crushName} is not very big, but a relationship is very well possible, if the two of you really want it to, and are prepared to make some sacrifices for it. You'll have to spend a lot of quality time together. You must be aware of the fact that this relationship might not work out at all, no matter how much time you invest in it.`;
  }

  if (percentage >= 70) {
    document.querySelector(
      '.message-paragraph'
    ).textContent = `A relationship between ${firstName} and ${crushName} has a reasonable chance of working out, but on the other hand, it might not. Your relationship may suffer good and bad times. If things might not be working out as you would like them to, do not hesitate to talk about it with the person involved. Spend time together, talk with each other.`;
  } else {
    document.querySelector(
      '.message-paragraph'
    ).textContent = `A relationship between ${firstName} and ${crushName} has a very good chance of being successful, but this doesn't mean that you don't have to work on the relationship. Remember that every relationship needs spending time together, talking with each other etc.`;
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
