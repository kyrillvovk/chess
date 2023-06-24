import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const navigate = useNavigate();
  return (<>
    <input type="text" value={player1} onChange={event => setPlayer1(event.target.value)}/>
    <input type="text" value={player2} onChange={event => setPlayer2(event.target.value)}/>
    <button onClick={()=>{
      localStorage.setItem("player1", player1);
      localStorage.setItem("player2", player2);
      navigate("/Game");
    }}>submit</button>
    </>);
  
};

export default Home;