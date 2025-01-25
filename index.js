// local review data
const reviews = [
  {
    id: 1,
    name: 'Susan smith',
    job: 'Web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'Anna johnson',
    job: 'Web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'Peter jones',
    job: 'Intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'Bill anderson',
    job: 'The boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

let personImgEl = document.getElementById("personImg");
let authorEl = document.getElementById("author");
let jobEl = document.getElementById("job");
let infoEl = document.getElementById("info");

let prevBtnEl = document.querySelector(".prevBtn");
let nextBtnEl = document.querySelector(".nextBtn");
let randomBtnEl = document.querySelector(".randomBtn");

// set starting counter

let courentItem = 0;

// load initial item

window.addEventListener("DOMContentLoaded", function(){
  showPerson(courentItem);
  
  setInterval(function(){
    courentItem++
    if(courentItem > reviews.length-1){
      courentItem = 0
    }
    showPerson()
  },2000)
 
});

// show based on person

function showPerson(){
  let item = reviews[courentItem];
  personImgEl.src = item.img;
  authorEl.textContent = item.name;
  jobEl.textContent = item.job;
  infoEl.textContent = item.text;
}

// Next button

nextBtnEl.addEventListener("click", function(){
  courentItem++
  if(courentItem > reviews.length-1){
    courentItem = 0
  }
  showPerson()
})
// Prev Button

prevBtnEl.addEventListener("click", function(){
  courentItem--
  if(courentItem < 0){
    courentItem = reviews.length - 1;
  }
  showPerson();
})

// random Button 

randomBtnEl.addEventListener("click", function(){
  courentItem = Math.floor(Math.random()*reviews.length)
  showPerson()
})