import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const mylists = ['Peter', 'Sachin', 'Kevin']

var myStyle = {
  fontSize: 80,
  fontFamily: 'Courier',
  color: '#483D8B',
  textAlign: 'center'
}

function NameList (props) {
  const myList = (props.list)
  const nameList = myList.map((strList, key) =>
    <ListItem key={key} item={strList} />
  )
  return (
    <div>
      <NavLink style={myStyle} to='/'>Back</NavLink>
      <br />
      <h3 style={myStyle}>Corrected key Values</h3>
      <ol>{nameList}</ol>
    </div>
  )
}

function ListItem (props) {
  const itemList = props.item
  return (
    <li>{itemList}</li>
  )
}

class ReactKeys extends Component {
  render () {
    return (
      <div>
        <NameList list={mylists} />
      </div>
    )
  }
}

export default ReactKeys
