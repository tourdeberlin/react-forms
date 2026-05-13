import { useState } from "react";

const ColorForm = () => {
  const [selectedColor, setSelectedColor] = useState();

  return (
    <div>
      <h2>Выбор любимого цвета</h2>
      <select
        name="colors"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        <option selected disabled>
          Выберите цвет
        </option>
        <option value="Красный">Красный</option>
        <option value="Синий">Синий</option>
        <option value="Зеленый">Зеленый</option>
      </select>
      <p>Ваше любимый цвет: {selectedColor}</p>
    </div>
  );
};

export default ColorForm;
