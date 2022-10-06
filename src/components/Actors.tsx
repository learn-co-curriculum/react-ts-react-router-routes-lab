import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => {
        return (
          <div key={actor.name}>
            <h3>Name: {actor.name}</h3>
            <p>Movies:</p>
            <ul>
              {actor.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Actors;
