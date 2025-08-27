
function formsub(){
   let arr=JSON.parse(localStorage.getItem("name")) || [];
   let value=document.getElementById("name1").value;
   arr.push(value);
   localStorage.setItem("name",JSON.stringify(arr))
}



function show(){
    let arr=JSON.parse(localStorage.getItem("name")) ;
    let html=""
    arr.forEach(a => {
       
       html+=`<li>${a}</li>`
    });
    document.getElementById("container").innerHTML=html;
}



function delete(){
    let arr=JSON.parse(localStorage.getItem("name")) || [];
    let value=document.getElementById("name1").value;
    arr.push(value);
    localStorage.setItem("name",JSON.stringify(arr))
 }