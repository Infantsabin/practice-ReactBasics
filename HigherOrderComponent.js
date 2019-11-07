import React, { Component } from 'react'

export default function HigherOrderComponent(HocComponent) {
    return class extends Component {
        render() {
            return (
                <>
                <h1>Higher Order Component</h1>
                <HocComponent />
                </>
            )
        }
    }
}