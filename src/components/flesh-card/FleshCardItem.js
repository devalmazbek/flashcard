import { useState } from "react";

function FleshCardItem({ item: { question, answer, id } }) {
  const [selected, setSelected] = useState(null);
  const handleClick = (id) => {
    setSelected(id !== selected ? id : null);
  };
  return (
    <div
      onClick={() => handleClick(id)}
      className={selected === id ? "selected" : ""}
    >
      <p>{selected == id ? answer : question}</p>
    </div>
  );
}

export default FleshCardItem;
