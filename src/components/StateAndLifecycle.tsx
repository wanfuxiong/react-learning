import React from "react";
import ReactDOM from "react-dom/client";

interface IProps {
    name: string;
}

interface IState {
    age: number;
}

class StateAndLifecycle extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { age: 20 }; // 初始化
    }

    render() {
        return (
            <div>
                <h1>ComponentsAndProps</h1>
                <div>
                    <p>
                        Hello, {this.props.name}, {this.state.age}
                    </p>
                </div>
            </div>
        );
    }
}

export default StateAndLifecycle;
