import React from 'react';

const namesStartingWithZ = (names) => {
  return names.filter(name => name.toLowerCase().startsWith('z'));
};

const NameList = ({ names }) => {
  const filteredNames = namesStartingWithZ(names);

  return (
    <div>
      <h2>Names starting with Z:</h2>
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

// Usage example:
const Apps = () => {
  const allNames = ['Zachary', 'Zoe', 'Alice', 'Zain', 'Bob'];

  return (
    <div>
      <h1>List of Names</h1>
      <NameList names={allNames} />
    </div>
  );
};

export default Apps;
