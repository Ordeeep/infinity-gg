import React from 'react';
import './searchPlayer.css';
import { Component } from 'react';
class SearchPlayer extends Component {
    
    render() {
        return(
            <div className='containerSearchPlayer'>
            <select name="region" id="region">
                <option value="BR1">BR1</option>
                <option value="EUN1">EUN1</option>
                <option value="EUW1">EUW1</option>
                <option value="KR">KR</option>
                <option value="LA1">LA1</option>
                <option value="LA2">LA2</option>
                <option value="ME1">ME1</option>
                <option value="NA1">NA1</option>
                <option value="OC1">OC1</option>
                <option value="PH2">PH2</option>
                <option value="RU">RU</option>
                <option value="SG2">SG2</option>
                <option value="TH2">TH2</option>
                <option value="TR1">TR1</option>
                <option value="TW2">TW2</option>
                <option value="VN2">VN2</option>
            </select>
            <input
                type="text"
                placeholder="Digite o nome do invocador+BR1"
                onKeyDown={this.props.teste}
                className='inputSearchPlayer'
                required
            />
        </div>
        )

    };
}

export default SearchPlayer;