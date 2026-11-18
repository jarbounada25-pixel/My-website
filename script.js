let stars= document.querySelectorAll(".stars span");
stars.forEach(function(star,index) {
star.addEventListener("click", function(){
stars.forEach(function(s,i){
    if(i<=index){
        s.textContent="★";
    }
    else{
        s.textContent="☆";
    }
});
});
    
}); 
