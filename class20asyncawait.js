

//async and await




async function foo(){
    let res=await fetch("https://api.chucknorris.io/jokes/random");
    let res1=await res.json();
    console.log(res1);

    for (var i in res1)
    var div=document.createElement("div");
    div.innerHTML=`<div class="card border-success mb-3" style="max-width: 18rem;">
    <h5 class="card-header"> ${res1.value}</>
    
     
        </div>
  </div>
    `
    document.body.append(div);

}
foo();
  






//try catch error;--
    

// function bar(){
//     return new Promise((resolve,reject)=>{
//      reject("this is rejected!!!");
//     });
// }

// async function foo(){
//     try {
//      let res=await bar();
//      console.log(res);
//      }
//     catch (error) {
//         console.log(error);
//     }
// }

