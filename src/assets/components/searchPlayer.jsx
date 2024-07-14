import React from 'react';
import './searchPlayer.css'; // Certifique-se de importar seu arquivo CSS corretamente
import { Component } from 'react';
class SearchPlayer extends Component {
    //const loadingDiv = document.getElementById('modalLoading');
    /*
    if (loadingDiv) {
        //loadingDiv.style.display = 'none';
    }
    */
    render() {
        return(
            <div className='containerSearchPlayer'>
            <select name="" id="">
                <option value="BR">BR</option>
                <option value="NA">NA</option>
                <option value="KR">KR</option>
                <option value="JP">JP</option>
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