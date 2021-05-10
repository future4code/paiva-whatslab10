import React from 'react';
import './index.css';

export default function Chat (props){
  return(
    <ul className="containerMsg">

    <li className={props.tipoMsg}>
      <div className="mensagem">
        <p>{props.nome}: {props.msg}</p>
      </div>
    </li>
    
  </ul>

    );

}
