import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [toogle, setToogle] = useState(false);
  const [value, setValue] = useState("");

  const onClick = () => setToogle((prev) => !prev);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);

  return (
    <div>
      <h1 data-testid="value-el">{value}</h1>
      {toogle === true && <div data-testid="toogle-el">toogle</div>}
      {data && <div style={{ color: "red" }}>data</div>}
      <h2>Hello world</h2>
      <button data-testid="toogle-btn" onClick={onClick}>
        Click me
      </button>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="input value..."
      />
    </div>
  );
}

export default App;
