import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { useState} from 'react'
import { api } from '../../Api';
import { Link } from 'react-router-dom';

function FormLogin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const getAcess = () => {
    api
      .post("/users/login", {
        email,
        senha
      })
      .then((response) => alert(response.data.msg))
      .catch((error) => alert(error.response.data.msg)) 
  }
  
  return (
    <>
      <div style={{display:'flex', justifyContent:'center', margin:'30px'}}>
        <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
            <Form.Text className="text-muted">
              Nunca compatilharemos seu e-mail com ninguém.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
             <Form.Control type="password" placeholder="Password" onChange={(e)=>{setSenha(e.target.value)}} /> 
          </Form.Group>
           <Button style={{marginRight:'5px'}} variant="primary" type="button" onClick={getAcess}> 
            Entrar
          </Button>
          ou...
          <Link to='/cadastro'>
            <Button style={{marginLeft:'5px'}} variant="primary" type="button">
              Cadastrar aqui
            </Button>
          </Link>
        </Form>
      </div>
    </>
  )
}

export default FormLogin