
// ACTIVE PAGE//

function pageActive(){

    const  a = document.querySelectorAll('.nav-links ul li a')
   
    let activePage = window.location.pathname
    a.forEach((a)=>{
       if(a.href.includes(`${activePage}`)){
           a.classList.add('active')
       }
   
    })
}
pageActive();
//


//NAVIGATOR BARS//

let toggleBtn = document.querySelector('.fa-bars');
 let navbar = document.querySelector('.nav');
 let ul = document.querySelector('.ul');


toggleBtn.addEventListener('click', ()=>{
    if(navbar.classList.contains('toggle-nav')){
        navbar.classList.remove('toggle-nav')
        ul.setAttribute('style', 'display: none')
        
    }
    else{
        
        navbar.classList.add('toggle-nav');
        ul.setAttribute('style', 'display: block')
    }
    
})
//


//Settings for the footer date//
const footerDate = document.querySelector('.date');
function SetDate(){
    const date = new Date();
    const year = date.getFullYear()
    footerDate.innerText = year;

}
SetDate()
//

