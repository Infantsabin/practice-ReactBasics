import React, { Component } from 'react'
import { ThemeContext, themes } from './Context/theme-context'
import ThemedButton from './Context/themed-button'

class ReactContext extends Component {
  constructor (props) {
    super(props)
    this.state = {
      theme: themes.light
    }
    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
        state.theme === themes.dark ? themes.light : themes.dark
      }))
    }
  }

  render () {
    return (
      <React.Fragment>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <section>
          <ThemedButton>Another One</ThemedButton>
        </section>
      </React.Fragment>

    )
  }
}

function Toolbar (props) {
  return (
    // <React.Fragment>
    <ThemedButton onClick={props.changeTheme} >Change Theme</ThemedButton>
    // </React.Fragment>
  )
}

export default ReactContext
