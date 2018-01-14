import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <div>
        <div id="intro" class="intro">
          <div class="settingWrapper">
            <div class="gameName">Miners of Cryptan</div>
            <div class="settings">
              <div class="setting">
                <div class="description">Number of Players:</div>
                <div class="selection number selected">3</div>
                <div class="selection number">4</div>
              </div>
              <div class="setting">
                <div class="description">Select Your Color:</div>
                <div class="selection color blue"></div>
                <div class="selection color orange selected"></div>
                <div class="selection color white"></div>
                <div class="selection color red"></div>
              </div>
            </div>
            <div class="play_wrapper">
              <div id="play" class="play">PLAY</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
