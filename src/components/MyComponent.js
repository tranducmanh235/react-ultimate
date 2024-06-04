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

    handleClick(event) {
        console.log(">>> Click me!");
        console.log("My Name is ", this.state.name);
    }

    handleOnMoverover(event) {
        console.log(event.pageX);
    }

    // JSX
    render() {
        return (
            <div>
                My Name is {this.state.name + " "}
                and My address is {this.state.address}
                <button onMouseOver={this.handleOnMoverover}>Hover me</button>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;
