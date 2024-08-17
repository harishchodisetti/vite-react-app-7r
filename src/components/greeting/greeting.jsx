export const Greeting=(props)=>{
  const {children,text}=props
    return(
        <div>
        <h4>good morning {children} {text}</h4>
        {text}
       
        </div>
    )

}

