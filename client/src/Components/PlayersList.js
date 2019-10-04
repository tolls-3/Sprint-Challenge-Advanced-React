import React from "react";
import PlayersCard from "./PlayersCard";

function PlayersList({ players }) {
    return (
      <section className="player-list">
        {players.map( player => (
          <PlayersCard 
            key={player.id} 
            name={player.name} 
            country={player.country}
            searches={player.searches}
          />
        ))}
      </section>
    )
  }

export default PlayersList;