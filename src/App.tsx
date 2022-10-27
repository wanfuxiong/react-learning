import React from "react";
import "./App.css";
import IntroducingJSX from "./components/IntroducingJSX";
import RenderingElements from "./components/RenderingElements";
import ComponentsAndProps from "./components/ComponentsAndProps";
import StateAndLifecycle from "./components/StateAndLifecycle";

function App() {
    return (
        <div className="App">
            {/* <IntroducingJSX /> */}
            {/*<RenderingElements />*/}
            {/*<ComponentsAndProps name={"wanfuxiong"} />*/}
            <StateAndLifecycle name={"wanfuxiong"} />
        </div>
    );
}

export default App;
