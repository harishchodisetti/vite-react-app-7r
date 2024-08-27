import { Component } from "react";
import { errorToasts, sucessToasts } from "../toasts/toast-helpers";

class Counter extends Component
{
    state={
        count:0
    }

increementHandler=()=>{
    this.setState({
        count:this.state.count+1
    },()=>{
        sucessToasts(`The current count ${this.state.count}`,"top-right")
    }
)
}


decreementHandler=()=>{
    this.setState({
        count:this.state.count-1
    },()=>{

        errorToasts(`The current count ${this.state.count}`,"top-right")
    }
)
}


resetHandler=()=>{
    this.setState({
        count:0
    },()=>{
        sucessToasts(`The current count ${this.state.count}`,"top-right")
    }
)
}




render(){
    return(
        <>
        <h2>counter{this.state.count}</h2>
        <button onClick={this.increementHandler}>increement</button>
        <button onClick={this.decreementHandler}>decreement</button>
        <button onClick={this.resetHandler}>Reset</button>


        </>
    )
}
}

export default Counter
