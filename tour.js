//selectors
 
 let toggleBtn = document.querySelector('.fa-bars');
 let navbar = document.querySelector('.nav');
 let ul = document.querySelector('.ul');
 const pageUp = document.querySelector('.fa-arrow-up');
 let specialists= document.querySelector('.images');
 const footerDate = document.querySelector('.date')

 
 
 ///EventListeners//
 //toggle navigator bar
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
 
 
 
 //scroll up effect
 pageUp.addEventListener('click', function(){
     window.scrollTo(0,0);
 })




 //page active
const pageActive = function(){

     const  a = document.querySelectorAll('.nav-links ul li a')
    
     let activePage = window.location.pathname
     a.forEach((a)=>{
        if(a.href.includes(`${activePage}`)){
            a.classList.add('active')
        }
    
     })
 }
 pageActive();



 //Toggling Benefits of travelling with us using JQUERY//
 $(document).ready(function(){
    $('.fa-circle-plus').click(function(){
        if($('.paragraph').slideDown()){
            $('.fa-circle-minus').show()
            $('.fa-circle-plus').hide()
            
            
        }
        
    })
})

$(document).ready(function(){
    $('.fa-circle-minus').click(function(){
        if($('.paragraph').slideUp()){
            $('.fa-circle-plus').show()
            $('.fa-circle-minus').hide()
            
            
        }
    })
})
//





//settings for the footer year
function SetDate(){
    const date = new Date();
    const year = date.getFullYear()
    footerDate.innerText = year;

}
SetDate()