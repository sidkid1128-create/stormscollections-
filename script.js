document.querySelectorAll("a").forEach(link=>{
    link.addEventListener("click",e=>{
        if(link.getAttribute("href")==="#"){
            e.preventDefault();
        }
    });
});

console.log("Storms Collections Loaded");
