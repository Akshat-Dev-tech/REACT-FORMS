import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React Form</h1>
      <form action="https://example.com/submit" method="POST">
        <label htmlFor="name">Name </label>
        <input id="name" name="name" type="text" />
        <label htmlFor="email">email</label>
        <input id="email" name="email" type="email" />
        <button>Submit</button>
      </form>
    </div>
  );
}
