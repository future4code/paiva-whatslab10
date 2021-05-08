import styled from "styled-components";
import React from "react";

const ContainerBody = styled.div `
  box-sizing: border-box;
  display: flex;
  justify-content: center
`

const ContainerTudo = styled.div `
  box-sizing: border-box;
  display: flex;
  flex-direction: column-reverse;
  width: 40vw;
  height: 100vh;
  border: 1px solid;
  background: pink;

`
const InputNome = styled.input`
  border: none;
  border-radius: 10px;
  height: 20px;
  width: 100px; 

`
const InputSms = styled.input `
  border: none;
  border-radius: 10px;
  height: 20px;
  width: 300px; 

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
  
  mensagemNoChat: [],
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
    return (
      <div>
        <div> {valor.nome} </div>
        <div> {valor.mensagem} </div>
      </div>  
    )
  })


  return (
    <ContainerBody>
      <ContainerTudo>
        <Footer>

          <InputNome placeholder={'Nome'} value={this.state.nomeInput} onChange={this.handleName}/>
          <InputSms placeholder={'Mensagem'} value={this.state.mensagemInput} onChange={this.handleMensagem}/>
          <Botao onClick={this.enviar}>Enviar</Botao>
        </Footer>
        <div>{chat}</div>

      </ContainerTudo>
    </ContainerBody>
  );
}


}


export default App;
