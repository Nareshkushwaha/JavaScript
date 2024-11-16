
   // console.dir(window.document);
   // console.log(document.h1);

   // let tag=document.getElementById("#heading");
   // console.log(tag);
   // console.dir(tag);

   // let heading=document.getElementsByClassName("heading-class");
   // console.dir(heading);
   // console.log(heading);


   // let btn=document.getElementById("Myid");
   // console.dir(btn);
   // console.log(btn);

//    let elementss=document.querySelector(".heading-class");
//    console.dir(elementss);

//  let elements=document.querySelectorAll("p");
// console.dir(elements);
//  let div=document.querySelector("div");
//  console.dir(div)

//  let heading=document.querySelector("h1");
//  console.log()

//  let  h2=document.querySelector("h2");
//  console.dir(h2.innerText);


//  h2.innerText=h2.innerText + " from apna college";


 let divs=document.querySelectorAll(".box");
 console.log(divs);

  let idx=1;

  for( div of divs){
     div.innerText=`new value ${idx}`;
     idx++;
  }
