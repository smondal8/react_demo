import React, { Component } from "react";

export class DemoState extends Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    changeStateValue(){
        this.setState ({
           count : this.state.count +1           
        },()=>{console.log("State Value",this.state.count)})
       // console.log(this.state.count)
    }
    render(){
        return (<div> Welcome State {this.state.count} <button onClick = {() => this.changeStateValue()}>Click Me</button></div>
        
            )
    }
}