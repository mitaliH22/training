import React from 'react';

const TableHeader = () => {
  return (
    <thead >
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index} >
          <td className="m-5">{row.name}</td>
          <td className="m-5">{row.job}</td>
          <td>
            <button
              onClick={() => props.removeCharacter(index)}
              className="btn btn-danger m-2"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });

    return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  const { characterData, removeCharacter } = props;

  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={characterData}
        removeCharacter={removeCharacter}
      />
    </table>
  );
};

export default Table