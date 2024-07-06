let card1 = document.getElementById("trendmen");
let card2 = document.getElementById("trendgirl");
let card3 = document.getElementById("shoes");
let mainPage = document.getElementById("main");
let bloger = document.getElementById("bloging");
let about = document.querySelector(".about");
let explore1 = document.getElementById("exboy");
let explore3 = document.getElementById("exploreall");
let explore2 = document.getElementById("exgirl");
let form = document.getElementById("contactus");
let show = document.getElementById("clickon");



function shops(){
    mainPage.style.display="none";
    card1.style.display="block";
    card2.style.display="block";
    card3.style.display="block";
    bloger.style.display="none";
    about.style.display="none";
    explore1.style.display="none";
    explore2.style.display="none";
    explore3.style.display="none";
    form.style.display="none";

}
function homes(){
    mainPage.style.display="flex";
    card1.style.display="block";
    card2.style.display="block";
    card3.style.display="block";
    bloger.style.display="block";
    about.style.display="none";
    explore1.style.display="none";
    explore2.style.display="none";
    explore3.style.display="none";
    form.style.display="none";
}
function blogs(){
    bloger.style.display="block";
    mainPage.style.display="none";
    card1.style.display="none";
    card2.style.display="none";
    card3.style.display="none";
    about.style.display="none";
    explore1.style.display="none";
    explore2.style.display="none";
    explore3.style.display="none";
    form.style.display="none"; 
}
function abouts(){
    about.style.display="block";
    mainPage.style.display="none";
    card1.style.display="none";
    card2.style.display="none";
    card3.style.display="none";
    bloger.style.display="none";
    explore1.style.display="none";
    explore2.style.display="none";
    explore3.style.display="none";
    form.style.display="none";
}
function exploremore(){
    about.style.display="none";
    mainPage.style.display="none";
    card1.style.display="none";
    card2.style.display="none";
    card3.style.display="none";
    bloger.style.display="none";
    explore1.style.display="block";
    explore2.style.display="block";
    explore3.style.display="block";
    form.style.display="none";
}
function contacts(){
    about.style.display="none";
    mainPage.style.display="none";
    card1.style.display="none";
    card2.style.display="none";
    card3.style.display="none";
    bloger.style.display="none";
    explore1.style.display="none";
    explore2.style.display="none";
    explore3.style.display="none";
    form.style.display="block";
}



