// Quiz result options in a separate object for flexibility
var resultOptions = [{
  title: 'Result 1',
  desc: '<p>Result 1</p><img src="http://i.imgur.com/tXTjD9k.jpg"/>'
}, {
  title: 'Result 2',
  desc: '<p>Result 2</p><img src="http://i.imgur.com/dipkE0v.jpg"/>'
}, {
  title: 'Result 3',
  desc: '<p>Result 2</p><img src="http://i.imgur.com/WXox0Yv.jpg"/>'
}, {
  title: 'Result 4',
  desc: '<p>Result 2</p><img src="http://i.imgur.com/NH5cunw.png"/>'
}, {
  title: 'Result 5',
  desc: '<p>Result 2</p><img src="http://i.imgur.com/NH5cunw.png"/>'
}];

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

document.getElementById('buttonQ2A1').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  console.log("Cat A: " + catA);
  console.log("Cat B: " + catB);
  categoryFunction();
}

document.getElementById('buttonQ2A2').onclick = function() {
  catB = catB + 1;
  console.log("Cat A: " + catA);
  console.log("Cat B: " + catB);
  categoryFunction();

}

document.getElementById('buttonQ3A1').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  console.log("Cat A: " + catA);
  console.log("Cat B: " + catB);
  categoryFunction();
}

document.getElementById('buttonQ3A2').onclick = function() {
  catB = catB + 1;
  console.log("Cat A: " + catA);
  console.log("Cat B: " + catB);
  categoryFunction();

}

function categoryFunction() {
  var categories = [catA, catB];
  console.log(categories);

  // function getMaxOfArray(categories) {
  //   return Math.max.apply(null, categories);
  // }
  // console.log("The highest number is: " + getMaxOfArray(categories));

  //   var largest = categories[0];
  //   var i;
  //   for (i = 0; i < categories.length; i++) {
  //     if (categories[i] > largest)
  //       largest = categories[i];
  //   }

  //   var n = 0;
  //   n = largest;
  //   console.log("This is the largest: " + n);
  var n = 0;
  var largest = categories[0];
  var largestIndexCategory = 0;

  for (i = 0; i < categories.length; i++) {
    if (categories[i] > largest) {
      largest = categories[i];
      largestIndexCategory = i;
    }
  }

  console.log("This is the largest: " + largest);
  console.log("This is the largest Index: " + largestIndexCategory);
  
  n = largestIndexCategory;

  var resultsTitle = $('#results h1'),
    resultsDesc = $('#results .desc');
  resultsTitle.replaceWith("<h1>" + resultOptions[n].title + "</h1>");
  resultsDesc.replaceWith("<p class='desc'>" + resultOptions[n].desc + "</p>");

  console.log("This is n: " + n);
}

$(document).ready(function() {
  answers = new Object();
  $('.option').change(function() {
    var answer = ($(this).attr('value'))
    var question = ($(this).attr('name'))
    answers[question] = answer;
  })
  var item1 = document.getElementById('questions');

  var totalQuestions = $('.questions').size();
  var currentQuestion = 0;
  $questions = $('.questions');
  $questions.hide();
  $($questions.get(currentQuestion)).fadeIn();
  $('.answer-text').click(function() {
    $($questions.get(currentQuestion)).fadeOut(function() {
      currentQuestion = currentQuestion + 1;
      if (currentQuestion == totalQuestions) {
        var result = sum_values()
          //do stuff with the result
        alert(result);
      } else {
        $($questions.get(currentQuestion)).fadeIn();
      }
    });

  });
});