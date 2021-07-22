import React, { useState } from "react";

function FunctionalComponent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Functional Component</h2>

      <button className="button" onClick={increment}>
        ➕
      </button>

      <button className="button" onClick={decrement}>
        ➖
      </button>
      <h2>The count is: {count}</h2>
    </div>
  );
}

export default FunctionalComponent;
