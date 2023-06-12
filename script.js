
/*======================== toggle navbar======================= */

const navToggler=document.querySelector(".nav-toggler");
navToggler.addEventListener("click",() => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});

function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");

}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}
/*===============================Acive section====================*/
    document.addEventListener("click",(e)=>{
        if(e.target.classList.contains("link-item") && e.target.hash !== "" ){
          //  document.querySelector(".overplay").classList.add("active");
           if(e.target.classList.contains("nav-item")){
            toggleNavbar();
           }
           else{
            hideSection();
            document.body.classList.add("hide-scrolling");
           }
           setTimeout(()=>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
          //  document.querySelector(".overplay").classList.remove("active");
           },500);
        }

    });
/*----------------------About tabs------------------------------*/
const tabsContainer=document.querySelector(".about-tabs"),
aboutsection=document.querySelector(".About-section");
tabsContainer.addEventListener("click",(e)=>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains('active')){
       tabsContainer.querySelector(".active").classList.remove('active');
        e.target.classList.add("active");
        const target=e.target.getAttribute("data-target");
        aboutsection.querySelector(".tab-content.active").classList.remove('active');
        aboutsection.querySelector(target).classList.add('active');
    }
});

/*=================portfolio-item datails======================*/
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("view-project-btn")){
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioitemdetails(e.target.parentElement);
    }
})
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click",togglePortfolioPopup);
//===========hide popup when cliking outside on it==============
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();  
    }

})



function portfolioitemdetails(portfolioitem){
    document.querySelector(".pp-thumbnail img").src=
    portfolioitem.querySelector(".portfolio-item-thumnail img").src;

    document.querySelector(".pp-header h3").innerHTML=
    portfolioitem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML=
    portfolioitem.querySelector(".portfolio-item-details").innerHTML;
}

