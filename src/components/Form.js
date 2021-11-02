import React, { Component } from "react";

class Form extends Component {
    state = {
        spell: "",
        animal: "",
        year: "",
        house: "",
    }
    //can be event of only e
    inputHandler = (event) => {
        console.log("hhghgghgh");
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        return (
            <div>
                <p>Spell</p>
                <input type="spell" name="spell" onChange={this.inputHandler} />
                <input type="house" nam="house" onChange={this.inputHandler} />
                <input type="animal" name="animal" onChange={this.inputHandler} />
                <input type="year" name="year" onChange={this.inputHandler} />

                <p> Spell: {this.state.spell}</p>
                <p> Spell: {this.state.house}</p>
                <p> Spell: {this.state.animal}</p>
                <p> Spell: {this.state.year}</p>
            </div>
        );
    }
}

export default Form;
