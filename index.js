const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const startBtn = document.querySelector("#start")
const inputEl = document.querySelector("#input-el")
let isAlive=false
let sign = Math.floor(Math.random()*3+1)

function start() {
	isAlive=true
	inputEl.value = ""
}

function renderRock () {
	if(sign===1 && isAlive===true){
		isAlive=true
		inputEl.value ="Draw";
	}else if(sign===2 && isAlive===true){
		isAlive=false
		inputEl.value ="Sorry you have lost";
	}else if(sign===3 && isAlive===true){
		isAlive=false
		inputEl.value ="Congrats you have won!!";
	}}

function renderPaper () {
	if(sign===1 && isAlive===true){
		isAlive=false
		inputEl.value = "Congrats you have won!!";
	}else if(sign===2 && isAlive===true){
		isAlive=true
		inputEl.value = "Draw";
	}else if(sign===3 && isAlive===true){
		isAlive=false
		inputEl.value = "sorry you have lost";
	}}

function renderScissors () {
	if(sign===1 && isAlive===true){
		isAlive=false
		inputEl.value = "sorry you have lost";
	}else if(sign===2 && isAlive===true){
		isAlive=false
		inputEl.value = "Congrats you have won!!";
	}else if(sign===3 && isAlive===true){
		isAlive=true
		inputEl.value = "Draw";
	}}

rock.addEventListener("click", function() {
	renderRock()
	sign = Math.floor(Math.random()*3+1)
})

paper.addEventListener("click", function() {
	renderPaper()
	sign = Math.floor(Math.random()*3+1)
})

scissors.addEventListener("click", function() {
	renderScissors()
	sign = Math.floor(Math.random()*3+1)
})

startBtn.addEventListener("click", function() {
	start()
})
