import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import ReactTable from 'react-table'
import 'react-table/react-table.css'

class ReactTableExample extends Component {
  render () {
    const data = [{
      name: 'Ayaan',
      age: 26
    }, {
      name: 'Ahana',
      age: 22
    }, {
      name: 'Peter',
      age: 40
    }, {
      name: 'Virat',
      age: 30
    }, {
      name: 'Rohit',
      age: 32
    }, {
      name: 'Dhoni',
      age: 37
    }]
    const columns = [{
      Header: 'Name',
      accessor: 'name'
    }, {
      Header: 'Age',
      accessor: 'age'
    }]
    return (
      <React.Fragment>
        <NavLink to='/'>Back</NavLink>
        <h1>Hello</h1>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={3}
          pageSizeOptions={[2, 4, 6]}
        />
      </React.Fragment>
    )
  }
}
export default ReactTableExample
