const container = document.querySelector('.container');

function clicked(continent) {
    const url = `../pages/continents/${continent}.html`;
    window.location.href = url;
}

function randImg(continent) {
    fetch(`http://localhost:3000/${continent}/random`)
        .then(response => response.json())
        .then(grabImg)
        .catch(error => {
            console.error('Error fetching image:', error);
        });
}

function grabImg(data) {
    const randIdx = Math.floor(Math.random() * data.img.length);
    const imgRand = data.img[randIdx];
    console.log(imgRand);
    const img = document.createElement("img");
    img.src = imgRand["num"];
    container.appendChild(img);
}
