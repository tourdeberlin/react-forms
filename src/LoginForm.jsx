import { useState, useId } from "react";

const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const loginId = useId();
  const passwordId = useId();
  function handleSubmit(e) {
    e.preventDefault();

    if (login && password) {
      alert("Добро пожаловать!");
    } else {
      alert("Пожалуйста, заполните все поля");
    }
  }
  return (
    <div>
      <h2>Форма входа</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor={loginId}>Login:</label>
        <input
          id={loginId}
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <label htmlFor={passwordId}>Password:</label>
        <input
          id={passwordId}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default LoginForm;
