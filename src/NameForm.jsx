import { useState, useId } from "react";

const NameForm = () => {
  const [name, setName] = useState("");

  const nameId = useId();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Привет, ${name}`);
  }
  return (
    <div>
      <h2>Форма имени</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameId}>Name:</label>
        <input
          id={nameId}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Отправить</button>
      </form>
      <p>{name}</p>
    </div>
  );
};

export default NameForm;
