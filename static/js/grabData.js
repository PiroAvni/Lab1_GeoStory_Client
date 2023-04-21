//hints, fun facts, multiple choice 
const container = document.querySelector('.container');
const hintBody = document.querySelector('.hintBody');
const factBody = document.querySelector('.factBody');
const factBtn = document.querySelector('#factBtn');
const leftBtn = document.querySelector('#btnLeft');
const middleBtn = document.querySelector('#btnMiddle');
const rightBtn = document.querySelector('#btnRight');
const answerModal = new bootstrap.Modal(document.getElementById('correctAnswer'));
const wrongAnswer = new bootstrap.Modal(document.getElementById('wrongAnswer'));
//how to play popup
const playModal = new bootstrap.Modal(document.getElementById('howToPlay'));
const hintModal = new bootstrap.Modal(document.getElementById('exampleHint'));
const closePlay = document.getElementById('playCloseBtn');
const closeHint = document.getElementById('hintCloseBtn');

const randPlaces = {
    europe: ["Germany", "France", "Greece", "Austria", "Belgium", "Croatia", "Sweden", "Norway", "Denmark", "Iceland", "Romania", "Albania", "Malta", "Hungray", "Serbia", "Slovakia", "Lithuania", "Monaco", "Lativa", "Estonia", "Switzerland"],
    north_america: ["Greenland", "Panama", "Costa Rica", "Puerto Rico", "Haiti", "Dominican Republic", "Guatemala", "El Salvador", "Honduras", "Nicaragua", "The Bahamas", "Belize", "Saint Lucia", "Grenada"],
    africa: [" Nigeria", "Kenya", "Ghana", "Morocco", "Senegal", "Uganda", "Algeria", "Cameroon", "Tanzania", "Niger", "Nambia", "Rwanda", "Zambia", "Mozambique", "Liberia", "Chad", "Gabon", "Sierra Leone", "Tongo", "Libya"],
    asia: ["Indonesia", "China", "India", "South Korea", "Thailand", "Singapore", "Vietnam", "Singapore", "Hong Kong", "Saudi Arabia", "Israel", "Iran", "Taiwan", "Nepal", "Bangladesh", "Mongolia", "Maldives", "Iraq", "Lebanon", "Yemen", "Palestine", "Jordan", "Kuwait", "Syria"],
    oceania: ["Australia", "Mirconesia", "Vanuatu", "Tonga", "Palau", "Tuvalu", "Nauru", "Guam", "Solomon Islands", "Marshall Islands", "New Caledonia", "Niue", "Norfolk Island", "Northern Mariana Island", "Pitcairn Islands"],
    south_america: ["Falkland Islands", " Bouvet Island", "Venezuela", "Suriname", "Paraguay", "Guyana", "Ecuador", "Colombia", "Bolivia", "Trinidad", "Tobago", "Aruba"]
}

const urlSegments = window.location.pathname.split('/');
const lastSegment = urlSegments[urlSegments.length - 1];
const continent = lastSegment.split('.')[0];

// fetch on load
window.onload = function () {
    fetchData(continent);
}

// Grabbing continent's data
function fetchData(continent) {
    fetch(`https://geostory-server.onrender.com/${continent}/random`)
        .then(response => response.json())
        .then(continentData)
        .catch(error => {
            console.error('Error fetching image:', error);
        });
}

function continentData(data) {
    grabImg(data);
    randomCountry(data);
    grabHint(data);
    grabFact(data);
}

function grabImg(data) {
    const randIdx = Math.floor(Math.random() * data.img.length);
    const imgRand = data.img[randIdx];
    const img = document.createElement("img");
    img.src = imgRand["num"];
    img.id = "continent_img";
    container.appendChild(img);
    console.log(data);
    console.log(imgRand);
}

const chosenArr = [];

let randid = Math.floor(Math.random() * randPlaces[continent].length);
let randidOther = Math.floor(Math.random() * randPlaces[continent].length - 1);

let correctAnswer = "";


function randomCountry(input) {
    let includeArr = randPlaces[continent].splice(randid, 1);
    chosenArr.push(input.location);
    correctAnswer = input.location;
    console.log(correctAnswer);

    let newArr = chosenArr.concat(includeArr);
    let includeNew = randPlaces[continent].splice(randidOther, 1);
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

//Getting Random Hints
function grabHint(data) {
    const randHint = Math.floor(Math.random() * data.hintQ.length);
    const hintRand = data.hintQ[randHint];
    const hintInfo = document.createElement("p");
    hintInfo.textContent = hintRand["num"];
    hintInfo.id = "continent_hint";
    hintBody.appendChild(hintInfo);
}


//Getting Facts
function grabFact(data) {
    const fact = data.fact;
    const factInfo = document.createElement("p");
    factInfo.textContent = fact;
    factInfo.id = "continent_fact";
    factBody.appendChild(factInfo);
}

//how to play popup
function showHowToPlay() {
    playModal.show();

    closePlay.addEventListener('click', function () {
        playModal.hide();
    })
}

function showHint() {
    hintModal.show();

    closeHint.addEventListener('click', function () {
        hintModal.hide();
    })
}
