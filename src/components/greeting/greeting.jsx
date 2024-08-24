import "./greeting.css"
import style from "./greeting.module.css"

export const Greeting=(props)=>{
  const {children,text}=props
    return(
        <div className={style.card}> {/*class must be replaced with classname*/}
        <h4>good morning {children} {text}</h4>
        {text}
       
        </div>
    )

}

