import React, { useMemo } from "react";
import { Navigate, Route, Routes, useNavigate, useParams } from "react-router";
import { getHeroesById } from "../../selectors/getHeroById";
import "animate.css";

const heroContext = require.context("../../assets/heroes", true);

const heroImage = (id) => {
  return heroContext(`./${id}.jpg`).default;
};

export const HeroScreen = () => {
  const params = useParams();
  const history = useNavigate();
  const hero = useMemo(() => getHeroesById(params.heroeId), [params.heroeId]);

  if (!hero) {
    return (
      <Routes>
        <Route path="/*" element={<Navigate replace to="/marvel" />} />;
      </Routes>
    );
  }
  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const handleClick = () => {
    history(-1);
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          // src={`../assets/heroes/${id}.jpg`} // importata quando assets era sotto public
          src={heroImage(id)}
          className="img-thumbnail animate__animated animate__fadeInLeft "
          alt="superhero"
        />
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b>
            {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleClick}>
          Return{" "}
        </button>
      </div>
    </div>
  );
};
