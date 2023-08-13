function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
      <h3>@apridew</h3>
    </div>
  );
}

export default App;