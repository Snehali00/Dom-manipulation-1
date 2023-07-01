// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"The future belongs to those who believe in the beauty of their dreams."`,
    person: `Eleanor Roosevelt`,
  },
  {
    quote: `"The only way to do great work is to love what you do."`,
    person: `Steve Jobs`,
  },
  {
    quote: `"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."`,
    person: `Albert Schweitzer`,
  },
  {
    quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person: `Nelson Mandela`,
  },
  {
    quote: `"Believe you can and you're halfway there."`,
    person: `Theodore Roosevelt`,
  },
  {
    quote: `"In the end, it's not the years in your life that count. It's the life in your years."`,
    person: `Abraham Lincoln`,
  },
  {
    quote: `"You miss 100% of the shots you don't take."`,
    person: `Wayne Gretzky`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
