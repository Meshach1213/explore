let questions= document.querySelectorAll('.questions')
let answers= document.querySelectorAll('.answer');
let toggleBtn = document.querySelector('.fa-bars');
let navbar = document.querySelector('.nav');
let ul = document.querySelector('.ul');
const footerDate = document.querySelector('.date');
 

function FAQs(){
    questions.forEach((question)=>{
        question.addEventListener('click', (e)=>{
        let target = e.currentTarget;
        if(target.nextElementSibling.classList.contains('faq-show-text')){
            
            target.nextElementSibling.classList.remove('faq-show-text');
            question.classList.remove('question-decoration');
            
            
           
        }
        else{
            
            target.nextElementSibling.classList.add('faq-show-text')
            question.classList.add('question-decoration');
           
            
        }
        //target.nextElementSibling.classList.toggle('faq-show-text')
        })
    }) 
}

FAQs();




//ACTIVE PAGE//

const  a = document.querySelectorAll('.nav-links ul li a')

 let activePage = window.location.pathname
 a.forEach((a)=>{
    if(a.href.includes(`${activePage}`)){
        a.classList.add('active')
    }
    

 })


 //NAV BAR TOGGLING//
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

function SetDate(){
    const date = new Date();
    const year = date.getFullYear()
    footerDate.innerText = year;

}
SetDate()