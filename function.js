// 
//this is function in java script 
 
//  function myFunction(){
//     console.log("Welcome to apna college ");
//      console.log("We are learing  function");
//  }
// myFunction();
// myFunction();
// myFunction();
// myFunction();
// myFunction();


// perameterize function in  java script 

//  function myFunction (messaage,meg){
//        console.log(messaage,meg);
//  }

//  myFunction("i love java script ",100);
 


// calculate usnig  js 

//   function myfunction(a,b){
//      console.log(a*b);
//   }
//   myfunction(58,96);

//return value in function 

//  function sum(x,y){
//      sum=x + y;

//      return sum;
//      console.log("after return");

//      // after return code excute nahi hota he 
//  }
//   let value =sum(3,4);
//    console.log(value);
 
// ==============================================================

//  function sum(a,b){
//     return a+b;
//  }
// //  console.log(4,6)
//  console.log(sum(4,9));
//   function mul(a,b){
//     return a*b;
//   }
//   console.log(mul(8,9));


//  ====================================================
// function sum(a,b){
//      return a+b;
// }
//   const arrsum=(a,b)=>{
//      console.log(a+b);
//   };


// function mul(a,b){
//      return a*b;
// }

//  const arraymul=(a*b)=>{
//      console.log(a*b);
//  };


//  =======================================================================

// function countVowels(str){
//      let count=0;
//       for(const char of str){
//           if(char==="a"||
//             char==="e"||
//             char==="i"||
//             char==="o"||
//             char==="u"){
//                count++;
//             }
//       }
//       console.log(count);
// }

//======================================================================

//arrow function 

//  const countVow=(str)=>{
//       let count=0;
//       for(const char of str){
//                     if(char==="a"||
//                       char==="e"||
//                       char==="i"||
//                       char==="o"||
//                       char==="u"){
//                          count++;
//                       }
//                 }
//                 return count;

//  };


///for each loop in java script this is function this is called method 

//    let arr=[1,2,3,4,5,6];
//    arr.forEach((val)=>{
//       console.log(val);
// });
//=====================================================

// let arr=["delhi","pune","goa","jaipur","udaipur"];
// arr.forEach((val,index,arr)=>{
//    console.log(val,index,arr);
// });

//lts practic  
// for a given array of  number print the squar of each value using the foreach lop


//   let num=[1,2,3,4,5,6,7];
//  num.forEach((num)=>
// {
//       console.log(num*num);
// }); 

//second method pirnt the foreach method 

// let num=[1,2,3,4,5,6,7];

//  let calsquar=(num)=>
//      {
//            console.log(num*num);
//      };
//  num.forEach(calsquar);
     

//this is map method 

//   let num =[1,2,3,4,5];
//     let newArry=num.map((val)=>{
//       return val*2;
//    });
//     console.log(newArry);

//this is filter method in java script 

//  let arr=[1,2,3,4,5,5,6,7,8,8];
//    let even=arr.filter((val)=>{
//       return val<4;
//   });
//    console.log(even);

//this is reduce method innjava script 

 // finde the largest number 


//  let arr=[5,3,6,9,2,4,2,9,];
//      const output =arr.reduce((res,cur)=>
//      { return res>cur? res:cur;

//      });
//       console.log(output);
       

//we are given arry of marks of students . filter out of the marks 
 // of students that scord 90+;


  let marks=[87,56,90,80,60,97,98,100];

   let topers= marks.filter((val)=>
{
      return val>90;
});
 console.log(topers);



 


