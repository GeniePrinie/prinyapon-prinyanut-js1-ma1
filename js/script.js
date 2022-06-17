//1
let cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

//2
let heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//3
heading.style.fontSize = "2em";

//4
heading.classList += "subheading";

//5
const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

//6
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML += `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

//7
const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function catList(list) {
  for (i = 0; i < list.length; i++) {
    console.log(cats[i].name);
  }
}

catList(cats);

//8
function createCats(cats) {
  let html = "";
  let catName = "";
  let catAge = "";

  for (let i = 0; i < cats.length; i++) {
    catName = cats[i].name;
    catAge = cats[i].age;

    if (!catAge) {
      catAge = "Age unknown";
    }

    html += `<div class="cat-container">
                <h5>${catName}</h5>
                <p>${catAge}</p>
            </div>`;
  }
  return html;
}

const newHTML = createCats(cats);

let catContainer = document.querySelector(".cat-container");
catContainer.innerHTML += newHTML;
