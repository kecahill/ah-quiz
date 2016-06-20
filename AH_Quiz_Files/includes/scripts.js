var catA = 0;
var catB = 0;

document.getElementById('buttonQ1A1').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  console.log("Cat A: " + catA);
  console.log("Cat B: " + catB);
  categoryFunction();
}

document.getElementById('buttonQ1A2').onclick = function() {
  catB = catB + 1;
  console.log("Cat A: " + catA);
  console.log("Cat B: " + catB);
  categoryFunction();

}

function categoryFunction() {
  var categories = [catA, catB];
  console.log(categories);

  function getMaxOfArray(categories) {
    return Math.max.apply(null, categories);
  }
  console.log("The highest number is: " + getMaxOfArray(categories));

}
