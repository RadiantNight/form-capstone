// And: peanut butter&&jelly
// Or: Paper || plastic
// Not: I can't believe it's !butter&&jellyAssignment: var myNameIs="John"


// Populate select items
	// if O or E selected
	// Populate select items 1-9
	// if W selected
	// populate select items 1-5
	
var i = 1;


function makeRankNumbers(rankType) {
	var selectGrade = document.querySelector("#rank-number-select")
	while (selectGrade.lastChild.value != "") {
        selectGrade.removeChild(selectGrade.lastChild);
    }
	if (rankType == 1) {
		// alert ("Officer or Enlisted")
		for (var rankNumber = 1; rankNumber <10; rankNumber++ ) {
			createRankNumberElements(rankNumber)
			
			// var containerElement = document.querySelector("#container");
			// containerElement.appendChild(square);
		}
	}
	else{
		for (var rankNumber = 1; rankNumber < 6; rankNumber++) {
			createRankNumberElements(rankNumber)
		}
	}
	
}

function createRankNumberElements (rankNumber) {
	var rankNumberElement = document.createElement('option');
	rankNumberElement.setAttribute("value", rankNumber)
	rankNumberElement.innerText = rankNumber;
			
	var containerElement = document.querySelector("#rank-number-select");
	containerElement.appendChild(rankNumberElement)
}

// validate requirements


// Create new text document

// Open the new text document

// Write the entries to the text document

// Close the document

