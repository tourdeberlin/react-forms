import "./App.css";
import ColorForm from "./ColorForm";
import LoginForm from "./LoginForm";
import NameForm from "./NameForm";
import Post from "./Post";
import RegistrationForm from "./RegistrationForm";

function App() {
  return (
    <div className="app">
      <NameForm />
      <LoginForm />
      <ColorForm />
      <RegistrationForm />
      <Post/>
    </div>
  );
}

export default App;
