import React from "react";

var interval;

class Timer extends React.Component {
    constructor(){
        super();
        this.state={
       
             hour: 0 ,
             minute: 0 ,
             second: 0 ,
             isStart: false
        }
      }

      startInterval= ()=>{
        if(this.state.isStart===false){
            this.setState({
                isStart : true
            })
            interval = setInterval(() => {
                this.setState({
                    second : this.state.second +1
                })
                if(this.state.second ===60){
                    this.setState({
                        second: 0 ,
                        minute: this.state.minute +1
                    })
                }
                if(this.state.minute ===60){
                    this.setState({
                        minute: 0 ,
                        hour: this.state.hour +1
                    })
                }
            }, 1000);
        }
      }

      stopInterval= ()=>{
        this.setState({
            isStart : false
        })
        clearInterval(interval);
      }

      resetInterval = ()=>{
            this.stopInterval();
            this.setState({
                hour: 0 ,
                minute: 0 ,
                second: 0        
             })
      }

     
    render() { 
        let h = this.state.hour
        let m = this.state.minute
        let s = this.state.second
        return (
            <>
                <h1 className="timer">
                    {/* {this.state.hour + ":" + this.state.minute + ":" + this.state.second} */}
                    {`${h >9 ? h : "0"+h} : ${m >9 ? m : "0"+m} : ${s >9 ? s : "0"+s}`}
                </h1>
                <div className="buttonBox"> 
                <button className="startStyle" onClick={this.startInterval}>Start</button>
                <button className="stopStyle" onClick={this.stopInterval}>Stop</button>
                <button className="resetStyle" onClick={this.resetInterval}>Reset</button>
                </div>
            </>
        );
    }
}
 
export default Timer;