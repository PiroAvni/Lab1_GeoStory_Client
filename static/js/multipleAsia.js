///////////////////////////////////////////////////////
const leftBtn = document.querySelector('#btnLeft');
const middleBtn = document.querySelector('#btnMiddle');
const rightBtn = document.querySelector('#btnRight');
const answerModal = new bootstrap.Modal(document.getElementById('correctAnswer'));
const wrongAnswer = new bootstrap.Modal(document.getElementById('wrongAnswer'));

const randPlacesAsia = ["Indonesia", "China", "India", "South Korea", "Thailand", "Singapore", "Vietnam", "Singapore", "Hong Kong", "Saudi Arabia", "Israel", "Iran", "Taiwan", "Nepal", "Bangladesh", "Mongolia", "Maldives", "Iraq", "Lebanon", "Yemen", "Palestine", "Jordan", "Kuwait", "Syria"]

const chosenArr = []

let randid = Math.floor(Math.random() * randPlacesAsia.length);
let randidOther = Math.floor(Math.random() * randPlacesAsia.length - 1);

let correctAnswer = ""

function fetchPlace(continent) {
    fetch(`https://geostory-server.onrender.com/${continent}/random`)
        .then(response => response.json())
        .then(randomCountry)
        .catch(error => {
            console.error('Error fetching fact:', error);
        });

}

function randomCountry(input) {
    let includeArr = randPlacesAsia.splice(randid, 1);
    chosenArr.push(input.location);
    console.log(input.location);
    correctAnswer = input.location;

    let newArr = chosenArr.concat(includeArr);
    let includeNew = randPlacesAsia.splice(randidOther, 1);
    newArr = newArr.concat(includeNew);

    newArr = newArr.sort()

    document.getElementById("btnLeft").innerHTML = newArr[0];
    document.getElementById("btnMiddle").innerHTML = newArr[1];
    document.getElementById("btnRight").innerHTML = newArr[2];
}


function answerL() {
    if (document.getElementById("btnLeft").innerHTML === correctAnswer) {
        answerModal.show()
    } else {
        wrongAnswer.show()
    }
}

function answerM() {
    if (document.getElementById("btnMiddle").innerHTML === correctAnswer) {
        answerModal.show()
    } else {
        wrongAnswer.show()
    }
}

function answerR() {
    if (document.getElementById("btnRight").innerHTML === correctAnswer) {
        answerModal.show()
    } else {
        wrongAnswer.show()
    }
}

