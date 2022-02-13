import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { api } from '../../Api';

function FormCadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setconfirmSenha] = useState('');
  const [cpf, setCpf] = useState('');

  const postUser = () => {
    api
      .post('/users', 
        {
          nome,
          cpf,
          email,
          senha,
          confirmSenha
        }
      )  
      .then((res) => alert(res.data.msg))
      .catch((error) => alert(error.response.data.msg))
  }



  return (
    <div style={{display: 'flex', justifyContent:'center', marginTop:'40px'}} >
      <Form style={{width:'50%'}} >
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Nome</Form.Label>
            <Form.Control type='Nome' placeholder="Digite seu nome" onChange={(e)=>{setNome(e.target.value)}} />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="Email" placeholder="Digite seu e-mail" onChange={(e)=>{setEmail(e.target.value)}}/>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Senha</Form.Label>
            <Form.Control  type="password" placeholder="Digite uma senha" onChange={(e)=>{setSenha(e.target.value)}} />
          </Form.Group>
        <Form.Group as={Col}>
            <Form.Label>Repita a senha</Form.Label>
            <Form.Control  type="password" placeholder="Digite a mesma senha" onChange={(e)=>{setconfirmSenha(e.target.value)}} />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>CPF</Form.Label>
            <Form.Control type="CPF" placeholder="Digite seu CPF" onChange={(e)=>{setCpf(e.target.value)}} />
          </Form.Group>
            <Button as={Col} style={{height:'50%', alignSelf:'end' }} variant="primary" type="button" onClick={postUser} >Submit</Button>  
        </Row>
      </Form>
    </div>
  )
}

export default FormCadastro