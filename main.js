
//Skript nach dem Laden der Seite ausführen.

window.onload = function campus_fn(){

  //toggle button
  let toggle = document.querySelector("#nav .toggle-btn"); //Umschalttaste (toggle-btn) aus dem Index ausgewählt
  let collapse = document.querySelector("#nav .collapse");

  toggle.addEventListener('click', function(event){ // Hier sollte JS die Umschalttaste und das Click-Event verwenden und wenn der Benutzer auf diesen Button klickt, wird die Callback-Funktion ausgeführt.
     collapse.classList.toggle('active') // Mit dieser Funktion wird die aktive Klasse aus dem Element entfernt. Hier wird collapse entfernt und die werte von active Klasse hinzugefügt
                                              
  });
  //---------------------------Navigation----------------------------------------//
  window.onscroll = function() {
    var nav = document.getElementById("nav");
    if (window.pageYOffset > 50) {
      nav.classList.add("fixed");
    } else {
      nav.classList.remove("fixed");
    }
  };
  


  //---------------------------/Navigation----------------------------------------//

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

//----------------------------Button----------------------------------------//


//---------------------------/Button----------------------------------------//

//---------------------------scroll Btn-------------------------------------//
window.onscroll = function() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  document.getElementById("scrollBtn").style.display = "block";
} else {
  document.getElementById("scrollBtn").style.display = "none";
}
};
