import { useEffect } from "react";

const Statistics = () => {
  useEffect(() => {
    document.title = "Gadget Nest | Statistics";
  }, []);
  return (
    <div>
      <h1>Statistics</h1>
    </div>
  );
};

export default Statistics;
