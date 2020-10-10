const hamburger=document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const mobile_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

window.onscroll= function(){myFunction()};
function myFunction(){
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        document.getElementById("header").className="test";
    }
    else{
        document.getElementById("header").className="";
    }
    
}
mobile_item.forEach((item)=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

/*document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 1){
        header.style.display.backgroundColor= "#29323c";
    }
   else{
        header.style.backgroundColor='transparent';
    }
})*/