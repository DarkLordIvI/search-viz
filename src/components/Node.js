import React, {useState, useEffect} from 'react';

const WALL = 'rebeccapurple';
const PATH = 'rgba(215, 186, 243, 0.5)';
const GOAL = 'gold';
const START = 'limegreen';

const Node = ({onMouseDown, onMouseEnter, goal, start, wall}) => {

    const [color, setColor] = useState(PATH);

    useEffect(() => {
      if (goal) {
        setColor(GOAL);
      }
      else if (start) {
        setColor(START);
      } 
      else if (wall) {
        setColor(wall);
      }
      else {
        setColor(PATH)
      }
    }, [goal, start, wall]) 

    return (
        <div onMouseDown={onMouseDown} onMouseEnter={onMouseEnter} style={{backgroundColor: color}} className="grid-item"></div>
    )
}

export default Node;