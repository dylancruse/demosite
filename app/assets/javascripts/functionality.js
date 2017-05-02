/* global $ */
/* global display */
/* global lcv */
// $(document).ready(function () {

function getTemps() {
	var temps = [{
			"Tag": "Living Room",
			"X": 3.21,
			"Y": 42,
			"Temp": 69
		}, {
			"Tag": "Dining Room",
			"X": 3.21,
			"Y": 42,
			"Temp": 70
		}, {
			"Tag": "Bedroom",
			"X": 3.21,
			"Y": 42,
			"Temp": 72
		}];

	
	var display = document.getElementById("display");
	var ul = document.createElement("ul");
	display.appendChild(ul);
	
		
	for (var lcv = 0; lcv < temps.length; lcv++) {
		var text = temps[lcv].Tag + ": " + temps[lcv].Temp + "<br/>";
		var li = document.createElement("li");
		li.innerHTML = text;
		ul.appendChild(li);
	}
	
} // end function

setCurrentView("showTemps");

var addDevice = document.forms["addADevice"];
var deviceText = addDevice.elements["newDeviceID"];
deviceText.value = "Enter Device ID";

getTemps();

var temps = [{
			"Tag": "Living Room",
			"X": 3.21,
			"Y": 42,
			"Temp": 69
		}, {
			"Tag": "Dining Room",
			"X": 3.21,
			"Y": 42,
			"Temp": 70
		}, {
			"Tag": "Bedroom",
			"X": 3.21,
			"Y": 42,
			"Temp": 72
		}];

function displayTemps() {
	display.innerHTML = "";
	var ul = document.createElement("ul");
	display.appendChild(ul);
	for (lcv = 0; lcv < temps.length; lcv++) {
		var text = temps[lcv].Tag + ": " + temps[lcv].Temp;
		var li = document.createElement("li");
		li.innerText = text;
		ul.appendChild(li);
	}
	setCurrentView("showTemps");
}

function displayLights() {
	display.innerHTML = "There are no lights to display";
	setCurrentView("showLights");
}

function displayAlarms() {
	display.innerHTML = "There are no alarms to display";
	setCurrentView("showAlarms");
}

function setCurrentView(viewID){
	var buttons = document.getElementsByClassName("tabButton");
	for (var lcv = 0; lcv < buttons.length; lcv++) {
		buttons[lcv].removeAttribute("current");
	}
	
	var current = document.getElementById(viewID);
	var currentAttribute = document.createAttribute("current");
	currentAttribute.value = "current";
	current.attributes.setNamedItem(currentAttribute);
	
}

showLights.onclick = displayLights;

showAlarms.addEventListener("click", displayAlarms);

showTemps.onclick = displayTemps;

$('h3, div').each(function() {
  this.style.color = 'white';
});



displayData("showTemps");
$(".tabButton").click(function (e) {
	displayData(e.target.id);
});


function displayData(id) {
	$(".tabButton").removeAttr("current");
	$("#" + id).attr("current", "current");
	var output = "";
	switch (id) {
		case "showTemps":
			var temps = getTemps();
			output = "<ul>";
			$(temps).each(function (index, temp) {
				output += "<li>" + temp.Tag + ": " + temp.Temp + "</li>" });
			output += "</ul>";
			break;
		
		case "showLights":
			output = "There are no lightz";
			break;
		
		case "showAlarms":
			output = "There are no alarmz";
			break;
		
		default:
			output = "Invalid option";
			break;
	}
	$("#display").html(output);
} 