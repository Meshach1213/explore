
        
       
       
///Selectors///
 let toggleBtn = document.querySelector('.fa-bars');
 let navbar = document.querySelector('.nav');
 let ul = document.querySelector('.ul');
 const pageUp = document.querySelector('.fa-arrow-up');
 let specialists= document.querySelector('.images');
 const footerDate = document.querySelector('.date')

 
 
 ///EventListeners//
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
 
 pageUp.addEventListener('click', function(){
     window.scrollTo(0,0);
 })


 const  a = document.querySelectorAll('.nav-links ul li a')

 let activePage = window.location.pathname
 a.forEach((a)=>{
    if(a.href.includes(`${activePage}`)){
        a.classList.add('active')
    }
    

 })


 function SetDate(){
     const date = new Date();
     const year = date.getFullYear()
     footerDate.innerText = year;

 }
 SetDate()
 




 