import { Component } from "react";

const Gender = {
  MALE: "male",
  FEMALE: "female"
};

const INITIAL_STATE = {
  login: "",
  password: "",
  email: "",
  agreed: false,
  gender: null,
  age: "",
};

export default class Form extends Component {
    state = {...INITIAL_STATE};

    handleChange = (e) => {
        const { name, value, type, checked} = e.target;
        this.setState({ [name]: type === "checkbox" ? checked : value })
    };
8
    handleSubmit = (e) => {
        e.preventDefault();
        const { login, password, email, agreed, gender, age } = this.state;
        // alert(`Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}, Gender: ${gender}`);
      this.props.onSubmit({login, password, email, agreed, gender, age})
        this.reset();
    }

  handleGenderChange = (e) => {
    console.log(e.target);
  }

    reset = () => this.setState({ ...INITIAL_STATE });

  render() {
    const { login, password, email, agreed, gender, age } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={login}
          name="login"
          type="text"
          onChange={this.handleChange}
        />
        <input
          value={password}
          name="password"
          type="text"
          onChange={this.handleChange}
        />
        <input
          value={email}
          name="email"
          type="text"
          onChange={this.handleChange}
        />
        <section>
          <h2>Choose your gender</h2>
          <label htmlFor="male">
            Male
            <input
              id="male"
              type="radio"
              name="gender"
              checked={gender === Gender.MALE}
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="female">
            Female
            <input
              id="female"
              type="radio"
              name="gender"
              checked={gender === Gender.FEMALE}
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>
        <label htmlFor="age">
          <select value={age} name="age" id="age" onChange={this.handleChange}>
            <option value="3-18">3-18</option>
            <option value="19-30">19-30</option>
            <option value="31-60">31-60</option>
            <option value="61-250">61-250</option>
          </select>
        </label>
        <label htmlFor="agreed">
          <input checked={agreed} type="checkbox" id="agreed" name="agreed" onChange={this.handleChange} />
        </label>
        <button disabled={!agreed} type="submit">Submit</button>
      </form>
    );  }
}