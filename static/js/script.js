const container = document.querySelector('.container');
const hintBody = document.querySelector('.hintBody');
const factBody = document.querySelector('.factBody');


function clicked(continent) {
    const url = `../pages/continents/${continent}.html`;
    window.location.href = url;
}

// Grabbing continent's images
function randImg(continent) {
    fetch(`https://geostory-server.onrender.com/${continent}/random`)
        .then(response => response.json())
        .then(grabImg)
        .catch(error => {
            console.error('Error fetching image:', error);
        });
}

function grabImg(data) {
    const randIdx = Math.floor(Math.random() * data.img.length);
    const imgRand = data.img[randIdx];
    // console.log(imgRand);
    const img = document.createElement("img");
    img.src = imgRand["num"];
    img.id = "continent_img";
    container.appendChild(img);

}


//Getting Random Hints
function fetchHint(continent) {
    fetch(`https://geostory-server.onrender.com/${continent}/random`)
        .then(response => response.json())
        .then(grabHint)
        .catch(error => {
            console.error('Error fetching hint:', error);
        });
}

function grabHint(data) {
    const randHint = Math.floor(Math.random() * data.hintQ.length);
    const hintRand = data.hintQ[randHint];
    // console.log(hintRand);
    const hintInfo = document.createElement("p");
    hintInfo.textContent = hintRand["num"];
    hintInfo.id = "continent_hint";
    hintBody.appendChild(hintInfo);
}


//Getting Facts
function fetchFact(continent) {
    fetch(`https://geostory-server.onrender.com/${continent}/random`)
        .then(response => response.json())
        .then(grabFact)
        .catch(error => {
            console.error('Error fetching fact:', error);
        });
}

function grabFact(data) {
    const fact = data.fact;
    // console.log(fact);
    const factInfo = document.createElement("p");
    factInfo.textContent = fact;
    factInfo.id = "continent_fact";
    factBody.appendChild(factInfo);
}
