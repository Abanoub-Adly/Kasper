let skills = document.querySelector(".our-skills");
let progSpans = document.querySelectorAll(".prog span");
window.onscroll=function(){
    if(window.scrollY >= skills.offsetTop)
    progSpans.forEach((span)=>{
    span.style.width=span.dataset.width;
    })
}
let setDate = new Date("12 31 2023 23:59:59");
let counter = setInterval(() => {
    let datenow = new Date();
    let datediff = setDate - datenow;
    let days = Math.floor(datediff / (1000 * 60 * 60 *24));
    let hours = Math.floor(datediff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(datediff % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(datediff % (1000 * 60) / (1000));
    document.querySelector(".day").innerHTML = `${days < 10 ? `0${days}` : days}`;
    document.querySelector(".hour").innerHTML = `${hours < 10 ? `0${hours}` : hours}`;
    document.querySelector(".minute").innerHTML = `${minutes < 10 ? `0${minutes}` : minutes}`;
    document.querySelector(".second").innerHTML = `${seconds < 10 ? `0${seconds}` : seconds}`;
    if(datediff <0){
        clearInterval(counter);
    }
},1000);
