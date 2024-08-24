const CustomButton=(prop)=>
{

    console.log(prop)
    const {text="button",onPress=()=>{},bgcolor="green"}=prop
    const buttonText="click me";
    const buttonstyles={backgroundColor:"red",color:"white"}

    return(
        <button style={buttonstyles} onClick={onPress}>{text}</button>
    )
}
export default CustomButton








// const CustomButton=(prop)=>
// {

//     console.log(prop)
//     const {text="button",onPress=()=>{},bgcolor="green"}=prop
//     const buttonText="click me";


//     return(
//         <button style={{backgroundColor:bgcolor}} onClick={onPress}>{text}</button>
//     )
// }
// export default CustomButton
