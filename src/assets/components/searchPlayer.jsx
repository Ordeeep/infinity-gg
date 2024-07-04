import './searchPlayer.css'

function searchPlayer() {
    return (
        <div className='containerSearchPlayer'>
            <select name="" id="">
                <option value="BR">BR</option>
                <option value="NA">NA</option>
                <option value="KR">KR</option>
                <option value="JP">JP</option>
            </select>
            <input type="text" placeholder="Digite o nome do invocador+BR1" />
        </div>
    )
}
export default searchPlayer
