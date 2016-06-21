// Quiz result options in a separate object for flexibility
var resultOptions = [{
  title: 'Group 1 -  Big Dogs, calm easy-going',
  desc: '<p>Bernese Mtn,  Bullmastiff, Tibetan Mastiff, Shar-Pei, Greyhound</p><img src="http://i.imgur.com/tXTjD9k.jpg"/>'
}, {
  title: 'Group 2 - Big dogs, some attention/maintenance needed',
  desc: '<p>Chesapeake Bay Retriever, Collie, English Setter, Bearded Collie, Wirehaired Pointer</p><img src="http://i.imgur.com/dipkE0v.jpg"/>'
}, {
  title: 'Group 3 - Big Dogs, need a lot of attention',
  desc: '<p>German Shorthaired Pointer, Vizsla, Alaskan Malamute, Boxer, Akita</p><img src="http://i.imgur.com/WXox0Yv.jpg"/>'
}, {
  title: 'Group 4 - Medium/Large Dogs, need less attention',
  desc: '<p>Welsh Corgi, Chow Chow, Skye Terrier, Afghan Hound, Shar-Pei</p><img src="http://i.imgur.com/NH5cunw.png"/>'
}, {
  title: 'Group 5 - Medium Large dogs - moderate attention/maintenance',
  desc: '<p>Bearded Collie, Collie, Chesapeake Bay Retriever, English Setter, American Water Spaniel</p><img src="http://i.imgur.com/NH5cunw.png"/>'
}, {
  title: 'Group 6 - Medium to Large Dogs that need a lot of attention',
  desc: '<p>Bearded Collie, Collie, Chesapeake Bay Retriever, English Setter, American Water Spaniel</p><img src="http://i.imgur.com/NH5cunw.png"/>'
}, {
  title: 'Group 7 - Small to Medium dogs less attention',
  desc: '<p>Bearded Collie, Collie, Chesapeake Bay Retriever, English Setter, American Water Spaniel</p><img src="http://i.imgur.com/NH5cunw.png"/>'
}, {
  title: 'Group 8 - Small to Medium dogs moderate energy/attention',
  desc: '<p>Bearded Collie, Collie, Chesapeake Bay Retriever, English Setter, American Water Spaniel</p><img src="http://i.imgur.com/NH5cunw.png"/>'
}, {
  title: 'Group  9 - Small to Medium dogs energetic/attention',
  desc: '<p>Bearded Collie, Collie, Chesapeake Bay Retriever, English Setter, American Water Spaniel</p><img src="http://i.imgur.com/NH5cunw.png"/>'
}, {
  title: 'Group 10 - tiny to small low energy',
  desc: '<p>Bearded Collie, Collie, Chesapeake Bay Retriever, English Setter, American Water Spaniel</p><img src="http://i.imgur.com/NH5cunw.png"/>'
}, {
  title: 'Group 11 - tiny to small medium energy',
  desc: '<p>Bearded Collie, Collie, Chesapeake Bay Retriever, English Setter, American Water Spaniel</p><img src="http://i.imgur.com/NH5cunw.png"/>'
}, {
  title: 'Group 12 - tiny to small high energy',
  desc: '<p>Bearded Collie, Collie, Chesapeake Bay Retriever, English Setter, American Water Spaniel</p><img src="http://i.imgur.com/NH5cunw.png"/>'
}];

var catA = 0;
var catB = 0;
var catC = 0;
var catD = 0;
var catE = 0;
var catF = 0;
var catG = 0;
var catH = 0;
var catI = 0;
var catJ = 0;
var catK = 0;
var catL = 0;

document.getElementById('buttonQ1A1').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  categoryFunction();
}

document.getElementById('buttonQ1A2').onclick = function() {
  catB = catB + 1;
  categoryFunction();
}

document.getElementById('buttonQ1A3').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  categoryFunction();
}

document.getElementById('buttonQ1A4').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  categoryFunction();
}

document.getElementById('buttonQ2A1').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  categoryFunction();
}

document.getElementById('buttonQ2A2').onclick = function() {
  catB = catB + 1;
  categoryFunction();

}

document.getElementById('buttonQ2A3').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  categoryFunction();
}
document.getElementById('buttonQ2A4').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  categoryFunction();
}

document.getElementById('buttonQ3A1').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  categoryFunction();
}

document.getElementById('buttonQ3A2').onclick = function() {
  catB = catB + 1;
  categoryFunction();

}

document.getElementById('buttonQ3A3').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  categoryFunction();
}

document.getElementById('buttonQ3A4').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ4A1').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ4A2').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ4A3').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ4A4').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}


document.getElementById('buttonQ5A1').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ5A2').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ5A3').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ5A4').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ6A1').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ6A2').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ6A3').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ6A4').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ7A1').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ7A2').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ7A3').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ7A4').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ9A1').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ9A2').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ9A3').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ9A4').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ10A1').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ10A2').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ10A3').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ10A4').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ11A1').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ11A2').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ11A3').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ11A4').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ12A1').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ12A2').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ12A3').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ12A4').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ13A1').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ13A2').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ13A3').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

document.getElementById('buttonQ13A4').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  categoryFunction();
}

function categoryFunction() {
  var categories = [catA, catB, catC, catD, catE, catF, catG, catH, catI, catJ, catK, catL,];
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
  resultsDesc.replaceWith("<p>" + resultOptions[n].desc + "</p>");

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