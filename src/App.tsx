import React, { ReactNode } from "react";
import "./App.css";
import Welcome from "./Welcome";

function App() {
    const name = "Finn";
    const element: ReactNode = <h1>Hello, {name}</h1>;

    const element1 = <h1 className="greeting">Hello, world!</h1>;
    const element2 = React.createElement(
        "h1",
        { className: "greeting" },
        "Hello, world!"
    );
    return (
        <div className="App">
            你好{element}
            {element1}
            {element2}
            <Welcome name="Sara" />
        </div>
    );
}

export default App;
