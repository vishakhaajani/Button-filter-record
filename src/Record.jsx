import React from 'react'
import './style.css'

const Record = ({category , product , filterBtn}) => {
  return (
    <div align="center">
      <button onClick={() => filterBtn("all")}>All</button>
      {
        category.map((val) => {
            return (
                <button onClick={() => filterBtn(val.name)}>{val.name}</button>
            )
        })
      }
      <h1>All Product</h1>
      <table border={1}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Category</th>
            </tr>
        </thead>
        <tbody>
            {
                product.map((val) => {
                    return(
                        <tr>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.category}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Record
