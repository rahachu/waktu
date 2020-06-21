//fitur mode gelap
document.getElementById("darkmode-button").addEventListener("click",()=>{
    if (document.body.classList.length==0) {
        document.body.classList.add("grey","darken-4","white-text");
    } else {
        document.body.classList.remove("grey","darken-4","white-text");
    }
})