import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './App.css';

const App: React.FC = () => {

  const initialCount = useMemo(() => {
    const random = Math.random() * 100
    return Math.floor(random)
  }, [])

  const [count, setCount] = useState(initialCount)

  const hundleClick = useCallback(() => {
    setCount(count + 1)
  }, [count])
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={hundleClick}>up</button>
    </div>
  );
}

export default App;
