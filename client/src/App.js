import React from "react";
import "./App.css";
import axios from "axios";
import PlayersList from './Components/PlayersList'

const playersApi = `http://localhost:5000/api/players`;

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      players: []
    };
  }

  componentDidMount() {
    //debugger;
    axios.get(playersApi).then(res => {
      this.setState({
        players: res.data
      });
    })
    // .catch(error=>{
    //   console.log(error)
    // })
  }

  render() {
    return (
    <div>
      <PlayersList players={this.state.players}/>
    </div>
    )
  }
}
