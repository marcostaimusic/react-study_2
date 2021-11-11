import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (id) => {
  return heroes.filter((hero) => hero.id === id);
};
