/*
    class component
    function component
*/

import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Tsuyoi",
        address: "Binh Duong",
        age: 25,
    };

    // JSX
    render() {
        return (
            <div>
                My Name is {this.state.name + " "}
                and My address is {this.state.address}
            </div>
        );
    }
}

export default MyComponent;
