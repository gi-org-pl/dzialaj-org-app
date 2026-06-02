import { Button } from "@gi/athena";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </Button>
  );
};

export default Counter;
