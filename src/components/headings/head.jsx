

export const MainHeading=(prop)=>
{
    const {heading,children}=prop;
    console.log(prop,"main heading prop");
    return(
        <div>
        <h1>{heading}</h1>
        {children}
        </div>
        
    )
}

export const SecondHeading=(prop)=>{
   const {heading}=prop
   
    return(
        <div>
        <h2>{heading}</h2>
        
        </div>
    )
}







// export const MainHeading=(prop)=>
//     {
//         const {heading}=prop;
//         console.log(prop)
//         return(
//             <h1>{heading}</h1>
//         )
//     }


// export const MainHeading=()=>{
//     return(
//         <h1>welcome user</h1>
//     )
// }

// export const SecondHeading=()=>{
//     return(
//         <h1>welcome user</h1>
//     )
// }