import React, {Component} from 'react';
import Section from './section'

export default class Band extends Component {
  state = {
    pos: 1,
    color: this.props.colorChange[1][0]
  }

  componentDidMount() {
    if(this.props.colorChange[0] === 'true')
      this.change = setInterval(this.color_change, 5000)
  }

  render() {
    return (
      <Section color={this.state.color}>
        <div className="band" style={this.render_scroll()}>
          {this.render_text()}
        </div>
      </Section>
    );
  }

  color_change = () => {
    this.setState({pos: (this.state.pos + 1) % this.props.colorChange[1].length })
    this.setState({color: this.props.colorChange[1][this.state.pos]})
  }

  render_scroll() {
    if (this.props.scroll[0] === 'true')
      return ({
          animation: `slide-left ${(() => {
            switch (this.props.scroll[1]) {
              case 'slow':
                return 30;
              case 'fast':
                return 10;
              case 'default':
              default:
                return 20;
            }
          })()}s linear infinite`
      });
  }

  render_text() {
    var display = [];

    if(this.props.repeat[0] === 'true')
      for(let i = 0; i < this.props.repeat[1]; i++)
        if(i === this.props.repeat[1] - 1)
          display.push(<span key={(i + 1) * 1000}>{this.props.text}</span>);
        else {
          display.push(<span key={(i + 1) * 1000}>{this.props.text}</span>);
          switch(this.props.spacer) {
            case "rectangle":
              display.push(
                <svg width="30" height="30" key={(i + 1) * 1000 + 1}>
                  <rect
                   width="30"
                   height="30"
                   style={{fill: 'black'}}
                  />
                </svg>
              );
              break;
            case "rounded-rectangle":
              display.push(
                <svg width="30" height="30" key={(i + 1) * 1000 + 1}>
                  <rect
                    rx="5"
                    ry="5"
                    width="30"
                    height="30"
                    style={{fill: 'black'}}
                  />
                </svg>
              );
              break;
            case "circle":
            default:
              display.push(
                <svg width="30" height="30" key={(i + 1) * 1000 + 1}>
                  <circle
                    cx="15"
                    cy="15"
                    r="15"
                    fill="black"
                  />
                </svg>
              );
              break;
          }
        }
      else
        return <span>{this.props.text}</span>

        return display;
  }
}
