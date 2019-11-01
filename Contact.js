import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

const Contacts = ({ match }) => <p>{match.params.id}</p>
class Contact extends Component {
  render () {
    const { url } = this.props.match
    return (
      <>
        <NavLink to='/'>Back</NavLink>
        <h3>Contact ID Picker</h3>
        <Link to='/contact/1'>Contact 1</Link>
        <br />
        <Link to='/contact/2'>Contact 2</Link>
        <br />
        <Link to='/contact/3'>Contact 3</Link>
        <br />
        <Link to='/contact/4'>Contact 4</Link>
        <br />
        <Route path='/contact/:id' component={Contacts} />
      </>
    )
  }
}
export default Contact
