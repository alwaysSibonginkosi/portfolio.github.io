(function(){
 const toggle=document.getElementById("menuToggle"),nav=document.getElementById("mainNav");
 if(toggle&&nav){toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");}));}
 const theme=document.getElementById("themeToggle");const saved=localStorage.getItem("portfolio-theme");if(saved==="light")document.body.classList.add("light-mode");
 if(theme)theme.addEventListener("click",()=>{document.body.classList.toggle("light-mode");localStorage.setItem("portfolio-theme",document.body.classList.contains("light-mode")?"light":"dark");});
 const back=document.getElementById("backTop");window.addEventListener("scroll",()=>{if(back)back.classList.toggle("visible",window.scrollY>500);});if(back)back.addEventListener("click",()=>window.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}));
 const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
})();