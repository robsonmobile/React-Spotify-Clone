import React from 'react';
import Player from "../../components/player/Player"

const Homepage = ({spotify}) => {
    return (
        <div>
            <Player spotify={spotify}/>
        </div>
    );
};

export default Homepage;