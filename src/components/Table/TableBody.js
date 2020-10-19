import React from 'react';
import './Table.css';

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button className="btn btn-danger" onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    )
  });

  return <tbody>{rows}</tbody>
};


export default TableBody
/**
 * Created by pavel_duman on 19.10.2020.
 */
