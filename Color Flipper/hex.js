const hexS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
const N = 6;
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Event when clicking on the button
btn.addEventListener('click', function() {
    let hexColor = "#"
        //random symbols to get the color
    for (let k = 0; k < N; k++) {
        let rand = Math.round(Math.random() * (hexS.length - 1));
        hexColor += hexS[rand];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    console.log(hexColor);
});