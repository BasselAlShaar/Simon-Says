
let btn_blue;
let btn_green;
let btn_yellow;
let btn_red;

const audio_blue = new Audio("sounds/blue.mp3");
const audio_red = new Audio("sounds/red.mp3");
const audio_green = new Audio("sounds/green.mp3");
const audio_yellow = new Audio("sounds/yellow.mp3");
const audio_wrong = new Audio("sounds/wrong.mp3");


let buttonColors = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;
let random_number;
let time = 800;
let time_clicked = 100;

function getElements() {
    btn_blue = document.getElementById("blue");
    btn_red = document.getElementById("red");
    btn_yellow = document.getElementById("yellow");
    btn_green = document.getElementById("green");
}
getElements();

async function rand_number() {
    random_number = Math.floor(Math.random() * 4) + 1;
}

async function push_pattern() {
    rand_number();
    if (random_number == 1) {
        gamePattern.push("blue");
    }
    if (random_number == 2) {
        gamePattern.push("red");
    }
    if (random_number == 3) {
        gamePattern.push("yellow");
    }
    if (random_number == 4) {
        gamePattern.push("green");
    }
}

async function start_game() {
    gamePattern=[];
    push_pattern();
    push_pattern();
    push_pattern();
    push_pattern();


    for (let i =0; i <= gamePattern.length; i++){
        if (gamePattern[i] == "yellow") {
            audio_yellow.play();
            btn_yellow.classList.add("clicked");
            await new Promise(r => setTimeout(r, time_clicked));
            btn_yellow.classList.remove("clicked");
        }
        if (gamePattern[i] == "green") {
            audio_green.play();
            btn_green.classList.add("clicked");
            await new Promise(r => setTimeout(r, time_clicked));
            btn_green.classList.remove("clicked");
        }
        if (gamePattern[i] == "red") {
            audio_red.play();
            btn_red.classList.add("clicked");
            await new Promise(r => setTimeout(r, time_clicked));
            btn_red.classList.remove("clicked");
        }
        if (gamePattern[i] == "blue") {
            audio_blue.play();
            btn_blue.classList.add("clicked");
            await new Promise(r => setTimeout(r, time_clicked));
            btn_blue.classList.remove("clicked");
        }
        await new Promise(r => setTimeout(r, time));
    }
}

function listen() {
    document.addEventListener('keypress', async() => {

    if (!started) {
        await start_game();
        document.querySelector("#level-title").textContent = `Level ${level}`
        started = true
    }
}) 

btn_blue.addEventListener('click', async () => {
    if (started) {
        audio_blue.play();
        btn_blue.classList.add("clicked");
        await new Promise(r => setTimeout(r, time_clicked));
        btn_blue.classList.remove("clicked");
        userClickedPattern.push("blue");
        check();
    }
});

btn_red.addEventListener('click', async () => {
    if (started) {
        audio_red.play();
        btn_red.classList.add("clicked");
        await new Promise(r => setTimeout(r, time_clicked));
        btn_red.classList.remove("clicked");
        userClickedPattern.push("red");
        check();
    }
});

btn_green.addEventListener('click', async () => {
    if (started) {
        audio_green.play();
        btn_green.classList.add("clicked");
        await new Promise(r => setTimeout(r, time_clicked));
        btn_green.classList.remove("clicked");
        userClickedPattern.push("green");
        check();
    }
});

btn_yellow.addEventListener('click', async () => {
    if (started) {
        audio_yellow.play();
        btn_yellow.classList.add("clicked");
        await new Promise(r => setTimeout(r, time_clicked));
        btn_yellow.classList.remove("clicked");
        userClickedPattern.push("yellow");
        check();
    }
});
}
document.addEventListener('keypress', async() => {

    if (!started) {
        document.querySelector("#level-title").textContent = `Level ${level}`
        started = true
        start_game();
    }
}) 

btn_blue.addEventListener('click', async () => {
    if (started) {
        audio_blue.play();
        btn_blue.classList.add("clicked");
        await new Promise(r => setTimeout(r, time_clicked));
        btn_blue.classList.remove("clicked");
        userClickedPattern.push("blue");
        check();
    }
});

btn_red.addEventListener('click', async () => {
    if (started) {
        audio_red.play();
        btn_red.classList.add("clicked");
        await new Promise(r => setTimeout(r, time_clicked));
        btn_red.classList.remove("clicked");
        userClickedPattern.push("red");
        check();
    }
});

btn_green.addEventListener('click', async () => {
    if (started) {
        audio_green.play();
        btn_green.classList.add("clicked");
        await new Promise(r => setTimeout(r, time_clicked));
        btn_green.classList.remove("clicked");
        userClickedPattern.push("green");
        check();
    }
});

btn_yellow.addEventListener('click', async () => {
    if (started) {
        audio_yellow.play();
        btn_yellow.classList.add("clicked");
        await new Promise(r => setTimeout(r, time_clicked));
        btn_yellow.classList.remove("clicked");
        userClickedPattern.push("yellow");
        check();
    }
});


async function nextSequence() {
    if (level % 2 == 0) {
        shuffle();
    }
    if (gamePattern[gamePattern.length-1] == "yellow") {
        audio_yellow.play();
        btn_yellow.classList.add("clicked");
        await new Promise(r => setTimeout(r, time_clicked));
        btn_yellow.classList.remove("clicked");
    }
    if (gamePattern[gamePattern.length-1] == "green") {
        audio_green.play();
        btn_green.classList.add("clicked");
        await new Promise(r => setTimeout(r, time_clicked));
        btn_green.classList.remove("clicked");
    }
    if (gamePattern[gamePattern.length-1] == "red") {
        audio_red.play();
        btn_red.classList.add("clicked");
        await new Promise(r => setTimeout(r, time_clicked));
        btn_red.classList.remove("clicked");
    }
    if (gamePattern[gamePattern.length-1] == "blue") {
        audio_blue.play();
        btn_blue.classList.add("clicked");
        await new Promise(r => setTimeout(r, time_clicked));
        btn_blue.classList.remove("clicked");
    }
    await new Promise(r => setTimeout(r, time));
}

async function check() {
    if (userClickedPattern.length !==0 && userClickedPattern[userClickedPattern.length - 1] != gamePattern[userClickedPattern.length - 1]) {
        lose();
    }
    if (started && gamePattern.length == userClickedPattern.length) {
        await new Promise(r => setTimeout(r, time));
        level++;
        document.querySelector("#level-title").textContent = `Level ${level}`
        userClickedPattern = [];
        push_pattern();
        nextSequence();
    }
}

async function lose() {
    audio_wrong.play();
    userClickedPattern = [];
    gamePattern = [];
    level = 0;
    started = false;
    document.querySelector("#level-title").textContent = "Press Any Key To Start";
    document.getElementsByTagName("body")[0].classList.add("lose");
    await new Promise(r => setTimeout(r, time_clicked));
    document.getElementsByTagName("body")[0].classList.remove("lose");
}


async function shuffle() {
    let rows=0
    let insert=0;
    const container = document.getElementsByClassName("container");
    const row1 = document.getElementById("row1");
    const row2 = document.getElementById("row2");
    row1.remove();
    row2.remove();
    const row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("id", "row1");
    container[0].appendChild(row);
    
    buttonColors = buttonColors.sort((a, b) => 0.5 - Math.random());
    for (let i = 0; i < buttonColors.length; i++){
        random_row = Math.floor(Math.random() * 2);
        if (rows == 2) {
            insert = 1;
            const second_row = document.createElement('div');
            second_row.classList.add('row');
            second_row.setAttribute("id", "row2")
            container[0].appendChild(second_row);
        }
        if (buttonColors[i] == "yellow") {
            const div = document.createElement("div");
            div.classList.add("btn");
            div.classList.add("yellow");
            div.setAttribute("type", "button");
            div.setAttribute("id", "yellow");
            document.getElementsByClassName("row")[insert].appendChild(div);
        }
        if (buttonColors[i] == "blue") {
            const div = document.createElement("div");
            div.classList.add("btn");
            div.classList.add("blue");
            div.setAttribute("type", "button");
            div.setAttribute("id", "blue");
            document.getElementsByClassName("row")[insert].appendChild(div);
        }
        if (buttonColors[i] == "red") {
            const div = document.createElement("div");
            div.classList.add("btn");
            div.classList.add("red");
            div.setAttribute("type", "button");
            div.setAttribute("id", "red");
            document.getElementsByClassName("row")[insert].appendChild(div);
        }
        if (buttonColors[i] == "green") {
            const div = document.createElement("div");
            div.setAttribute("type", "button");
            div.setAttribute("id", "green");
            div.classList.add("btn");
            div.classList.add("green");
            document.getElementsByClassName("row")[insert].appendChild(div);
        }
        rows++;
    }
    console.log(btn_blue);
    console.log(btn_red);
    console.log(btn_green);
    console.log(btn_yellow);
    getElements();
    listen();
}