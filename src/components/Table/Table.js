/**
 * Created by pavel_duman on 19.10.2020.
 */
import React from 'react'
import TableHead from './TableHead'
import Tablebody from './TableBody'

const Table = (props) => {
  const {characterData, removeCharacter} = props

  return (
    <div className="col-12 col-md-8">
      <table>
        <TableHead />
        <Tablebody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    </div>
  )
};


export default Table;