import userEvent from "@testing-library/user-event";
import React, { ReactNode } from "react";
import logo from "../assets/images/logo.svg";

interface User {
    firstName: string;
    lastName: string;
}

function formatName(user: User) {
    return user.firstName + " " + user.lastName;
}

export default function IntroducingJSX() {
    const name = "wanfuxiong";
    const element: ReactNode = <p>This is an element</p>;
    const user: User = {
        firstName: "Wan",
        lastName: "Fuxiong",
    };
    const imgElement = <img src={logo} style={{ width: "100px" }} alt="logo" />;
    const element1 = <p className="greeting">They are the same</p>;
    const element2 = React.createElement(
        "p",
        { className: "greeting" },
        "They are the same"
    );
    return (
        <div>
            <h1>IntroducingJSX</h1>
            <div>
                {name}
                {element}
                {formatName(user)}
                {1 + 1}
                {imgElement}
                {element1}
                {element2}
            </div>
        </div>
    );
}
