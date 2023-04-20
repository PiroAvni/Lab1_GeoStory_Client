const playModal = new bootstrap.Modal(document.getElementById('howToPlay'));
const hintModal = new bootstrap.Modal(document.getElementById('exampleHint'));
const closePlay = document.getElementById('playCloseBtn');
const closeHint = document.getElementById('hintCloseBtn');


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


