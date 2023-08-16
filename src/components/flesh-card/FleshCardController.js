import { useState } from "react";
import { questions } from "./../../data";
import "./FleshCard.css";
import FleshCardItem from "./FleshCardItem";

function FleshCardController() {
  const [data, setData] = useState(questions);

  return (
    <div className="flashcards">
      {data.map((item) => (
        <FleshCardItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default FleshCardController;
