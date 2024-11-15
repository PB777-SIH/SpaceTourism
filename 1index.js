const header= document.querySelector("header");
window.addEventListener("scroll",()=>{
    header.classList.toggle("sticky" , window.scrollY >50)
})




const liLink = document.querySelectorAll("header ul li a");
const section = document.querySelectorAll("section");

function activemenu(){
    let secLength = section.length;
    while(--secLength && window.scrollY + 500< section[secLength].offsetTop){}
    liLink.forEach(sec => sec.classList.remove("active"));
    liLink[secLength].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);



//active menu icon

const menuIcon = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

menuIcon.onclick = () =>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}


// remove menu List

window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open")
}


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }
        else{
            entry.target.classList.remove("show-items");
        }
    });
});

// const scrollLeft = document.querySelectorAll(".scroll-left");
// scrollLeft.forEach((el)=>observer.observer(el));