import React, { useEffect } from "react";
import PlayersCard from "./PlayersCard";
import styled from "styled-components";
import { useLocalStorage } from "../Hooks/LocalStorage";

// function PlayersList({ players }) {
export default class PlayersList extends React.Component {
  render() {
    return (
      <div>
        {this.props.players.map(el => (
          <PlayersCard
            key={el.id}
            name={el.name}
            country={el.country}
            searches={el.searches}
          />
        ))}
      </div>
    );
  }
}

//   const [topLocal, setTopThree] = useLocalStorage("topLocals");
// //console.log(topLocal)

//   useEffect(() => {

//     const topThreePlayers = players.filter(el => {
//       return el.id < 5
//     });

//     setTopThree(topThreePlayers);

//   }, [players]);

//   return (
//     <section className="player-list">
//       <div>
//         {topLocal.map(el => (

//           <div>
//             <p>{el.name} </p>
//             <p>{el.id} </p>
//           </div>
//         ))}
//       </div>
//       {players.map(player => (

//         <PlayersCard
//           key={player.id}
//           name={player.name}
//           country={player.country}
//           searches={player.searches}
//         />
//       ))}

//     </section>
//   );
// }

// export default PlayersList;

const TestDiv = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  background-color: #fff;
  margin-bottom: 30px;
  align-items: center;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.4rem;
  }
`;
