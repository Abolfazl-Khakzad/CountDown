import Topping from "./Topping";
import Timer from "./Timer";
import React from "react";

class App extends React.Component {

    render() { 
        return (
            <div className="main">
                <Topping/>
                <Timer/>
            </div>
        );
    }
}
 
export default App;