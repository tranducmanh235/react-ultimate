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

    handleClick = (event) => {
        console.log(">>> Click me!");
        console.log("random ", Math.floor(Math.random() * 100 + 1));

        this.setState({
            name: "Tdmx4",
        });

        this.setState({
            age: Math.floor(Math.random() * 100 + 1),
        });
    };

    handleOnMoverover(event) {
        // console.log(event.pageX);
    }

    // JSX
    render() {
        return (
            <div>
                My Name is {this.state.name + " "}
                and My age is {this.state.age}
                <button onMouseOver={this.handleOnMoverover}>Hover me</button>
                <button
                    onClick={(event) => {
                        this.handleClick(event);
                    }}
                >
                    Click me
                </button>
            </div>
        );
    }
}

export default MyComponent;
