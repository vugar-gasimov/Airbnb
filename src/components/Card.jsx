import Str from "../../public/images/Star.svg";
import "./card.css";
export default function Card(props) {
  console.log(props.openSpots);
  return (
    <div className="card--container">
      <div className="card--img-container">
        <p className="card--text-img">SOLD OUT</p>
        <img className="card--img" src={props.img} alt="Katie" />
      </div>
      <div className="card--info-container">
        <p className="card--rating">
          <img src={Str} width={14} height={14} alt="Star icon" />
          <span className="">{props.rating}</span>
          <span className="gray">({props.reviewCount}) •</span>
          <span className="gray">{props.location}</span>
        </p>
      </div>
      <h2 className="card--text">{props.title}</h2>
      <p className="card--price">
        <span className="bold">From ${props.price}</span>
      </p>
    </div>
  );
}
