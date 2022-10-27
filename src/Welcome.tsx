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
        this.handleClickMinus = this.handleClickMinus.bind(this);
    }
    // 生命周期
    componentDidMount() {
        // setInterval(() => {
        //     // this.setState({ age: this.state.age + 1 });
        //     this.setState((state, props) => ({ age: state.age + 1 }));
        // }, 100);
    }

    handleClickAdd = () => {
        this.setState((state, props) => ({ age: state.age + 1 }));
    };

    handleClickMinus() {
        this.setState((state, props) => ({ age: state.age - 1 }));
    }

    render() {
        return (
            <div>
                <h1>
                    Hello, {this.props.name}, {this.state.age}
                </h1>
                <button onClick={this.handleClickAdd}>+1</button>
                <button onClick={this.handleClickMinus}>-1</button>
            </div>
        );
    }
}

export default Welcome;
