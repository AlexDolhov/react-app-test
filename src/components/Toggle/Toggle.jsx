import { Component } from "react";

export default class Toggle extends Component {
  state = {
    isOpen: true,
  };

  show = () => this.setState({ isOpen: true });

  hide = () => this.setState({ isOpen: false });

  /*toggle = () => this.state.isOpen ? this.hide() : this.show(
    );*/
    
/*toggle = () => {
    if (this.state.isOpen) {
      return this.hide();
    }
    return this.show();
};*/
  
  toggle = () => { this.setState(state => ({ isOpen: !state.isOpen }))};

  render() {
    // console.log(this.state);
    // console.log("Hide fu:", this.hide);
    const { isOpen } = this.state;
    const children = this.props;

    return (
      <div>
        {this.state.isOpen ? <p>Open</p> : <p>Hide</p>}
        <button type="button" onClick={this.show}>
          Show
        </button>
        <button type="button" onClick={this.hide}>
          Hide
        </button>
        <button type="button" onClick={this.toggle}>
         Toggle
        </button>
      </div>
    );
  }9
}
