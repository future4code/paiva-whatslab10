import React from 'react';
import './App.css';
import Chat from './components/Chat';
import { useState} from 'react';

function App() {

  function enviar (){
    let nome = document.getElementsByName('nome')[0];
    let mensagem = document.getElementsByName('mensagem')[0];
    let tipoMsg = 'recebido';

    if (nome.value === 'eu'){
      tipoMsg = 'enviado'
    }
    

    const msgObjeto = {nome: nome.value, msg: mensagem.value, tipoMsg: tipoMsg}
    nome.value = '';
    mensagem.value = '';
    setMensagens([...mensagens, msgObjeto]);
  }

  const [mensagens, setMensagens] = useState([]); //

  return(
    <div>
    {mensagens.map((mensagem) => (
      <Chat msg={mensagem.msg} tipoMsg={mensagem.tipoMsg} nome={mensagem.nome}></Chat>
    ))}

    <div className='containerInput'>
      <input name='nome' placeholder='Nome'/>
      <input name='mensagem' placeholder='Digite uma mensagem...'/>
      <button onClick={enviar}>Enviar</button>
    </div>
    </div>
    )
    }


export default App;