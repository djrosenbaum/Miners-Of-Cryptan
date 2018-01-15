import React, { Component } from 'react';
import { connect } from 'react-redux';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: 'Miners of Cryptan',
    };
  }

  setNumberOfPlayers = (e) => {
    console.log('setNumberOfPlayers:', e.currentTarget.innerText);
    this.props.dispatch({
      type: 'UPDATE_SETTINGS',
      payload: {
        number_of_players: e.currentTarget.innerText,
      },
    });
  }

  render() {
    const colors = ['blue', 'orange', 'white', 'red'];
    const colorButtons = colors.map(color => (<button key={color} className={['selection', 'color', color].join(' ')} />));

    return (
      <div>
        <div id="intro" className="intro">
          <div>
            <div className="gameName">{this.state.gameName}</div>
            <div className="settings">
              <div className="setting">
                <div className="description">Number of Players:</div>
                <button className="selection number" onClick={this.setNumberOfPlayers}>3</button>
                <button className="selection number" onClick={this.setNumberOfPlayers}>4</button>
              </div>
              <div className="setting">
                <div className="description">Select Your Color:</div>
                {colorButtons}
              </div>
            </div>
            <div className="play_wrapper">
              <div id="play" className="play">PLAY</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ players: state.players });

export default connect(mapStateToProps)(Intro);
