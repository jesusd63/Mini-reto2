import GetButton from "./Components/GetButton";

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api/hello")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div>
      <h1>BUTTONS</h1>
      <GetButton />
    </div>
  );
}

export default App;