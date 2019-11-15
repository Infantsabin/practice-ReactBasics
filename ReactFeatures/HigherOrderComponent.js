import React, { Component } from 'react'

export default function HigherOrderComponent (HocComponent) {
  return class Comp extends Component {
    render () {
      return (
        <React.Fragment>
          <h1>Higher Order Component</h1>
          <HocComponent />
        </React.Fragment>
      )
    }
  }
}
