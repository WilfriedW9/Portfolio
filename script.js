// Installation splitting
Splitting();

// Récupération des éléments nécessaires
const cursor = document.querySelector(".cursor")
const test = document.querySelector(".test")
const body = document.querySelector("body")


// Récupération des coordonnées de la souris; placement du cercle sur le bout du curseur
body.addEventListener("mousemove", (e) => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

body.addEventListener("scrollend", (e)=> {
    // root.style.setProperty('--mouse-y', window.scrollY + e.clientY + "px");
  });
// Ecoute de l'événement selon lequel le curseur entre sur le body; application de la classe "appear"
body.addEventListener("pointerenter", (e) => {
    cursor.classList.add("appear")
    cursor.classList.remove("vanish");
    
    setTimeout(() => {
        cursor.classList.remove("appear")
    }, 2000)
})
// Ecoute de l'évènement "click"; ajout/activation des classes appropriées
body.addEventListener("click", (e) => {
    cursor.classList.add("expand"); 
    setTimeout(() => {
        cursor.classList.remove("expand")
    }, 500)
})

// Ecoute de l'évènement selon lequel le curseur quitte la fenêtre; ajout de la classe "vanish"
body.addEventListener("pointerleave", (e) => {
    cursor.classList.add("vanish");
})
