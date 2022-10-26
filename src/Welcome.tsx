import React from "react";

interface IProps {
    name: string;
}

interface IState {
    age: number;
}

class Welcome extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { age: 18 };
    }
    // 生命周期
    componentDidMount() {
        // setInterval(() => {
        //     this.setState({ age: this.state.age + 1 });
        // }, 100);
    }

    render() {
        return (
            <div>
                <h1>
                    Hello, {this.props.name}, {this.state.age}
                </h1>
                <button
                    onClick={(e) => {
                        this.setState({ age: this.state.age + 1 });
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Welcome;
