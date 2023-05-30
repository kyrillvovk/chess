import React, { useEffect, useState } from 'react';

function Figure({ figure, startPosition, type, board, setBoard, id, counterWhite, setCounterWhite, counterBlack, setCounterBlack,  stepsWhite, setStepsWhite, stepsBlack, setStepsBlack}){
    const [x, setX] = useState(startPosition[0]);
    const [y, setY] = useState(startPosition[1]);
    const [isHidden, setIsHidden] = useState(false);

    const refreshBoard = (xPrev, yPrev, xNew, yNew) => {
        console.log([xPrev, yPrev, xNew, yNew]);

        const boardNew = [];

        if (counterWhite === counterBlack && id[0] === 'w'){
            setCounterWhite(counterWhite + 1);
            setStepsWhite([...stepsWhite, id[1] + ((board[xNew][yNew] === '') ? '' : 'x') + String.fromCharCode('h'.charCodeAt(0) - yNew) + (xNew+1)]);
        }

        if (counterWhite === counterBlack+1 && id[0] === 'b'){
            setCounterBlack(counterBlack + 1);
            setStepsBlack([...stepsBlack, id[1] + ((board[xNew][yNew] === '') ? '' : 'x') + String.fromCharCode('h'.charCodeAt(0) - yNew) + (xNew+1)]);
        }

        console.log(board[xNew][yNew])

        for (let i = 0; i < board.length; i++) {
            boardNew.push([]);
            for (let j = 0; j < board[i].length; j++) {
                if (i === xPrev && j === yPrev) {
                    boardNew[i].push('');
                } else if (i === xNew && j === yNew) {
                    boardNew[i].push(board[xPrev][yPrev]);
                } else {
                    boardNew[i].push(board[i][j]);
                }
            }
            console.log(boardNew[i]);
        }

        setBoard(boardNew);
    };

    useEffect(() => {
        let newState = true;
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === id) {
                    newState = false;
                    break;
                }
            }
            if (!newState) {
                break;
            }
        }
        setIsHidden(newState);
    }, [board])

    const handleDragEnd = (event) => {
        const [xPrev, yPrev] = [x, y];
        const [xNew, yNew] = [
            Math.floor(event.clientY / 60),
            Math.floor(event.clientX / 60)
        ]

        if (xNew < 0 || xNew > 7 || yNew < 0 || yNew > 7) {
            return;
        }

        if (board[xNew][yNew] !== '' && id[0] === board[xNew][yNew][0]) {
            return;
        }

        if (counterWhite === counterBlack && id[0] === 'b'){
            return;
        }

        if (counterWhite === counterBlack+1 && id[0] === 'w'){
            return;
        }



        switch (type) {
            case 'king':
                if (Math.abs(xNew - x) <= 1 && Math.abs(yNew - y) <= 1) {
                    setX(xNew);
                    setY(yNew);
                    refreshBoard(xPrev, yPrev, xNew, yNew);
                }
                break;

            case 'queen':
                if ((yNew - y === 0) || (xNew - x === 0)) {
                    const path = [];
                    if (xNew - x !== 0) {
                        const [start, end] = [
                            Math.min(xNew, x),
                            Math.max(xNew, x)
                        ];
                        for (let i = start + 1; i < end; i++) {
                            path.push(board[i][y]);
                        }
                    } else {
                        const [start, end] = [
                            Math.min(yNew, y),
                            Math.max(yNew, y)
                        ];
                        for (let i = start + 1; i < end; i++) {
                            path.push(board[x][i]);
                        }
                    }
                    if (path.every(cell => cell === '')) {
                        setX(xNew);
                        setY(yNew);
                        refreshBoard(xPrev, yPrev, xNew, yNew);
                    }
                } else if (Math.abs(xNew - x) === Math.abs(yNew - y)) {
                    const path = [];
                    if (xNew - x > 0 && yNew - y > 0) {
                        for (let i = 1; i < xNew - x; i++) {
                            path.push(board[x + i][y + i]);
                        }
                    } else if (xNew - x > 0 && yNew - y < 0) {
                        for (let i = 1; i < xNew - x; i++) {
                            path.push(board[x + i][y - i]);
                        }
                    } else if (xNew - x < 0 && yNew - y > 0) {
                        for (let i = 1; i < x - xNew; i++) {
                            path.push(board[x - i][y + i]);
                        }
                    } else {
                        for (let i = 1; i < x - xNew; i++) {
                            path.push(board[x - i][y - i]);
                        }
                    }
                    if (path.every(cell => cell === '')) {
                        setX(xNew);
                        setY(yNew);
                        refreshBoard(xPrev, yPrev, xNew, yNew);
                    }
                }
                break;

            case 'rook':
                if ((yNew - y === 0) || (xNew - x === 0)) {
                    const path = [];
                    if (xNew - x !== 0) {
                        const [start, end] = [
                            Math.min(xNew, x),
                            Math.max(xNew, x)
                        ];
                        for (let i = start + 1; i < end; i++) {
                            path.push(board[i][y]);
                        }
                    } else {
                        const [start, end] = [
                            Math.min(yNew, y),
                            Math.max(yNew, y)
                        ];
                        for (let i = start + 1; i < end; i++) {
                            path.push(board[x][i]);
                        }
                    }
                    if (path.every(cell => cell === '')) {
                        setX(xNew);
                        setY(yNew);
                        refreshBoard(xPrev, yPrev, xNew, yNew);
                    }
                }
                break;

            case 'bishop':
                if (Math.abs(xNew - x) === Math.abs(yNew - y)) {
                    const path = [];
                    if (xNew - x > 0 && yNew - y > 0) {
                        for (let i = 1; i < xNew - x; i++) {
                            path.push(board[x + i][y + i]);
                        }
                    } else if (xNew - x > 0 && yNew - y < 0) {
                        for (let i = 1; i < xNew - x; i++) {
                            path.push(board[x + i][y - i]);
                        }
                    } else if (xNew - x < 0 && yNew - y > 0) {
                        for (let i = 1; i < x - xNew; i++) {
                            path.push(board[x - i][y + i]);
                        }
                    } else {
                        for (let i = 1; i < x - xNew; i++) {
                            path.push(board[x - i][y - i]);
                        }
                    }
                    if (path.every(cell => cell === '')) {
                        setX(xNew);
                        setY(yNew);
                        refreshBoard(xPrev, yPrev, xNew, yNew);
                    }
                }
                break;

            case 'knight':
                if ((Math.abs(xNew - x) === 2 && Math.abs(yNew - y) === 1) || (Math.abs(xNew - x) === 1 && Math.abs(yNew - y) === 2)) {
                    setX(xNew);
                    setY(yNew);
                    refreshBoard(xPrev, yPrev, xNew, yNew);
                }
                break;

            case 'whitePawn':
                if (x === 1 && xNew - x === 2 && board[2][y] === '' && yNew - y === 0) {
                    setX(xNew);
                    refreshBoard(xPrev, yPrev, xNew, yNew);
                } else if (xNew - x === 1 && yNew - y === 0 && board[xNew][yNew] === '') {
                    setX(xNew);
                    refreshBoard(xPrev, yPrev, xNew, yNew);
                } else if (board[xNew][yNew][0] === 'b' && xNew-x === 1 && Math.abs(yNew-y)===1){
                    setX(xNew);
                    setY(yNew);
                    // setStepsWhite([...stepsWhite, id[1] + 'x' +String.fromCharCode('h'.charCodeAt(0) - yNew) + (xNew+1)]);
                    refreshBoard(xPrev, yPrev, xNew, yNew);
                }
                break;

            case 'blackPawn':
                if (x === 6 && xNew - x === -2 && board[5][y] === '' && yNew - y === 0) {
                    setX(xNew);
                    refreshBoard(xPrev, yPrev, xNew, yNew);
                } else if (xNew - x === -1 && yNew - y === 0 && board[xNew][yNew] === '') {
                    setX(xNew);
                    refreshBoard(xPrev, yPrev, xNew, yNew);
                }else if (board[xNew][yNew][0] === 'w' && xNew-x === -1 && Math.abs(yNew-y)===1){
                    setX(xNew);
                    setY(yNew);
                    // setStepsBlack([...stepsBlack, id[1] + String.fromCharCode('h'.charCodeAt(0) - yNew) + (xNew+1)]);
                    refreshBoard(xPrev, yPrev, xNew, yNew);
                }
                break;
        }
    };

    useEffect(() => {

    }, [board]);

    return (
        <>
            {!isHidden ?
                <>
                    <div
                        draggable
                        onDragEnd={handleDragEnd}
                        style={{
                            position: "absolute",
                            top: x * 60,
                            left: y * 60
                        }}>
                        <img src={figure} style={{ width: 60, height: 60 }} />
                    </div>
                </> :
                <></>
            }
        </>
    );
}

export default Figure;