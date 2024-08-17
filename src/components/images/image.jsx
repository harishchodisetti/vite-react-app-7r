// const CustomImage=()=>{
//     return(
//         <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" height={100} width={100} alt="bag pack"/>
//     )
// }

// export default CustomImage


const CustomImage=(props)=>{
    console.log(props);
    const {source,height=50,width=50,alternateText="text"}=props;
    return(
        <img src={source} height={height} width={width} alt={alternateText}/>
    )
}

export default CustomImage


