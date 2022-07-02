//  call back function 

console.log("start");

 function getDataFormAPI(callback) {
setTimeout(() => {
     callback(5);
},1000);

}
function getDataFormAPI2(callback) {
    setTimeout(() => {
         callback(5);
       
        
    }, 1000);
    
    }
    function getDataFormAPI3(callback) {
        setTimeout(() => {
             callback(5);
        }, 1000);
        
        }

// call the setTimeout function 
        getDataFormAPI((value) => {
     getDataFormAPI2((api2val) => {
       
        getDataFormAPI3((api3val) => {
            console.log(api2val + api3val + value);
        });

     });

 });

 console.log("end");
  