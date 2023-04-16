import GetButton from "./Components/GetButton";
import React from "react";

function App() {

  const [data, setData] = React.useState(null);

  return (
    <div>
      <h1>BUTTONS</h1>
      <GetButton />
    </div>
  );
}

export default App;