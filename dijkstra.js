var graphAlsAdjazenzMatrixGewichtetEdgeassoziiert = [
	[{0: 0}, {2: 2}, {1: 3}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {4: 1}, {0: 0}],
	[{2: 2}, {0: 0}, {0: 0}, {2: 5}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}],
	[{1: 3}, {0: 0}, {0: 0}, {0: 0}, {3: 6}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}],
	[{0: 0}, {2: 5}, {0: 0}, {0: 0}, {0: 0}, {1: 7}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}],
	[{0: 0}, {0: 0}, {3: 6}, {0: 0}, {0: 0}, {2: 9}, {0: 0}, {3: 12}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}],
	[{0: 0}, {0: 0}, {0: 0}, {1: 7}, {2: 9}, {0: 0}, {2: 8}, {0: 0}, {3: 11}, {0: 0}, {0: 0}, {0: 0}, {0: 0}],
	[{0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {2: 8}, {0: 0}, {0: 0}, {0: 0}, {3: 11}, {0: 0}, {4: 4}, {0: 0}],
	[{0: 0}, {0: 0}, {0: 0}, {0: 0}, {3: 12}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {2: 15}],
	[{0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {3: 11}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {1: 14}],
	[{0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {3: 10}, {0: 0}, {0: 0}, {0: 0}, {1: 13}, {0: 0}, {0: 0}],
	[{0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {1: 13}, {0: 0}, {0: 0}, {2: 16}],
	[{4: 1}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {4: 4}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}],
	[{0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {0: 0}, {2: 15}, {1: 14}, {0: 0}, {2: 16}, {0: 0}, {0: 0}],
];

var graphAlsAdjazenzMatrixGewichtet = [
	[0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
	[2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 3, 0, 0, 2, 0, 3, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 2, 0, 2, 0, 3, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 4, 0],
	[0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2],
	[0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2],
	[4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 2, 0, 0],
];

function MinDistanzCheck(distanzArr, besuchtArr) {
	var minWert = Infinity;

	for (var i = 0; i < distanzArr.length; ++i) {
		if (distanzArr[i] < minWert && besuchtArr[i] == false) {
			minWert = i;
        }
	}
	return minWert;
}

function ButtonDeactivator () {
	document.getElementById('button_dijkstra').style.color = 'grey';
	document.getElementById('button_dijkstra').style.backgroundColor = 'lightgrey';
}

function Dijkstra () {
	if (startknotenSet == true && zielknotenSet == true) {

		document.getElementById("startanweisung").innerHTML = "Wegfindung erfolgreich!";
		ButtonDeactivator();

		for (var i = 0; i < graphAlsAdjazenzMatrixGewichtet.length-1; ++i) {

			minDistanzKnoten = MinDistanzCheck(distanzwerte, besucht);

			besucht[minDistanzKnoten] = true;
			
			for (var j = 0; j < 13; ++j) {
				aktuelleDistanz = graphAlsAdjazenzMatrixGewichtet[minDistanzKnoten][j];

				if (aktuelleDistanz != 0 && besucht[j] == false && distanzwerte[minDistanzKnoten] != Infinity && aktuelleDistanz + distanzwerte[minDistanzKnoten] < distanzwerte[j]) {
						distanzwerte[j] = aktuelleDistanz + distanzwerte[minDistanzKnoten];
						elternknoten[j] = minDistanzKnoten;
				}
			}
		}
		RückwaertsTraversierung(zielknoten);	
	}
}

function SelectiveAnimStopper (callerId) {
	document.getElementById(callerId).setAttribute('class', 'stopAnim');
	SetKnoten(callerId);
}

function EndAllAnimations () {
	for (let i = 0; i < document.getElementsByClassName('baseAnim').length; ++i){
		document.getElementsByClassName('baseAnim')[i].setAttribute('class', 'stopAnim');
	}
}

function SetKnoten(nodeId) {
	if(startknotenSet == false) {
		let pasteId;

		if (nodeId == "nodeA1") {
			pasteId = 3;
		} else if (nodeId == "nodeA4") {
			pasteId = 6;
		} else if (nodeId == "nodeA3") {
			pasteId = 5;
		} else if (nodeId == "nodeA2") {
			pasteId = 4;
		} else if (nodeId == "nodeA6") {
			pasteId = 8;
		} else if (nodeId == "nodeA7") {
			pasteId = 9;
		} else if (nodeId == "nodeA8") {
			pasteId = 10;
		} else if (nodeId == "nodeB2") {
			pasteId = 2;
		} else if (nodeId == "nodeB1") {
			pasteId = 1;
		} else if (nodeId == "nodeBahnhof") {
			pasteId = 0;
		} else if (nodeId == "nodeE1") {
			pasteId = 11;
		} else if (nodeId == "nodeParkhaus") {
			pasteId = 12;
		} else if (nodeId == "nodeA5") {
			pasteId = 7;
		}
		
		startknoten = pasteId;
		distanzwerte[pasteId] = 0;
		elternknoten[pasteId] = -1;

		console.log(distanzwerte);
		console.log(elternknoten);

		document.getElementById("startanweisung").innerHTML = "Zum Start der Dijksta-Wegfindung: Wähle Zielpunkt!";

		/*document.getElementById("knotencheck").innerHTML =  
		"Startknoten: " + nodeId
		+ "<br/><br/>------------------------------<br/>Knoten: Bahnhof B1 B2 A1 A2 A3 A4 A5 A6 A7 A8 E1 Parkhaus" 
		+ "<br/>" + "Distanzen: " + distanzwerte + "<br/>" + "Elternknoten: " + elternknoten + "<br/>" + "Besucht: " + besucht + "<br/><br/>Knoten set!";*/

	}

	if(startknotenSet == true && zielknotenSet == false) {
		let pasteIdZiel;

		if (nodeId == "nodeA1") {
			pasteIdZiel = 3;
		} else if (nodeId == "nodeA4") {
			pasteIdZiel = 6;
		} else if (nodeId == "nodeA3") {
			pasteIdZiel = 5;
		} else if (nodeId == "nodeA2") {
			pasteIdZiel = 4;
		} else if (nodeId == "nodeA6") {
			pasteIdZiel = 8;
		} else if (nodeId == "nodeA7") {
			pasteIdZiel = 9;
		} else if (nodeId == "nodeA8") {
			pasteIdZiel = 10;
		} else if (nodeId == "nodeB2") {
			pasteIdZiel = 2;
		} else if (nodeId == "nodeB1") {
			pasteIdZiel = 1;
		} else if (nodeId == "nodeBahnhof") {
			pasteIdZiel = 0;
		} else if (nodeId == "nodeE1") {
			pasteIdZiel = 11;
		} else if (nodeId == "nodeParkhaus") {
			pasteIdZiel = 12;
		} else if (nodeId == "nodeA5") {
			pasteIdZiel = 7;
		}

		zielknotenSet = true;
		zielknoten = pasteIdZiel;

		document.getElementById("startanweisung").innerHTML = "Dijksta-Wegfindung startklar!";

		EndAllAnimations();
	}
	startknotenSet = true;
}

function RückwaertsTraversierung(aktuellerZielknoten) {
	var aktuelleKante;
	var aktuellerElternknoten = elternknoten[aktuellerZielknoten];

	alert("startknoten = " + startknoten + " / " + "zielknoten = " + aktuellerZielknoten + "\n" + "aktuellerElternknoten = " + aktuellerElternknoten);

	do {
		for (const prop in graphAlsAdjazenzMatrixGewichtetEdgeassoziiert[aktuellerZielknoten][aktuellerElternknoten]) {
			console.log(aktuellerElternknoten);
			console.log(aktuellerZielknoten);
			aktuelleKante = graphAlsAdjazenzMatrixGewichtetEdgeassoziiert[aktuellerZielknoten][aktuellerElternknoten][prop];
		}
		document.getElementById("edge" + aktuelleKante).setAttribute('stroke', 'red');

		aktuellerZielknoten = aktuellerElternknoten;
		aktuellerElternknoten = elternknoten[aktuellerElternknoten];
	} while (aktuellerElternknoten != startknoten-1)
}

function ToggleKantengewicht()  {
	
	if (document.getElementById('wegfindung_kantenoverlay').style.display === "block")  {
		document.getElementById('wegfindung_kantenoverlay').style.display = "none";
	} else {
		document.getElementById('wegfindung_kantenoverlay').style.display = "block";
	}
	
}

var besucht = [false, false, false, false,
	false, false, false, false,
	false, false, false, false,
	false];
var distanzwerte = [Infinity, Infinity, Infinity, Infinity,
	Infinity, Infinity, Infinity, Infinity, 
	Infinity, Infinity, Infinity, Infinity, 
	Infinity];
var elternknoten = [Infinity, Infinity, Infinity, Infinity, 
	Infinity, Infinity, Infinity, Infinity, 
	Infinity, Infinity, Infinity, Infinity, 
	Infinity];

var aktuelleDistanz;
var minDistanzKnoten; //Knoten mit kleinstem Distanzwert im distanzwerte-array
var startknoten;
var zielknoten;
var startknotenSet = false;
var zielknotenSet = false;

//------------------------------INITIALISIERUNG ENDE------------------------------//

document.getElementById("button_dijkstra").addEventListener("click", Dijkstra);


