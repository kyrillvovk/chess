import logo from './logo.svg';
import './App.css';
import Figure from './Figure';
import { useEffect, useState } from 'react';

import boardImage from './Chessboard480.png';
import whiteKing from './figures/Chess_klt45.svg'
import whiteQueen from './figures/Chess_qlt45.svg'
import whiteRook from './figures/Chess_rlt45.svg'
import whiteBishop from './figures/Chess_blt45.svg'
import whiteKnight from './figures/Chess_nlt45.svg'
import whitePawn from './figures/Chess_plt45.svg'

import blackKing from './figures/Chess_kdt45.svg'
import blackQueen from './figures/Chess_qdt45.svg'
import blackRook from './figures/Chess_rdt45.svg'
import blackBishop from './figures/Chess_bdt45.svg'
import blackKnight from './figures/Chess_ndt45.svg'
import blackPawn from './figures/Chess_pdt45.svg'

function App() {
    const [board, setBoard] = useState([]);
    const [counterWhite, setCounterWhite] = useState(0);
    const [counterBlack, setCounterBlack] = useState(0);
    const [stepsWhite, setStepsWhite] = useState([]);
    const [stepsBlack, setStepsBlack] = useState([]);
    const [pointsWhite, setPointsWhite] = useState(0);
    const [pointsBlack, setPointsBlack] = useState(0);

    useEffect(() => {
        setBoard([
            ['wr1', 'wn1', 'wb1', 'wk', 'wq', 'wb2', 'wn2', 'wr2'],
            ['wp1', 'wp2', 'wp3', 'wp4', 'wp5', 'wp6', 'wp7', 'wp8'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['bp1', 'bp2', 'bp3', 'bp4', 'bp5', 'bp6', 'bp7', 'bp8'],
            ['br1', 'bn1', 'bb1', 'bk', 'bq', 'bb2', 'bn2', 'br2'],
        ]);
    }, []);

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div style={{ flex: '0 0 auto', width: '40%' }}>
                    <div style={{ backgroundImage: `url(${boardImage})`, width: 480, height: 480 }}>
                        <Figure startPosition={[0, 3]} id="wk" key={'whiteKing'} type={'king'} figure={whiteKing} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[0, 4]} id="wq" key={'whiteQueen'} type={'queen'} figure={whiteQueen} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[0, 0]} id="wr1" key={'whiteRook1'} type={'rook'} figure={whiteRook} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[0, 7]} id="wr2" key={'whiteRook2'} type={'rook'} figure={whiteRook} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[0, 2]} id="wb1" key={'whiteBishop1'} type={'bishop'} figure={whiteBishop} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[0, 5]} id="wb2" key={'whiteBishop2'} type={'bishop'} figure={whiteBishop} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[0, 1]} id="wn1" key={'whiteKnight1'} type={'knight'} figure={whiteKnight} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[0, 6]} id="wn2" key={'whiteKnight2'} type={'knight'} figure={whiteKnight} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[1, 0]} id="wp1" key={'whitePawn1'} type={'whitePawn'} figure={whitePawn} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[1, 1]} id="wp2" key={'whitePawn2'} type={'whitePawn'} figure={whitePawn} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[1, 2]} id="wp3" key={'whitePawn3'} type={'whitePawn'} figure={whitePawn} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[1, 3]} id="wp4" key={'whitePawn4'} type={'whitePawn'} figure={whitePawn} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[1, 4]} id="wp5" key={'whitePawn5'} type={'whitePawn'} figure={whitePawn} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[1, 5]} id="wp6" key={'whitePawn6'} type={'whitePawn'} figure={whitePawn} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[1, 6]} id="wp7" key={'whitePawn7'} type={'whitePawn'} figure={whitePawn} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[1, 7]} id="wp8" key={'whitePawn8'} type={'whitePawn'} figure={whitePawn} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>

                        <Figure startPosition={[7, 3]} id="bk" key={'blackKing'} type={'king'} figure={blackKing} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[7, 4]} id="bq" key={'blackQueen'} type={'queen'} figure={blackQueen} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[7, 0]} id="br1" key={'blackRook1'} type={'rook'} figure={blackRook} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[7, 7]} id="br2" key={'blackRook2'} type={'rook'} figure={blackRook} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[7, 2]} id="bb1" key={'blackBishop1'} type={'bishop'} figure={blackBishop} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[7, 5]} id="bb2" key={'blackBishop2'} type={'bishop'} figure={blackBishop} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[7, 1]} id="bn1" key={'blackKnight1'} type={'knight'} figure={blackKnight} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[7, 6]} id="bn2" key={'blackKnight2'} type={'knight'} figure={blackKnight} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[6, 0]} id="bp1" key={'blackPawn1'} type={'blackPawn'} figure={blackPawn} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[6, 1]} id="bp2" key={'blackPawn2'} type={'blackPawn'} figure={blackPawn} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[6, 2]} id="bp3" key={'blackPawn3'} type={'blackPawn'} figure={blackPawn} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[6, 3]} id="bp4" key={'blackPawn4'} type={'blackPawn'} figure={blackPawn} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[6, 4]} id="bp5" key={'blackPawn5'} type={'blackPawn'} figure={blackPawn} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[6, 5]} id="bp6" key={'blackPawn6'} type={'blackPawn'} figure={blackPawn} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[6, 6]} id="bp7" key={'blackPawn7'} type={'blackPawn'} figure={blackPawn} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                        <Figure startPosition={[6, 7]} id="bp8" key={'blackPawn8'} type={'blackPawn'} figure={blackPawn} board={board} setBoard={setBoard} counterWhite={counterWhite} setCounterWhite={setCounterWhite} counterBlack={counterBlack} setCounterBlack={setCounterBlack} stepsWhite={stepsWhite} setStepsWhite={setStepsWhite} stepsBlack={stepsBlack} setStepsBlack={setStepsBlack} pointsWhite={pointsWhite} setPointsWhite={setPointsWhite} pointsBlack={pointsBlack} setPointsBlack={setPointsBlack}/>
                    </div>
                </div>

                
                <div style={{ flex: '0 0 auto', width: '40%' }}>
                    <table style={{ border: '3px solid black', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ width: '25%', border: '3px solid black', borderCollapse: 'collapse', padding: '5px' }}>No</th>
                                <th style={{ width: '25%', border: '3px solid black', borderCollapse: 'collapse', padding: '5px' }}>White</th>
                                <th style={{ width: '25%', border: '3px solid black', borderCollapse: 'collapse', padding: '5px' }}>Black</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stepsWhite.map((step, index) =>
                                <tr key={index}>
                                    <td style={{ border: '3px solid black', borderCollapse: 'collapse', padding: '5px' }}>{index + 1}</td>
                                    <td style={{ border: '3px solid black', borderCollapse: 'collapse', padding: '5px' }}>{step}</td>
                                    {index < stepsBlack.length ?
                                        <td style={{ border: '3px solid black', borderCollapse: 'collapse', padding: '5px' }}>{stepsBlack[index]}</td> :
                                        <td style={{ border: '3px solid black', borderCollapse: 'collapse', padding: '5px' }}></td>
                                    }
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div>
                    <table>
                        <thead>
                            <th style={{ width: '25%', border: '3px solid black', borderCollapse: 'collapse', padding: '5px'}}>White Points</th>
                            <th style={{ width: '25%', border: '3px solid black', borderCollapse: 'collapse', padding: '5px'}}>Black Points</th>
                        </thead>
                        <tbody>
                            <td style={{ border: '3px solid black', borderCollapse: 'collapse', padding: '5px' }}>{pointsWhite}</td>
                            <td style={{ border: '3px solid black', borderCollapse: 'collapse', padding: '5px' }}>{pointsBlack}</td>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );


}

export default App;
