import { useState } from 'react';
import './style.css';

export function MyComponent() {
  const [showList2, setShowList2] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [list2Data, setList2Data] = useState([]);

  const list1Data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
  ];

  const handleListItemClick = (item) => {
    setSelectedItems([]);
    setList2Data([]);
    setShowList2(true);
    // Here you can add code to fetch data for list2Data based on the selected item.
  };

  const handleCheckboxChange = (item) => {
    const newSelectedItems = [...selectedItems];
    const index = newSelectedItems.findIndex((i) => i.id === item.id);
    if (index > -1) {
      newSelectedItems.splice(index, 1);
    } else {
      newSelectedItems.push(item);
    }
    setSelectedItems(newSelectedItems);
  };

  const handleAddToList2Click = () => {
    //setShowList2(false);
    setList2Data(selectedItems);
  };

  return (
    <div>
      <h2>List 0</h2>
      <ul>
        {list1Data.map((item) => (
          <li key={item.id} onClick={() => handleListItemClick(item)}>
            {item.name}
          </li>
        ))}
      </ul>
      {showList2 && (
        <>
          <h2>List 1</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
              </tr>
            </thead>
            <tbody>
              {list1Data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedItems.some((i) => i.id === item.id)}
                      onChange={() => handleCheckboxChange(item)}
                    />
                  </td>
                  <td>Column 1 data</td>
                  <td>Column 2 data</td>
                  <td>Column 3 data</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleAddToList2Click}>Call API 1</button>
        </>
      )}
      {list2Data.length > 0 && (
        <>
          <h2>List 2</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
                <th>Column 5</th>
                <th>Column 6</th>
              </tr>
            </thead>
            <tbody>
              {list2Data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>Column 1 data</td>
                  <td>Column 2 data</td>
                  <td>Column 3 data</td>
                  <td>Column 4 data</td>
                  <td>Column 5 data</td>
                  <td>Column 6 data</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={()=>{setShowSuccess(true)}}>Call API 2</button>
          {
            showSuccess &&
            <h2 style={{"color":"green"}}>Success</h2>
          }
        </>
      )}
    </div>
  );
}

