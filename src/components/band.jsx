import React, {Component} from 'react';
import Section from './section'
import './styles/slide-left.css'

export default class Band extends Component {
  state = {
    pos: 0,
    color: '#ff0000'
  }

  componentDidMount() {
    if(this.props.colorChange[0] === 'true')
      this.change = setInterval(this.color_change, 1000)
  }

  render() {
    return (
      <Section color={this.state.color}>
        <div style={this.render_scroll()}>
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
    if (this.props.scroll[0] === 'true') {
      return ({
          display: 'flex',
          flexShrink: '0',
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
                <svg key={(i + 1) * 1000 + 1}>
                  <rect
                    width="400"
                    height="100"
                    style={{fill: 'rgb(0,0,255)', strokeWidth: 10, stroke: 'rgb(0,0,0)'}}
                  />
                </svg>
              );
              break;
            case "rounded-rectangle":
              display.push(
                <svg key={(i + 1) * 1000 + 1}>
                  <rect
                    x="50"
                    y="20"
                    rx="20"
                    ry="20"
                    width="150"
                    height="150"
                    style={{fill: 'red', stroke: 'black', strokeWidth: 5, opacity: 0.5}}
                  />
                </svg>
              );
              break;
            case "circle":
            default:
              display.push(
                <svg key={(i + 1) * 1000 + 1}>
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="green"
                    stroke-width="4"
                    fill="yellow"
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
