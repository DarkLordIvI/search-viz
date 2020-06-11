import React, {useState} from 'react';

import './App.css';

const WALL = 'rebeccapurple';
const PATH = 'rgba(215, 186, 243, 0.5)';

function App() {

  const [grid, setGrid] = useState(new Array(600).fill(false))
  const [colors, setColors] = useState(new Array(600).fill(PATH))
  const [clicked, setClicked] = useState(false);
  const [wallMode, setWallMode] = useState(false);

  const renderItems = () => {
    const items = []
    for (let i = 0; i < 600; i++) {
      items.push(<div onMouseDown={() => {
          if (grid[i]) {
            setWallMode(false)
            setGrid(prevGrid => {
            const newGrid = [...prevGrid]
            newGrid[i] = false;
            return newGrid;})
          }
          else {
            setWallMode(true);
            setGrid(prevGrid => {
            const newGrid = [...prevGrid]
            newGrid[i] = true;
            return newGrid;})
          }
          setClicked(true)
          }} onMouseEnter={() => handleWall(i)} style={{backgroundColor: grid[i] ? WALL : colors[i]}} key={i} className="grid-item"></div>)
    }
    return items;
  }

  const handleWall = i => {
    if (clicked) {
      console.log(wallMode);
      if (wallMode) {
        setGrid(prevGrid => {
          const newGrid = [...prevGrid]
          newGrid[i] = true;
          return newGrid;
        })
      } else {
        setGrid(prevGrid => {
          const newGrid = [...prevGrid]
          newGrid[i] = false;
          return newGrid;
        })
      }
    }
  }
  return (
    <div onMouseUp={() => setClicked(false)} className="app-container">
      <div draggable='false' className="grid-container">
        {renderItems()}
      </div>
      <div className="set-container">
        <h1>Settings</h1>
        <button type="button" onClick={() => setGrid(new Array(600).fill(false))}>Clear Board</button>
      </div>
    </div>
  );
}

export default App;
