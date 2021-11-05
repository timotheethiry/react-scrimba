import React, { Component } from "react";

// lib to simplify the writing of react forms : Formik

class App extends Component {
    constructor() {
        super(),
        this.state = {
            firstName: "",
            lastName: "",
            subject: "",
            termsSalesAccepted: false,
            gender: "",
            favColor: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        // best practice: accessing the target properties through object destructuring instead of directly, avoid bugs 
        const { type, name, value, checked } = e.target;
        type === "checkbox"
          ? this.setState({ [name]: checked })
          : this.setState({ [name]: value });
    }

    handleSubmit() {}

    render() {
        // using the value attribute, we get a controlled component relying on the React state as the single SoT

        // in React, text areas are self-closing tags, which allows to rely on the React state
        return (
          <form onSubmit={this.handleSubmit} >
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              placeholder="First Name"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              placeholder="Last Name"
              onChange={this.handleChange}
            />

            <textarea
              name="subject"
              onChange={this.handleChange}
              placeholder="Tell us more..."
              value={this.state.subject}
            />

            <label>
              <input
                type="checkbox"
                name="termsSalesAccepted"
                onChange={this.handleChange}
                checked={this.state.termsSalesAccepted}
              />{" "}
              I accept the Terms of Sales
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={this.handleChange}
                checked={this.state.gender === "male"}
              />{" "}
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={this.handleChange}
                checked={this.state.gender === "female"}
              />{" "}
              Female
            </label>

            <label>
              Favorite color
              <select
                name="favColor"
                value={this.state.favColor}
                onChange={this.handleChange}
              >
                <option value="blue">Blue</option>
                <option value="maroon">Maroon</option>
                <option value="emerald">emerald</option>
              </select>
            </label>

            <button>Submit</button>
          </form>
        );
    }
}

export default App;
