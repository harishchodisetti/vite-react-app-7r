//producing code
const chopvegetables=()=>{
    console.log("started chopping vegetables");
    const myPromise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("chopping of vegetables done");
            resolve();
        },2000);
        console.log("thinking of next steps");
    }
);
return myPromise;

}


const cookvegetables=()=>{
    console.log("started cooking vegetables");
    const myPromise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("cooking of vegetables done");
            resolve();
        },2000);
        console.log("thinking of next steps");
    }
);
return myPromise;

}

const servevegetables=()=>{
    console.log("started serving vegetables");
    const myPromise=new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("serving of vegetables done");
            resolve();
        },2000);
        console.log("thinking of last stop");
    }
);
return myPromise

}

const dishMaker=async()=>{
    console.log("cooking of dish started");
    console.log(chopvegetables())

    await chopvegetables();

    console.log(chopvegetables())
    await cookvegetables();
    await servevegetables();
    console.log("cooking and eating of dish ended");
};
dishMaker();




//consuming code


//   chopvegetables()
//   .then(()=>{
//       return cookvegetables();
//   })

//   .then(()=>{
//      return servevegetables();
//   })
//   .then(()=>{
//     console.log("cooking and eating of dishes ended");
//   })
//   .catch((message)=>console.log(message));
















// const chopvegetables=(callback)=>
// {
//     console.log("started chopping vegetables");
//     setTimeout(()=>
//     {
//         console.log("chopping of vegetables done")
//         callback();
//     },2000)
//     console.log("Thinking of next steps");

// }

// const cookvegetables=(callback)=>
//     {
//         console.log("started cooking vegetables");

//         setTimeout(()=>
//             {
//                 console.log("cooking of vegetables done")
//                 callback();
//             },2000)
      
//         console.log("thinking of next steps");
    
    
//     }

// const servevegetables=(callback)=>
//         {
//             console.log("serving vegetables done");

//             setTimeout(()=>
//                 {
//                     console.log("ready to eat");
//                     callback();
//                 },2000)

//             console.log("thinking of next steps");  
            
            
        
        
//         }  
        
        
// chopvegetables(()=>{
//     cookvegetables(()=>{
//         servevegetables(()=>{
//             console.log("cooking and eating of dish was done");
//         })
        
//     });
// }); 
   



