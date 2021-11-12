import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router";
import { HeroCard } from "../heroes/HeroCard";
import { useForm } from "../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = () => {
  let history = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search); // le '' sono per non passare undefined ma una string vuota come default

  const [formValues, handleChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const heroesFilter = useMemo(() => getHeroesByName(q), [q]); //ottima lezione su useMemo è la 182

  //   const heroesFilter = getHeroesByName(searchText);

  const onSubmit = (e) => {
    e.preventDefault();
    history(`?q=${searchText}`);
    // console.log(location.search);
  };

  return (
    <div>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search form</h4>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="searchText"
              placeholder="Find your hero"
              className="formControl"
              onChange={handleChange}
              value={searchText}
            />
            <button type="submit" className="btn btn-block btn-outline-primary">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === "" && (
            <div className="alert alert-info">Search for a hero</div>
          )}

          {q !== "" && heroesFilter.length === 0 && (
            <div className="alert alert-danger">No hero with the name {q}</div>
          )}

          {heroesFilter.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
