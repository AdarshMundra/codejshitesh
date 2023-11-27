# Project DOM

## Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1 
```
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', (event) => {
    switch (event.target.id) {
      case 'grey':
        body.style.backgroundColor = event.target.id;
        break;
      case 'white':
        body.style.backgroundColor = event.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = event.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = event.target.id;
        break;
      default:
        body.style.backgroundColor = event.target.id;
    }
  });
});
```

## Project 2
```
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```

## Project 3
```
const clock = document.getElementById('clock');
console.log(clock);

setInterval(() => {
  let date = new Date();
  console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```
## Project 4
```
```