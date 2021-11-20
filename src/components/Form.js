import React, { Component } from "react";

class Form extends Component {
    state = {
        spell: "",
        animal: "",
        year: "",
        house: "some house",
    }
    //can be event of only e
    inputHandler = (event) => {

        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        return (
            <div>
                <p>Spell:</p>
                <input type="spell" name="spell" onChange={this.inputHandler} />
                <p>House:</p>
                <input type="house" name="house" onChange={this.inputHandler} />
                <p>Animal:</p>
                <input type="animal" name="animal" onChange={this.inputHandler} />
                <p>Year:</p>
                <input type="year" name="year" onChange={this.inputHandler} />

                <p> Spell: {this.state.spell}</p>
                <p> House: {this.state.house}</p>
                <p> Animal: {this.state.animal}</p>
                <p> Year: {this.state.year}</p>
            </div>
        );
    }
}

export default Form;
