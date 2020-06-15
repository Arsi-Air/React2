import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

function Room() {
  const [isLit, setLit] = React.useState(false);
  const [isTemp, setTemp] = React.useState(22);
  const brightness = isLit ? "lit" : "dark";
  
  return (
    <div className={`room ${brightness}`}>
    The room is {isLit ? 'lit' : 'dark'}
    <br />
    The temperature is {isTemp}°C
    <br />
    <button onClick={() => setTemp(isTemp + 1)}>
      + temp
    </button>
    <button onClick={() => setTemp(isTemp - 1)}>
      - temp
    </button>
    <br />
    <button onClick={() => setLit(!isLit)}>
      flip the switch
    </button>
    <br />
    <button onClick={() => setLit(true)}>
      Turn lights on
    </button>
    <br />
    <button onClick={() => setLit(false)}>
      Turn lights off
    </button>
    </div>
  );
}

ReactDOM.render(<Room />, document.getElementById('root'));
