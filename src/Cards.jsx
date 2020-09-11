import React from 'react';

function Card(props){
    return(
      <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="mypic" className="card_img"/>
          <div className="class_info">
           <span className="card_catag">{props.title}</span>
           <h3 className="card_tittle">{props.sname}</h3>
            <a href={props.link} target="_blank">
              <button>watch now</button>
            </a>
          </div>
        </div>
    
      </div>
      </>
    )
  }

  export default Card;