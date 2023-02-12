
// 3 type 
// 1. get request 
// 2. post request 
// 3. fetch api 






// 1. get request 


// let fetchBtn = document.getElementById("fetchBtn");

// fetchBtn.addEventListener("click", buttonClick)

// function buttonClick(){
//     console.log("you have clicked the fetchBtn");

//     // instantiate an xhr object     

//     const xhr = new XMLHttpRequest();

//     // open the Object 

//     // xhr.open("GET", "text.txt",true);
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1",true);


//     // what to do on progress 

//     xhr.onprogress = function(){
//         console.log("on progress");
//     }

//     // what to do when response is ready 

//     xhr.onload = function() {
//         // console.log(this.responseText);
//         // 200 HTTP status codes hota hai 
//         if(this.status === 200){
//             console.log(this.response);
//         }else{
//             console.error("some error");
//             // console.log("some error");
//         }
//     }

//     // send the request 

//     xhr.send();
    


// }






// 2. post request 






// let fetchBtn = document.getElementById("fetchBtn");

// fetchBtn.addEventListener("click", buttonClick)

// function buttonClick(){
//     console.log("you have clicked the fetchBtn");

//     // instantiate an xhr object     

//     const xhr = new XMLHttpRequest();

//     // open the Object 

//     // xhr.open("GET", "text.txt",true);
//     // https://dummy.restapiexample.com/ 
//     xhr.open("post", "https://dummy.restapiexample.com/api/v1/create",true);
//     xhr.getResponseHeader("Content-type", 'application/json');


//     // what to do on progress 

//     xhr.onprogress = function(){
//         console.log("on progress");
//     }

//     // what to do when response is ready 

//     xhr.onload = function() {
//         // console.log(this.responseText);
//         // 200 HTTP status codes hota hai 
//         if(this.status === 200){
//             console.log(this.responseText);
//         }else{
//             console.error("some error");
//             // console.log("some error");
//         }
//     }

//     // send the request 

//     params = `{"name":"test758","salary":"123","age":"23"}`;
//     xhr.send(params);


// }





let popBtn = document.getElementById("popBtn");

popBtn.addEventListener("click" , popHandler);

function popHandler() {

    // instantiate an xhr object

    const xhr = new XMLHttpRequest();

    // open the object 

    xhr.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true);

    // what to do when response is ready 

    xhr.onload = function(){
        // console.log(this.responseText);
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj); 
            let list = document.getElementById("list");
            str= "";
            for (key in obj){
                str += `<li>${obj[key].employee_salary}</li>`
            }

            list.innerHTML= str;
        }else{
            console.log("some error");
        }
    }

    // send the request 

    xhr.send();
    console.log("done");
    

}


















