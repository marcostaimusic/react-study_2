import React from "react";
import { Link } from "react-router-dom";

const heroContext = require.context("../../assets/heroes", true);

const heroImage = (id) => {
  return heroContext(`./${id}.jpg`).default;
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <>
      <div className="col-6 mb-2" style={{ maxWidth: 540 }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={heroImage(id)} className="card-img" alt={superhero} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {alter_ego !== characters && (
                <small className="card-text">{characters}</small>
              )}
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              {/* ricordati di togliere il punto da ./hero/... altirmenti non funziona il link */}
              <Link to={`/hero/${id}`}>More...</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
