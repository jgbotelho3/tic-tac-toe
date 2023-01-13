import {useState, useEffect} from 'react'
import {Circle, X} from 'phosphor-react'
import winnerCombinations from '../../mocks/winnerCombinations'
import * as S from './styles'

const Board = () => {

    const [game, setGame] = useState([0,0,0,0,0,0,0,0,0])
    const [player, setPlayer] = useState(1)
    const [winner, setWinner] = useState(null)
    const [winningSquares, setWinningSquares] = useState([])

    useEffect(() => {
        handleWinner()
    }, [game])

    const handleClickedSquare = (squarePosition) => {
          if(game[squarePosition] !== 0){
            return
        }

        setGame((prev) => {
            const newGameData = [...prev]
            newGameData[squarePosition] = player
            return newGameData
        })

        setPlayer(player === 1 ? 2: 1)
    }

    const handleWinner = () => {
        for(let items of winnerCombinations){
            if(
                game[items[0]] === 1 &&
                game[items[1]] === 1 &&
                game[items[2]] === 1)
                {
                    setWinner('Player 1')
                    setWinningSquares(items)
                    break
                }
            if(
                game[items[0]] === 2 &&
                game[items[1]] === 2 &&
                game[items[2]] === 2)
                {   
                    setWinner('Player 2')
                    setWinningSquares(items)
                    break
                }
            if(game.every((item) => item !== 0)){
                setWinner('Empate')
                break
            }
        }
    }

    const handleRestart = () => {
        setGame([0,0,0,0,0,0,0,0,0])
        setPlayer(1)
        setWinner(null)
        setWinningSquares([])
    }
    return(
    <S.Container>
        {game.map((item, index) => {
            return <S.GameSquare 
            key={index} 
            style={{
            pointerEvents: winner ? 'none' : '',
            backgroundColor: winningSquares.includes(index) ? 
            'var(--blue)' : null}}
            onClick={() => handleClickedSquare(index)}>
                {item === 1 && <X size={60} color="var(--black)" />}
                {item === 2 && <Circle size={60} color="var(--black)" />}
              
            </S.GameSquare>
        })}

        {winner && (
            
            <S.WinnerContainer>     
                <S.Winner>{`Vencedor: ${winner}`}</S.Winner>
                <S.Button onClick={handleRestart}>Jogar Novamente</S.Button> 
            </S.WinnerContainer>
        )}
    </S.Container>
    
   

    )
}

export default Board