import React, { useState } from 'react';


const List = () => {

    const  [num, setNum] = useState(0);

    const incNum = () => {
        setNum(num + 1);
    }

    const decNum = () => {
        if(num > 0){
        setNum(num - 1);
    }else{
        setNum(0);
    }
    }
    return(
        <>
        <div className="main_div">
            <div className="card">
                <h1>{num}</h1>
                <div className="btn_div">
                <button onClick={incNum}>inc</button>
                <button onClick={decNum}>dec</button>
                </div>

            </div>
        </div>
        </>
    )
} ;

export default List;
