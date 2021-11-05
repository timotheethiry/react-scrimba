import React, { Component } from "react";

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      /*allergies: [
          { 
              peanuts: false
          },
          {
              lactose: false
          },
          {
              seafood: false
          }
      ],*/
      allergies: {
        peanuts: false,
        lactose: false,
        seafood: false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { type, name, value, checked } = e.target;
    type === "checkbox"
      ? this.setState((prevState) => {
          return {
            allergies: {
              ...prevState.allergies,
              [name]: checked,
            },
          };

          /*const newAllergies = prevState.allergies.map(i => { // select each object in the array
                if(Object.keys(i) == name) { // Object.keys() returns all the keys of an object, i has just one key
                    return {
                      [name]: checked
                    }
                }
                return i; // identify the clicked input and update it, otherwise return it as it is
            });
            
            return {
                allergies: newAllergies
            }*/
        })
      : this.setState({ [name]: value });
  }

  handleSubmit(e) {}

  render() {
    console.log(this.state);
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={this.state.age}
            min="0"
            max="120"
            onChange={this.handleChange}
          />
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
            Male
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />
            Female
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="non binary"
              checked={this.state.gender === "non binary"}
              onChange={this.handleChange}
            />
            Non Binary
          </label>
          <br />

          <select
            name="destination"
            value={this.state.destination}
            onChange={this.handleChange}
          >
            <option value="">Destination</option>
            <option value="Paris">Paris</option>
            <option value="London">London</option>
            <option value="Los Angeles">Los Angeles</option>
          </select>
          <br />

          <label>Allergies: </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="peanuts"
              checked={this.state.allergies.peanuts} // with allergies: [] this.state.allergies[0]
              onChange={this.handleChange}
            />{" "}
            Peanuts
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="lactose"
              checked={this.state.allergies.lactose} // with allergies: [] this.state.allergies[1]
              onChange={this.handleChange}
            />{" "}
            Lactose
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="seafood"
              checked={this.state.allergies.seafood} // with allergies: [] this.state.allergies[2]
              onChange={this.handleChange}
            />{" "}
            Seafood
          </label>
          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}{" "}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
          Your dietary restrictions:
          {this.state.allergies.peanuts ? " peanuts," : null}
          {this.state.allergies.lactose ? " lactose," : null}
          {this.state.allergies.seafood ? " seafood," : null}
        </p>
      </main>
    );
  }
}

export default App;
