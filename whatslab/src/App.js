import styled from "styled-components";
import React from "react";

const Containerzao = styled.div `
  display: flex;
  justify-content: center
`

const ContainerBody = styled.div `
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`

const ContainerTudo = styled.div `
  box-sizing: border-box;
  display: flex;
  flex-direction: column-reverse;
  width: 60vw;
  height: 100vh;
  border: 1px solid;
  background: #FFD8E9;

`
const InputNome = styled.input`
  border: none;
  border-radius: 10px;
  height: 3vh;
  width: 90px; 
  margin-right: 5px
`
const InputSms = styled.input `
  border: none;
  border-radius: 10px;
  height: 3vh;
  width: 45vw; 
  margin-right: 5px

`
const EstilizacaoBalaoChatUm = styled.div `
  background-color: #dDefff;
  display: flex;
  align-self: flex-end;
  margin: 5px;
  justify-content: flex-end;
  flex-direction: row;
  padding-right: 10px
 `

const EstilizacaoBalaoChatDois = styled.div `
  background-color: #F3DDF2;
  display: flex;
  align-self: flex-start;
  margin: 5px;
  justify-content: flex-start;
  flex-direction: row;
  padding-right: 10px
`

const Botao = styled.button `
  border: none;
  border-radius: 1px;
  height: 25px;
`

const Footer = styled.div `
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  background-color: lightgrey;
`



class App extends React.Component {

  state = {
  
  mensagemNoChat: [{nome:'eu', mensagem: 'nhenhenhennehenh'}, {nome:'Túlio', mensagem: 'nhenheeee'} ],
  nomeInput: '',
  mensagemInput: '',
}

handleName = ((event) => {
  this.setState({nomeInput: event.target.value})

})

handleMensagem = ((event) => {
  this.setState({mensagemInput: event.target.value})

})

enviar = (() => {
  const novaMsg = {nome: this.state.nomeInput, mensagem: this.state.mensagemInput}
  this.setState ({
    mensagemNoChat: [...this.state.mensagemNoChat, novaMsg],
    nomeInput: '',
    mensagemInput: '',
  })
})


render(){

  const chat = this.state.mensagemNoChat.map((valor)=>{
    if (valor.nome === 'eu'){
      return (
      <EstilizacaoBalaoChatUm>
        <div> {valor.mensagem} </div>
      </EstilizacaoBalaoChatUm>  
      )
    }else {
    return (
      <EstilizacaoBalaoChatDois>
        <div> {valor.nome} </div>
        <div> {valor.mensagem} </div>
      </EstilizacaoBalaoChatDois>  
    )
    }
  })


  return (
    <Containerzao>
      <ContainerBody>
        <ContainerTudo>
          
          <Footer>
            <InputNome placeholder={'Nome'} value={this.state.nomeInput} onChange={this.handleName}/>
            <InputSms placeholder={'Mensagem'} value={this.state.mensagemInput} onChange={this.handleMensagem}/>
            <Botao onClick={this.enviar}>Enviar</Botao>
          </Footer>
          <div>
          {chat}
          </div>
          
        </ContainerTudo>
      </ContainerBody>
    </Containerzao>
  );
}


}


export default App;
