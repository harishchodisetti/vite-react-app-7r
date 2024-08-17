// const CustomList=()=>
//     {
//         return(
        
//             <ul>
//                <ListItems/>
//             </ul>
//         )
    
//     }
//     export default CustomList;

    export const CustomOrderedList=()=>
    {
        return(
            <ol>
            <li>apple</li>
            <li>apple</li>
            <ListItems/>
            <ListItems/>
            </ol>
            
        )
    }
  
    

    const ListItems=()=>   //we have to reuse Listitems component in remaining components.thus This ListItem component avoids code repitetion
    {      
        const Fruits=["guava","banana","kiwi","pineapple"];
        return(

            <>
            {
                Fruits.map((eachFruit,index)=>{
                    return <li key={index}>{eachFruit}</li>
                })

                

            }
            



            </>
           
           
            // <>
            //     <li>{ListItems[0]}</li>
            //     <li>{ListItems[1]}</li>
            //     <li>{ListItems[2]}</li>
            // </>
        )
    }


    export const CustomList=(prop)=>
    {
        const {list}=prop
        console.log(prop)
        return(
            <ul>
                <>
                {
                    list.map((eachFruit)=>{
                        return<li>{eachFruit}</li>
                    })
                }


                </>
            </ul>
        )
        
    }