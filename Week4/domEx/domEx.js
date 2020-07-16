document.body.style.cssText = "background-color: navy";
document.getElementById("change").onclick = changeClass;
document.getElementById("style").onclick = changeStyle;
document.getElementById("text").onclick = updateText;
document.getElementById("newid").onclick = updateID;


function changeClass(){
	document.getElementById("div1").className = "yellowBg";
}

function changeStyle(){
	document.querySelector("#p1").style.backgroundColor="purple";
}

function updateText(){
	document.body.firstElementChild.textContent = "Changed the text";
}

function updateID(){
	document.querySelector("#p1").id = "p2";
}