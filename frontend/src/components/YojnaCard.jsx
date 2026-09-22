import { Link } from "react-router-dom";

function YojnaCard({ yojna }) {
  return (
    <div className="yojna-card">
      <div className="yojna-icon">
        {yojna.icon}
      </div>

      <div className="yojna-content">
        <span className="yojna-category">
          {yojna.category}
        </span>

        <h3>{yojna.name}</h3>

        <p>{yojna.description}</p>

        <div className="yojna-info">
          <span>👥 {yojna.forWhom}</span>
          <span>📄 {yojna.documents}</span>
        </div>

        <Link
          to="/yojna/pm-awas-yojana"
          className="primary-btn"
        >
          पूरी जानकारी →
        </Link>
      </div>
    </div>
  );
}

export default YojnaCard;
