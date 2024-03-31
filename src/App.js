import image1 from './jarvis.jpeg'
import image2 from './jarvis2.webp'
import './App.css';
import {Form, Button, Container, Row, Navbar, Nav, NavDropdown, Col, Image} from 'react-bootstrap'
import { useState } from 'react';


function Login() {
  const [email, setEmail] = useState ('')
  const [pass, setPass] = useState ('')
  const press = () => {
console.log ('pressed Log in:', 'Email:', email,'Password:', pass)
  }


  return <Form>
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" value = {email} onChange = {(e) => setEmail (e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" value = {pass} onChange = {(e) => setPass (e.target.value)} />
    </Form.Group>
    <Button variant="primary" className='mt-5' onClick={() => press()} >Log in</Button>{' '}
  </Form>

}


function App() {
  // Variable "setPrompt" state at beginning empty  
  //<img src={image2} fluid />
   const [prompt, setPrompt] = useState ('')
   const [finalppt, setFinalppt] = useState ('')
   const [nm, setNm] = useState (0)

   const processButton = () => {
    setFinalppt (prompt)
    setPrompt ('')
   }


  return (
    <div>
       
    <Container>
      
      <Row className='mt-5'>
        <Col>
        <h1>
        Hello, I am J.A.R.V.I.S,
        </h1> 
        <h1>
        your personal AI-Powered Assistant.
        </h1>
        
        
        </Col>
        <Col className='align-items-right'>
      <img style ={{ width: 500, height: 240 }} src={image1} className='rounded float-end'/> 
        </Col>
      </Row>
<Row className='mt-5'>
<Login />

</Row>
    <Row className='mt-5'>   
<h1>Good Day, Sir!</h1>
  <p>
    {finalppt}
  </p>
  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>How may I assist you today</Form.Label>
        <Form.Control  as="textarea" rows={3} value = {prompt} onChange = {(e) => setPrompt (e.target.value)} />
      </Form.Group> 
    </Form>
    <Button variant="primary" onClick = {() => processButton()} className='mt-5' >Send</Button>{' '}
    </Row>
    
    </Container> 

    </div>
  );
}

export default App;
