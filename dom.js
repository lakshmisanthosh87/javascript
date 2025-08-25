// let value = document.getElementById("name")

// console.log(value)





// let value = document.getElementById("name").textContent

// console.log(value)




// let value = document.getElementsByClassName("name")

// console.log(value[0].textContent)



// let value = document.querySelector("#name14")

// console.log(value)




// function userinput()
// {
//     let value=document.querySelector(`input[type="radio"]:checked`).value
//      console.log(value)
r


// }


// function form(event){
//     event.preventDefault()
//      let value=document.getElementById("name").value;
//      let value1=document.getElementById("container")
//      value1.innerHTML+=`<h1> your name is ${value}`


//      let values=document.getElementById("name1").value;
//       let value4=document.getElementById("container1")
//      value4.innerHTML+=`<h1> your address is ${values}`



//      let valuess=document.querySelector(`input[type="radio"]:checked`).value;
//       let value5=document.getElementById("container2")
//      value5.innerHTML+=`<h1> gender is  ${valuess}`

     

//      let valuesss=document.querySelectorAll(`input[name="hg"]:checked`);
//      let arr=[];
//      valuesss.forEach((element,i) => {
//         arr.push(element.value);

//          let value6=document.getElementById("container3");
//      value6.innerHTML+=`<h1> sub is  ${arr[i]}`
//      });
    


// }







function form(event){
     event.preventDefault()
     let value=document.getElementById("name").value;
    //  let value1=document.getElementById("container")    
    // value1.innerHTML+=`<h1> your name is ${value}`
    alert("your name is ${value}")
}
     let valuess= prompt("enter your name","hi")


