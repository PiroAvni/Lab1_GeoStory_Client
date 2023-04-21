const playModal = new bootstrap.Modal(document.getElementById('howToPlay'));
const hintModal = new bootstrap.Modal(document.getElementById('exampleHint'));
const closePlay = document.getElementById('playCloseBtn');
const closeHint = document.getElementById('hintCloseBtn');

//on click load page
function clicked(continent) {
    const url = `../pages/continents/${continent}.html`;
    window.location.href = url;
}

window.onload = function () {
    showHowToPlay();

    closePlay.addEventListener('click', function () {
        playModal.hide();
    })
}

function showHowToPlay() {
    playModal.show();
}

function showHint() {
    hintModal.show();

    closeHint.addEventListener('click', function () {
        hintModal.hide();
    })
}
