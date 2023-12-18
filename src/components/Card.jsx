import Str from "../../public/images/Star.svg";
import "./card.css";
export default function Card(card) {
  console.log(card);
  let badgeText;
  if (card.openSpots === 0) {
    badgeText = "SLOD OUT";
  } else if (card.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card--container">
      <div className="card--img-container">
        {badgeText && <p className="card--text-img">{badgeText}</p>}
        <img className="card--img" src={card.coverImg} alt="Katie" />
      </div>
      <div className="card--info-container">
        <p className="card--rating">
          <img src={Str} width={14} height={14} alt="Star icon" />
          <span className="">{card.stats.rating}</span>
          <span className="gray">({card.stats.reviewCount}) •</span>
          <span className="gray">{card.location}</span>
        </p>
      </div>
      <h2 className="card--text">{card.title}</h2>
      <p className="card--price">
        <span className="bold">From ${card.price}</span>
      </p>
    </div>
  );
}
