import "./App.css";
import ColorForm from "./ColorForm";
import LoginForm from "./LoginForm";
import NameForm from "./NameForm";

function App() {
  return (
    <div className="app">
      <NameForm />
      <LoginForm />
      <ColorForm />
    </div>
  );
}

export default App;
