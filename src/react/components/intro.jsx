import React, { Component } from 'react';
import { connect } from 'react-redux';
import newGame from '../../create/newGame';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: 'Miners of Cryptan',
      totalPlayers: 3,
      color: 'orange',
    };
  }

  setTotalPlayers = (e) => {
    this.setState({ totalPlayers: parseInt(e.target.value, 10) });
  }

  setColor = (e) => {
    this.setState({ color: e.target.value });
  }

  newGame = (e) => {
    newGame({
      players: {
        color: this.state.color,
        totalPlayers: this.state.totalPlayers,
      },
    });
  }

  render() {
    const { totalPlayers, color } = this.state;

    return (
      <div>
        <div id="intro" className="intro">
          <div className="settingsWrapper">
            <div className="gameName">{this.state.gameName}</div>
            <div className="settings">
              <div className="setting">
                <div className="description">Number of Players:</div>
                <button value="3" className={"selection number" + (totalPlayers === 3 ? ' selected' : '')} onClick={this.setTotalPlayers}>3</button>
                <button value="4" className={"selection number" + (totalPlayers === 4 ? ' selected' : '')} onClick={this.setTotalPlayers}>4</button>
              </div>
              <div className="setting">
                <div className="description">Select Your Color:</div>
                <button value="blue" className={"selection color blue" + (color === 'blue' ? ' selected' : '')} onClick={this.setColor} />
                <button value="orange" className={"selection color orange" + (color === 'orange' ? ' selected' : '')} onClick={this.setColor} />
                <button value="white" className={"selection color white" + (color === 'white' ? ' selected' : '')} onClick={this.setColor} />
                <button value="red" className={"selection color red" + (color === 'red' ? ' selected' : '')} onClick={this.setColor} />
              </div>
            </div>
            <div className="play_wrapper">
              <button id="play" className="play" onClick={this.newGame}>PLAY</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ settings: state.settings });

export default connect(mapStateToProps)(Intro);
