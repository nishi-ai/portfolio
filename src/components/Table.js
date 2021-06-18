import React, {Component} from 'react'

const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    // we can access all props through this.props. 
    // We're only passing one props through, characterData,
    // so we'll use this.props.characterData to retrieve that array data
    const {characterData} = this.props
    
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    )
  }
}

export default Table