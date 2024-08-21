

import {CustomList} from "./components/list/list.jsx"
import { CustomOrderedList as Krishna } from "./components/list/list.jsx"
import { MainHeading } from "./components/headings/head.jsx"
import { SecondHeading } from "./components/headings/head.jsx"
import CustomImage from "./components/images/image.jsx"
import CustomTable from "./components/table/table.jsx"
import Hari from "./components/button/button.jsx"
import { recipeData } from "./components/data/recipedata.js"
import { Greeting } from "./components/greeting/greeting.jsx"





const App=()=>{
  
  return(
   
   <>
   {
   [{name:"hari",role:"software developer"},{name:"jaya",role:"business man"},{name:"satish",role:"software manager"}].map(eachName=>{
    const {name,role}=eachName
    return(
    <Greeting text={`i am ${role}`}>{"This is " +(name)}</Greeting>
      )

   })
   }

   <Hari/>
   <Krishna/>
   <h4>changes are made</h4>




      
      
        
        

               

    </>
    )



}
           

       




              

export default App  



{/* <div key={eachRecipe.id}>
              
<MainHeading heading={eachRecipe.name}>
  how are you

  <h1>how are you, good morning</h1>

  <SecondHeading heading={"ingredients required"}/>
  

</MainHeading>


<CustomImage source={eachRecipe.image} width={200} height={200}/>
<SecondHeading heading={"ingredients required"}/>
<CustomList list={eachRecipe.ingredients}/>
<SecondHeading heading={"instructions required"}/>
<CustomList list={eachRecipe.instructions}/>
<CustomButton text={"start preparation"}/>
</div>
) */}




{/* //General props
// return(
//   <>
//     { */}
{/* //       recipeData.map((eachRecipe)=>
//       { */}
{/* //         return(
//           <div key={eachRecipe.id}>
            
            <MainHeading heading={eachRecipe.name} />
            <CustomImage source={eachRecipe.image} width={200} height={200}/>
            <SecondHeading heading={"ingredients required"}/>
            <CustomList list={eachRecipe.ingredients}/>
            <SecondHeading heading={"instructions required"}/>
            <CustomList list={eachRecipe.instructions}/>
            <CustomButton text={"start preparation"}/>
            </div>
//         );
//       })
//     }
      
//   </>
//   );


 */}




{/* //   return(
//     <>
//    <MainHeading heading="list of fruits"/>
//    <CustomList list={["watermelon","kiwi"]}/>
//    <MainHeading heading="list of crickketers"/>
//    <CustomList list={["dhoni","virat"]}/>
//    <MainHeading heading="list of vegetables"/>
//    <CustomList list={["capsicum","carrot"]}/>

//       </>    
  
//   ) */}














{/* //   return(
//     <>
//     <CustomButton text="login" onPress={()=>{}} bgcolor="green"/>
//       <CustomButton text="signup" onPress={()=>{}} bgcolor="red"/>
//         <CustomButton text="order" onPress={()=>{}} bgcolor="yellow"/>
//           <CustomButton/>

//       </>    
  
//   )

//  */}




    
      
  
  
  
  
{/*  
     //   const imglist=[
    //     {
    //       name:"bag1",
    //       src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //       width:100,
    //       height:200

    //     },

        
    //    {
    //       name:"bag1",
    //       src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //       width:100,
    //       height:200

    //     }
    //   ]
    //   return(
    //     <>
    //     {
    //       imglist.map(eachImage=>{
    //         return <CustomImage source={eachImage.src} height={eachImage.height} width={eachImage.width}/>
    //       })
    //     }
    //     </>
    //   )
    


     */}




{/* 
      // {/* <CustomImage source="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alternateText="bag" width={100} height={100}/>

      // <CustomImage source="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alternateText="bag" width={200} height={200}/>

      // <CustomImage source="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alternateText="bag" width={300} height={300}/> */}


      
      {/* <CustomList></CustomList>
      <CustomList></CustomList>
      <CustomOrderedList></CustomOrderedList>
      <CustomOrderedList></CustomOrderedList>
      <MainHeading></MainHeading>
      <SecondHeading></SecondHeading>
      <CustomImage></CustomImage>
      <CustomImage></CustomImage>
      <CustomTable></CustomTable> */}
     
    
  

 {/* */} 
