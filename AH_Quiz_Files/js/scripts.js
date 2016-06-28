// Quiz result options in a separate object for flexibility
var resultTitleOptions = [{
  title: 'Group 1 - Big dogs, calm, easy-going'
}, {
  title: 'Group 2 - Big dogs, some attention/maintenance needed'
}, {
  title: 'Group 3 - Big Dogs, need a lot of attention'
}, {
  title: 'Group 4 - Medium/Large Dogs, need less attention'
}, {
  title: 'Group 5 - Medium Large dogs - moderate attention/maintenance'
}, {
  title: 'Group 6 - Medium to Large Dogs that need a lot of attention'
}, {
  title: 'Group 7 - Small to Medium dogs less attention'
}, {
  title: 'Group 8 - Small to Medium dogs moderate energy/attention'
}, {
  title: 'Group  9 - Small to Medium dogs energetic/attention'
}, {
  title: 'Group 10 - tiny to small low energy'
}, {
  title: 'Group 11 - tiny to small medium energy'
}, {
  title: 'Group 12 - tiny to small high energy'
}];

var resultOtherOptions = [{
  desc: 'Bernese Mtn<br/>Bullmastiff<br/>Tibetan Mastiff<br/>Shar-Pei<br/>Greyhound'
}, {
  desc: 'Chesapeake Bay Retriever<br/>Collie<br/>English Setter<br/>Bearded Collie<br/>Wirehaired Pointer'
}, {
  desc: 'German Shorthaired Pointer<br/>Vizsla<br/>Alaskan Malamute<br/>Boxer<br/>Akita'
}, {
  desc: 'Welsh Corgi<br/>Chow Chow<br/>Skye Terrier<br/>Afghan Hound<br/>Shar-Pei'
}, {
  desc: 'Bearded Collie<br/>Collie<br/>Chesapeake Bay Retriever<br/>English Setter<br/>American Water Spaniel'
}, {
  desc: 'Australian Cattle Dog<br/>American Foxhound<br/>Airedale Terrier<br/>Border Collie<br/>Boxer'
}, {
  desc: 'Skye Terrier<br/>Afghan Hound<br/>Welsh Corgi<br/>Lhasa Apso'
}, {
  desc: 'West Highland Terrier<br/>Keeshond<br/>Brittany<br/>Cavalier King Charles Spaniel<br/>Minituare Schnauzer'
}, {
  desc: 'German Pinscher<br/>Miniature Bull Terrier<br/>Lakeland Terrier<br/>Border Collie<br/>Australian Cattle Dog'
}, {
  desc: 'Sealyham Terrier<br/>Lhasa Apso'
}, {
  desc: 'Affenpinscher<br/>Cairn Terrier<br/>Miniature Schnauzer<br/>Scottish Terrier<br/>Shetland Sheepdog'
}, {
  desc: 'Jack Russel<br/>Lakeland Terrier<br/>Miniature Pinscher<br/>Parson Russel<br/>Poodle (mini)<br/>Chihuahua'
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
  catF = catF + 1;
  catG = catG + 1;
  catH = catH + 1;
  catI = catI + 1;
  catJ = catJ + 1;
  catK = catK + 1;
  catL = catL + 1;
  categoryFunction();
}

document.getElementById('buttonQ1A2').onclick = function() {
  catF = catF + 1;
  catG = catG + 1;
  catH = catH + 1;
  catI = catI + 1;
  catJ = catJ + 1;
  catK = catK + 1;
  catL = catL + 1;
  categoryFunction();
}

document.getElementById('buttonQ2A1').onclick = function() {
  catG = catG + 1;
  catJ = catJ + 1;
  catK = catK + 1;
  catL = catL + 1;
  categoryFunction();
}

document.getElementById('buttonQ2A2').onclick = function() {
  catA = catA + 1;
  catD = catD + 1;
  catG = catG + 1;
  catH = catH + 1;
  catI = catI + 1;
  catJ = catJ + 1;
  catK = catK + 1;
  catL = catL + 1;
  categoryFunction();
}

document.getElementById('buttonQ3A1').onclick = function() {
  catD = catD + 1;
  catG = catG + 1;
  catH = catH + 1;
  catI = catI + 1;
  catJ = catJ + 1;
  catK = catK + 1;
  catL = catL + 1;
  categoryFunction();
}

document.getElementById('buttonQ4A3').onclick = function() {
  catA = catA + 1;
  catB = catB + 1;
  catD = catD + 1;
  catE = catE + 1;
  catG = catG + 1;
  catH = catH + 1;
  catJ = catJ + 1;
  catK = catK + 1;
  categoryFunction();
}


document.getElementById('buttonQ4A4').onclick = function() {
  catA = catA + 1;
  catD = catD + 1;
  catG = catG + 1;
  catJ = catJ + 1;
  categoryFunction();

}

document.getElementById('buttonQ5A1').onclick = function() {
  catA = catA + 1;
  catG = catG + 1;
  catI = catI + 1;
  categoryFunction();
}

document.getElementById('buttonQ5A2').onclick = function() {
  catA = catA + 1;
  catD = catD + 1;
  catG = catG + 1;
  catJ = catJ + 1;
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
  catC = catC + 1;
  catD = catD + 1;
  catE = catE + 1;
  catF = catF + 1;
  catG = catG + 1;
  catH = catH + 1;
  catI = catI + 1;
  catJ = catJ + 1;
  catK = catK + 1;
  categoryFunction();
}

document.getElementById('buttonQ7A1').onclick = function() {
  catA = catA + 3;
  catD = catD + 3;
  catG = catG + 3;
  catJ = catJ + 3;
  catK = catK + 3;
  categoryFunction();
}

document.getElementById('buttonQ7A2').onclick = function() {
  catA = catA + 3;
  catB = catB + 3;
  catD = catD + 3;
  catE = catE + 3;
  catG = catG + 3;
  catH = catH + 3;
  catK = catK + 3;
  catL = catL + 3;
  categoryFunction();
}

document.getElementById('buttonQ7A3').onclick = function() {
  catB = catB + 3;
  catC = catC + 3;
  catE = catE + 3;
  catF = catF + 3;
  catH = catH + 3;
  catI = catI + 3;
  catL = catL + 3;
  categoryFunction();
}

document.getElementById('buttonQ7A4').onclick = function() {
  catC = catC + 3;
  catF = catF + 3;
  catI = catI + 3;
  categoryFunction();
}

document.getElementById('buttonQ8A1').onclick = function() {
  catJ = catJ + 1;
  catK = catK + 1;
  categoryFunction();
}

document.getElementById('buttonQ8A3').onclick = function() {
  catB = catB + 1;
  catC = catC + 1;
  catE = catE + 1;
  catF = catF + 1;
  catH = catH + 1;
  catJ = catJ + 1;
  catL = catL + 1;
  categoryFunction();
}

document.getElementById('buttonQ8A4').onclick = function() {
  catF = catF + 1;
  catI = catI + 1;
  categoryFunction();
}

document.getElementById('buttonQ9A1').onclick = function() {
  catJ = catJ + 4;
  catK = catK + 4;
  catL = catL + 4;
  categoryFunction();
}

document.getElementById('buttonQ9A2').onclick = function() {
  catG = catG + 4;
  catH = catH + 4;
  catI = catI + 4;
  categoryFunction();
}

document.getElementById('buttonQ9A3').onclick = function() {
  catD = catD + 4;
  catE = catE + 4;
  catF = catF + 4;
  categoryFunction();
}

document.getElementById('buttonQ9A4').onclick = function() {
  catA = catA + 4;
  catB = catB + 4;
  catC = catC + 4;
  categoryFunction();
}

document.getElementById('buttonQ10A1').onclick = function() {
}

document.getElementById('buttonQ10A2').onclick = function() {
  catB = catB + 1;
  catC = catC + 1;
  catE = catE + 1;
  catF = catF + 1;
  catH = catH + 1;
  catI = catI + 1;
  catK = catK + 1;
  catL = catL + 1;
  categoryFunction();
}

document.getElementById('buttonQ10A3').onclick = function() {
  catC = catC + 1;
  catF = catF + 1;
  categoryFunction();
}

document.getElementById('buttonQ11A1').onclick = function() {
  catJ = catJ + 2;
  catK = catK + 2;
  catL = catL + 2;
  categoryFunction();
}

document.getElementById('buttonQ11A2').onclick = function() {
  catG = catG + 2;
  catH = catH + 2;
  catI = catI + 2;
  categoryFunction();
}

document.getElementById('buttonQ11A3').onclick = function() {
  catD = catD + 2;
  catE = catE + 2;
  catF = catF + 2;
  categoryFunction();
}

document.getElementById('buttonQ11A4').onclick = function() {
  catA = catA + 2;
  catB = catB + 2;
  catC = catC + 2;
  categoryFunction();
}

function categoryFunction() {
  var categories = [catA, catB, catC, catD, catE, catF, catG, catH, catI, catJ, catK, catL,];
  console.log(categories);

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

  var resultsTitle = $('#results h2');

  console.log("This is n: " + n);

 resultsTitle.replaceWith("<h2>" + resultTitleOptions[n].title + "</h2>");
  var resultsDesc = $('#results .desc');
resultsDesc.replaceWith("<p class='desc'>" + resultOtherOptions[n].desc + "</p>");

  console.log("This is n now: " + n);
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

        alert(result);
      } else {
        $($questions.get(currentQuestion)).fadeIn();
      }
    });

  });
});