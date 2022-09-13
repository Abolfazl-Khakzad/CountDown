import React from "react";

var interval;

class Timer extends React.Component {
    constructor(){
        super();
        this.state={
       
             basicNumber:100
        }
      }

      startInterval= ()=>{
        interval = setInterval(() => {
            this.setState({
                basicNumber : this.state.basicNumber -1
            })
        }, 1000);
      }

      stopInterval= ()=>{
        clearInterval(interval);
      }

      componentDidMount(){
        this.startInterval();
      }

      componentDidUpdate(){
        if(this.state.basicNumber === 0){
               this.stopInterval();
        }
      }
     
    render() { 
        
        return (
            <>
                <h1 className="timer">
                    {this.state.basicNumber}
                </h1>
                <div className="buttonBox"> 
                <button className="startStyle" onClick={this.startInterval}>Start</button>
                <button className="stopStyle" onClick={this.stopInterval}>Stop</button>
                </div>
            </>
        );
    }
}
 
export default Timer;