let myButton = document.getElementById('my-button')
let myDiv = document.getElementById('my-div')

myButton.addEventListener('click', () => {
    let timerId = null
    let x = 0

    setInterval(() => {

        if(x >= 200 ) {
            //stopping
            clearInterval(timerId)
        }
        else{
            x+=1
            myDiv.style.left = x + "px"
        }
    }, 5)
})


//CANVAS

// // it is frame and picture
let canvas = document.getElementById('my-canvas')
let context = canvas.getContext('2d')
// // it is a paiting in a picture frame
// let context = canvas.getContext('2d')

// // making a half diagnol and half straight verical line
// context.beginPath()
// context.moveTo(0,0)
// context.lineTo(250,250)
// context.lineTo(250,500)
// context.moveTo(500,0)
// context.lineTo(250,250)
// context.stroke()


//DRAW RECTANGLE
// let context = canvas.getContext('2d')
// context.fillStyle = "black";
// context.fillRect(0, 0, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(0, 0, 250, 250);

// context.fillStyle = "red";
// context.fillRect(0, 250, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(0, 250, 250, 250);

// context.fillStyle = "green";
// context.fillRect(250, 250, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(250, 250, 250, 250);

// context.fillStyle = "blue";
// context.fillRect(250, 0, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(250, 0, 250, 250);

//circle

context.fillStyle = "lightblue";
context.strokeStyle = "darkblue";
context.lineWidth = 10;
context.beginPath();
context.arc(250, 250, 200, 0, 2 * Math.PI);
context.stroke();
context.fill();

context.font = "50px MV Boli";
context.fillStyle = "grey";
context.textAlign = "center";
context.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2);
