function finals() {
    const pri = parseInt(document.querySelector(".grade__prelim").value);
    const mid = parseInt(document.querySelector(".grade__midterm").value);
    const fre = parseInt(document.querySelector(".grade__prefinals").value);
    const fin = parseInt(document.querySelector(".grade__finals").value);
    const ave = (pri + mid + fre + fin) / 4;
    
    document.querySelector(".grade__average").value = ave.toFixed(2);
}
function reSet() {
    document.querySelector(".grade__prelim").value = '';
    document.querySelector(".grade__midterm").value = '';
    document.querySelector(".grade__prefinals").value = '';
    document.querySelector(".grade__finals").value = '';
    document.querySelector(".grade__average").value = '';
}