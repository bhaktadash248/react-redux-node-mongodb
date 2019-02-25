import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render() {
        return (
            <div>
                <h3>Hello world!!!</h3>
                <p>start react app using webpack is done sucessfully!!!</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
)