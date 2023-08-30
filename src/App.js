import { useEffect } from "react";

function App() {
  async function netlifyTest() {
    let response = await fetch('/.netlify/functions/test');
    let result = await response.json();

    console.log('useEffect firing');
    console.log(result);
  }
  // useEffect(() => {
  //   netlifyTest();
  // }, [])
  return (
    <div className="App">
      <button onClick={netlifyTest}>Another way to trigger netlify functions</button>
    </div>
  );
}

export default App;
