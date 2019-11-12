import React, { Component } from 'react'
const ThemeContext = React.createContext('light')

class ReactContext extends React.Component {
  render () {
    return (
      <ThemeContext.Provider value='dark'>
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

function Toolbar (props) {
  return (
    <React.Fragment>
      <ThemeButton />
    </React.Fragment>
  )
}

class ThemeButton extends React.Component {
  render () {
    return (
      <button
        style={
          {
            backgroundColor: this.context === 'dark' ? '#FFFFFF' : '#000000'
          }
        }
        onClick={
          e => {

          }
        }
      >Button</button>
    )
  }
}

ThemeButton.contextType = ThemeContext

export default ReactContext
