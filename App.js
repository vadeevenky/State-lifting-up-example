import React, { useState } from "react";
import ComB from "./ComB";
import ComA from "./ComA";
function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <ComA count={count} />

      <ComB count={count} test={increment} />
    </div>
  );
}

export default App;
