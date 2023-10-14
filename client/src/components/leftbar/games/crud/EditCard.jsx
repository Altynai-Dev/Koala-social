import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Edit.scss";

const EditCard = ({ card, onUpdate, onCancel }) => {
  const [editedCard, setEditedCard] = useState({ ...card });
  const navigate = useNavigate();
  useEffect(() => {
    setEditedCard({ ...card });
  }, [card]);

  const handleUpdate = () => {
    axios
      .put(`http://localhost:8000/products/${editedCard.id}`, editedCard)
      .then(() => onUpdate(editedCard))
      .catch((error) => console.error("Ошибка при обновлении данных:", error));
    navigate("/games");
  };

  return (
    <div>
      <h2>Редактировать карточку</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          placeholder=" Название:"
          type="text"
          value={editedCard.name}
          onChange={(e) =>
            setEditedCard({ ...editedCard, name: e.target.value })
          }
        />
        <input
          placeholder="Цена:"
          type="number"
          value={editedCard.price}
          onChange={(e) =>
            setEditedCard({ ...editedCard, price: e.target.value })
          }
        />
        <input
          placeholder="Описание:"
          type="text"
          value={editedCard.description}
          onChange={(e) =>
            setEditedCard({ ...editedCard, description: e.target.value })
          }
        />
        <input
          placeholder="Тип:"
          type="text"
          value={editedCard.type}
          onChange={(e) =>
            setEditedCard({ ...editedCard, type: e.target.value })
          }
        />{" "}
        <input
          placeholder="picture:"
          type="text"
          value={editedCard.image}
          onChange={(e) =>
            setEditedCard({ ...editedCard, image: e.target.value })
          }
        />
        <div className="editBtns">
          <button onClick={handleUpdate}>Обновить</button>
          <button onClick={onCancel}>Отмена</button>
        </div>
      </div>
    </div>
  );
};

export default EditCard;
