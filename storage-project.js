window.addEventListener("DOMContentLoaded", (event) => {

const theCart = document.getElementById('shopping-cart');
const ul = document.createElement('ul');
ul.id = 'theList';
theCart.appendChild(ul);

 const showCart = () => {

 let length = localStorage.length;

 for (let i = 0; i < length; i++){
   let key = localStorage.key(i);
   let value = localStorage.getItem(key);

   const li = document.createElement('li');
   li.innerText = key + ", " + value;

   const but = document.createElement('button');
   but.id = `${key}`;
   but.className = 'form__submit';
   but.innerText = `Remove ${key}`;

   ul.appendChild(li);
   ul.appendChild(but);
 }
  }



  // const storeItem = () => {
const storeBut = document.getElementById('add-to-cart');
const input = document.getElementById('items');
const quantity = document.getElementById('quantity');

storeBut.addEventListener('click', event => {
localStorage.setItem(`${input.value}`, `${quantity.value}`);
})

ul.addEventListener('click', event => {
  console.log(event.target.id);
  localStorage.removeItem(event.target.id);
  location.reload();
})

showCart();

});
