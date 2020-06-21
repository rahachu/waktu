//fungsi untuk menampilkan jam
function clock() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let jam = document.getElementById("clock-site");
    if (jam!=null) {
        jam.innerHTML=`<h2>${h}:${m<10?"0"+m:m}:${s<10?"0"+s:s}</h2>`;
        setTimeout(clock,500);
    }
}