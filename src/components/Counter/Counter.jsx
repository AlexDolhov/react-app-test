import { Component } from "react";

export default class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  /*constructor(props) {
    super(props);

    this.state = {
      value: this.props.initialValue,
    }
  };*/

  //Оскільки під капотом використовується Babel, можна пропустити стомлююче оголошення конструктора і вказати стан як публічну властивість класу, все інше транспайлер зробить за нас.

  state = {
    value: this.props.initialValue,
  }

  increment = () => {
    this.setState(prevState => { return { value: prevState.value + 1 } });
    console.log(this.state)
  }

  decrement = () => {
    this.setState(state => { return { value: state.value - 1 } });
  }

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <button onClick = {this.increment}>Increment</button>
        <button onClick = {this.decrement}>Decrement</button>
      </div>
    );
  }
}