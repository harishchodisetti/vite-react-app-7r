
import { Component } from "react"
import FirstComponent from "../bootsrap/first-component"
import Counter from "./counter"

 export class YoutubeButton extends Component
{
    state={
        isSubscribe:false,
        text1:"subscribe",
        text2:"subscribed"


    }
    clickHandler=()=>{
        this.setState({
            isSubscribe:!this.state.isSubscribe

        },()=>{})

    }
    render()
    {
        return(
            <>
            <button onClick={this.clickHandler}>{this.state.isSubscribe?this.state.text1:this.state.text2}</button>
            <Counter/>

            {
                this.state.isSubscribe?
                <div><FirstComponent/></div>: <div>
                <h2>please subscribe to access the content</h2>
                </div>
            }

            </>


        )
    }


}
