import React from "react";

var interval;

class Timer extends React.Component {
    constructor(){
        super();
        this.state={
        //   time : new Date().toLocaleTimeString()
             basicNumber:100
        }
      }
      componentDidMount(){
        interval = setInterval(() => {
            this.setState({
                basicNumber : this.state.basicNumber -1
            })
        }, 1000);
      }
      componentDidUpdate(){
        if(this.state.basicNumber === 0){
                clearInterval(interval);
        }
      }
     
    render() { 
        
        return (
            <>
                <h1 className="timer">
                    {this.state.basicNumber}
                </h1>
            </>
        );
    }
}
 
export default Timer;