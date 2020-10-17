import React from 'react';
import './index.css';

function app(){

    let currTime = new Date();
    currTime = currTime.getHours();

    const styl = {};

    let time = "";


    if (currTime >= 1 && currTime < 12) {
        time = 'good morning';
        styl.color = 'green';
    } else if (currTime >= 12 && currTime < 19) {
        time = 'good afternoon';
        styl.color = 'brown';
    } else if (currTime >= 20 && currTime <= 24) {
        time = 'good night';
        styl.color = 'purple';

    }

    return (
        <>
        <div className = 'heading'>
            <h1> HELLO SATISH SIR < span style = {styl}> {time} </span></h1 >
            </div> </>
    );
}

export default app;