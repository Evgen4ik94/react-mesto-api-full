import React, {useState, useEffect} from "react";
import Card from "./Card";
import api from "../utils/api";

function Main(props) {
  const [userName, setUserName] = useState("Евгений Миляков");
  const [userDescription, setUserDescription] = useState(
    "Инженер-конструктор"
  );
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    api.getUserData()
      .then((result) => {
        const userData = result;
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => console.log(err));
  }, []);
  
  useEffect(() => {
    api.getInitialCards()
      .then((result) => {
        const cardList = result;
        setCards(cardList);
      })
      .catch((err) => console.log(err));
  }, []);
  

  return (
    <>
      <section className="profile">
          <div className="profile__avatar">
            <button onClick={props.onEditAvatar} className="profile__avatar-button">
              <img
                src={userAvatar}
                alt="Фото профиля"
                className="profile__image"
              />
            </button>
          </div>
          <div className="profile__info">
            <div className="profile__name-box">
              <h1 className="profile__name text">{userName}</h1>
              <button
                className="profile__button profile__button-edit"
                onClick={props.onEditProfile}
                type="button"
              />
            </div>
            <div className="profile__prof text">{userDescription}</div>
          </div>
        <button
          className="profile__button profile__button-add"
          onClick={props.onAddPlace}
          type="button"
        />
      </section>
      <section className="gallery">
        <ul className="gallery__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              likeCounter={card.likes.length}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </>
  );
}

export default Main;
