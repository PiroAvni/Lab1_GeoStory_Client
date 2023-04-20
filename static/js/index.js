const images = {
    img: [
        "./assets/africa/Egypt_1.jpg",
        "./assets/africa/Egypt_1.jpg",
        "./assets/africa/Egypt_2.jpg",
        "./assets/cyprus/cyprus1.jpeg",
        "./assets/africa/Egypt_3.jpg",
        "./assets/africa/Mali_1.jpg",
        "./assets/cyprus/cyprus1.jpeg"
    ],
};

setInterval(image, 2500);
let setCount = 0;
function image() {
    const img = images.img;
    setCount++;
    const imgSlider = document.getElementById("setImage");
    //const imgSlider = document.createElement("img")
    if (setCount === 1 || setCount === 2 || setCount === 3) {
        imgSlider.src = img[setCount];
    }
    if (setCount === 4) {
        imgSlider.src = img[setCount];
        setCount = 0;
    }
    console.log(img[setCount]);
}
