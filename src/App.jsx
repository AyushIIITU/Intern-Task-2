import React, { useState } from 'react';

function App() {
  
  const [colors, setColors] = useState(['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'])
  const [clickOrder, setClickOrder] = useState([]);
  const handleClick = (index) => {
    if (clickOrder.length === 8) {
      const newColor = [...colors];
      newColor[index] = 'green';
      setColors(newColor);
      [...clickOrder,index].forEach((clickedIndex, i) => {
        setTimeout(() => {
          newColor[clickedIndex] = 'orange';
          setColors([...newColor]);
        }, i * 500);
      });
      setClickOrder([]);
    } 
    else if (!clickOrder.includes(index)) {
      const newColor = [...colors];
      newColor[index] = 'green';
      setColors(newColor);
      setClickOrder([...clickOrder, index]);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='grid grid-cols-3 gap-2'>
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-48 h-48 border border-gray-300 cursor-pointer transition-colors duration-300 
              ${color === 'green' ? 'bg-green-500' : color === 'orange' ? 'bg-orange-500' : 'bg-white'}`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;