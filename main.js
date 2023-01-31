

//Skript nach dem Laden der Seite ausführen.
window.onload = function campus_fn(){

    //toggle button
    let toggle = document.querySelector("#nav .toggle-btn"); //Umschalttaste (toggle-btn) aus dem Index ausgewählt
    let collapse = document.querySelector("#nav .collapse");

    toggle.addEventListener('click', function(event){ // Hier sollte JS die Umschalttaste und das Click-Event verwenden und wenn der Benutzer auf diesen Button klickt, wird die Callback-Funktion ausgeführt.
       collapse.classList.toggle('active') // Mit dieser Funktion wird die aktive Klasse aus dem Element entfernt. Hier wird collapse entfernt und die werte von active Klasse hinzugefügt
                                                
    });
    // masonry js
    let grid = document.querySelector("#site-main .recent-quick .images-flex");

    let msnry = new Masonry(grid, {
        itemSelector:'.flex-item',
        gutter: 100,
        fitWidth:true
    })



}
//relax js code
var rellax = new Rellax('.rellax',{
    center: true
})
let startButton = document.querySelector('#start-button');
startButton.addEventListener('click', function(){
    window.open('dijkstra.html', '_blank');
});

let campusPlanButton = document.querySelector('#campus-plan-button');
campusPlanButton.addEventListener('click', function(){
    window.open(this.href, '_blank');
});
