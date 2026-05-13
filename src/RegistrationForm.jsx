import { useId, useState } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const ageId = useId();
  const cityId = useId();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(
      `Данные формы: ${name}, ${email}, ${password}, ${age}, ${city}`,
    );
  }

  return (
    <div>
      <h2>Расширенная форма регистрации</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor={nameId}>Имя: </label>
        <input
          type="text"
          id={nameId}
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginBottom: "20px" }}
        />

        <label htmlFor={emailId}>Email: </label>
        <input
          type="email"
          id={emailId}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: "20px" }}
        />

        <label htmlFor={passwordId}>Пароль: </label>
        <input
          type="password"
          id={passwordId}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: "20px" }}
        />

        <label htmlFor={ageId}>Возраст: </label>
        <input
          type="number"
          id={ageId}
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={{ marginBottom: "20px" }}
        />

        <label htmlFor={cityId}>Город: </label>
        <input
          type="text"
          id={cityId}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ marginBottom: "20px" }}
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
