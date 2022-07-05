import { XoState } from "./Xostate"

export const XoButton = (props: {
    state: XoState,
    setState: (state: XoState) => void,
    index: number

}) => {

    const handleClick = () => {
        const state = props.state;
        state.board[props.index] = props.state.currentPlayer;
        state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
        props.setState({ ...state });
    }
    let imgSrc = 'empty-image.svg';
    if (props.state.board[props.index] === 'X') {
        imgSrc = 'x-img.svg';
    } else if (props.state.board[props.index] === 'O'){
        imgSrc = 'o-img.svg'
    }
    const background = props.state.board[props.index] !== '' ? 'yellow' : ''
    return (
        <img src={imgSrc}
            onClick={handleClick}
            style={{
                background,
                width: '40px',
                height: '40px',
                fontSize: '30px',
                lineHeight: '40px',
                textAlign: 'center',
                borderStyle: 'solid',
                borderColor: 'black'
            }}>

        </img>
    )
}