// les liens sur lesquels on clique
const features = document.querySelector("#features")
const company= document.querySelector("#company")

// les blocs
const bloc_features = document.querySelector(".bloc-features")
const bloc_company = document.querySelector(".bloc-company")

// les fleches qui tendent vers le bas
const arrow_down_1 = document.querySelector(".arrow-down-1")
const arrow_down_2= document.querySelector(".arrow-down-2")

// les fleches qui tendent vers le haut
const arrow_up_1 = document.querySelector(".arrow-up-1")
const arrow_up_2 = document.querySelector(".arrow-up-2")

features.addEventListener("click", ()=>{
    bloc_features.classList.toggle("bloc-features-prime")
    arrow_down_1.classList.toggle("arrow-down-1-prime")
    arrow_up_1.classList.toggle("arrow-up-1-prime")
    features.classList.toggle("features-prime")
})


company.addEventListener("click", ()=>{
    bloc_company.classList.toggle("bloc-company-prime")
    arrow_down_2.classList.toggle("arrow-down-2-prime")
    arrow_up_2.classList.toggle("arrow-up-2-prime")
   company.classList.toggle("company-prime")

})

// Pour le responsive

const burger_menu = document.querySelector("#burger-menu")
const nav = document.querySelector("nav")
const overflow = document.querySelector(".overflow")
const  bouton_pour_fermer = document.querySelector(" #bouton-pour-fermer")

burger_menu.addEventListener("click", (e)=>{
    nav.classList.toggle("nav-prime")
    overflow.classList.toggle("overflow-prime")
})
bouton_pour_fermer.addEventListener("click", (e)=>{
 //bloc_features.classList.toggle("bloc-features-prime")
//     bloc_company.classList.toggle("bloc-company-prime") 
nav.classList.toggle("nav-prime")
    overflow.classList.toggle("overflow-prime")
})
