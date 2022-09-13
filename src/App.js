import Topping from "./Topping";
import Timer from "./Timer";
import React from "react";
class App extends React.Component {
        constructor(){
            super();
            this.state ={
                title : "timer"
            }
        }
        handleSetTitle = ()=>{
            this.setState({
                title : "welcome Back"
            })
        }
    render() { 
        return (
            <div className="main">
                <Topping title={this.state.title}/>
                <Timer handleSetTitle={this.handleSetTitle}/>
            </div>
        );
    }
}
 
export default App;