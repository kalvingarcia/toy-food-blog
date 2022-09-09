import React, {Component} from 'react';
import './styles/slide-left.css'

export default class Band extends Component {
  state = {
    text: ""
  }

  constructor(props) {
    super(props);

    if(this.props.repeat[0] == 'true')
      for(let i = 0; i < this.props.repeat[1]; i++)
        if(i == this.props.repeat[1] - 1)
          this.state.text += this.props.text;
        else
          this.state.text += (this.props.text + this.props.spacer)
  }

  render() {
    return (
      <div>
        {this.state.text}
      </div>
    );
  }

  //
  //          colorChange={['true', ['#ff0000', '#00ff00', '#0000ff']]}
}
