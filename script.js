// question 1
const cat = {
  complain: function() {
    return "Meow!";
  }
};
console.log(cat.complain());

// question 2
const heading = document.querySelector("h3");
console.dir(heading);

// question 3
heading.style.fontSize = "2em";

// question 4
heading.add("subheading");

// question 5
const paragraphs = document.querySelectorAll("p");

// question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph<p>`;

// question 7
function catFunction(catArray) {
  for (let i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
  }
}
const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  }
];
catFunction(cats);

// question 8
function catFunction(catArray) {
  let catDetails = "";
  for (let i = 0; i < catArray.length; i++) {
    catDetails += `<h5>${catArray[i].name}</h5>`;
  }
  return catDetails;
}

// question 9
resultsContainer.innerHTML = catFunction(cats);

// question 10
function catFunction(catArray) {
  let catHTML = "";

  for (let i = 0; i < catArray.length; i++) {
    let catAge = "Age Unknown";

    if (catArray[i].age) {
      catAge = catArray[i].age;
    }
    // fixed
    catHTML+= `<div>
                          <h5>${catArray[i].name}</h5>
                          <p>${catAge}</p>
                        </div>`;
    console.log(catDetails);
    
  }
   // fixed
   console.log(catHTML) 
}
