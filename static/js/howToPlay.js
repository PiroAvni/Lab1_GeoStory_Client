window.onload = function () {
    const myModal = new bootstrap.Modal(document.getElementById('howToPlay'));
    myModal.show();

    const close = document.getElementById('closeBtn');
    close.addEventListener('click', function () {
        myModal.hide();
    })
}
