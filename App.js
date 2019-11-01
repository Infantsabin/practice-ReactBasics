import React, { Component } from 'react'
import PropTypes from 'prop-types'
class App extends Component {
  render () {
    var myStyle = {
      fontSize: 40,
      fontFamily: 'Courier',
      color: '#003300',
      textAlign: 'center'
    }
    function Welcome (props) {
      return <h4 style={myStyle}>{props.name}</h4>
    }
    return (
      <div>
        <h3 style={myStyle}>React Router</h3>
        <a style={myStyle} href='/extra-class'>Extra Class</a>
        <br />
        <a style={myStyle} href='/state-class'>State Class</a>
        <br />
        <a style={myStyle} href='/react-component'>React Component</a>
        <br />
        <a style={myStyle} href='/react-life'>React Life</a>
        <br />
        <a style={myStyle} href='/react-form'>React Form</a>
        <br />
        <a style={myStyle} href='/react-event'>React Event</a>
        <br />
        <a style={myStyle} href='/react-conditional-rendering'>React Conditional Rendering</a>
        <br />
        <a style={myStyle} href='/react-key'>React Key</a>
        <br />
        <a style={myStyle} href='/react-ref'>React Ref</a>
        <br />
        <h1 style={myStyle}>Hello {this.props.name}!</h1>
        <Welcome name='Function Component' />
        <p style={myStyle}>React Component API</p>
        <h1 style={myStyle}>ReactJS Props validation</h1>
        <table>
          <tr>
            <th>Type</th>
            <th>Value</th>
            <th>Valid</th>
          </tr>
          <tr>
            <td>Array</td>
            <td>{this.props.propArray}</td>
            <td>{this.props.propArray ? 'true' : 'False'}</td>
          </tr>
          <tr>
            <td>Boolean</td>
            <td>{this.props.propBool ? 'true' : 'False'}</td>
            <td>{this.props.propBool ? 'true' : 'False'}</td>
          </tr>
          <tr>
            <td>Function</td>
            <td>{this.props.propFunc(5)}</td>
            <td>{this.props.propFunc(5) ? 'true' : 'False'}</td>
          </tr>
          <tr>
            <td>String</td>
            <td>{this.props.propString}</td>
            <td>{this.props.propString ? 'true' : 'False'}</td>
          </tr>
          <tr>
            <td>Number</td>
            <td>{this.props.propNumber}</td>
            <td>{this.props.propNumber ? 'true' : 'False'}</td>
          </tr>
        </table>
      </div>
    )
  }
}

App.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string
}

App.defaultProps = {
  name: 'Infant',
  propArray: [1, 2, 3, 4, 5],
  propBool: true,
  propFunc: function (x) { return x + 5 },
  propNumber: 1,
  propString: 'JavaTpoint'

}

export default App
