import React from "react";
import ReactDOM from "react-dom/client";

interface IProps {
    name: string;
}

function Welcome(props: IProps) {
    return <p>Welcome, {props.name}.</p>;
}

class ComponentsAndProps extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>ComponentsAndProps</h1>
                <div>
                    <p>Hello, {this.props.name}</p>
                    <div>
                        <Welcome name={"万福熊1"} />
                        <Welcome name={"万福熊2"} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ComponentsAndProps;
