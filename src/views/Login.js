import React, { Component } from 'react';
import { Button, Card, CardBody, FormGroup, Form, Input, InputGroupAddon, InputGroupText,
         InputGroup, Col } from 'reactstrap';

import { unauthInstance } from '../services/api';

function emailCheck(email) {
  const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexp.test(String(email).toLowerCase());
}

class Login extends Component {
  state = { email: '', password: '' }

  handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const { email, password } = this.state
    const { history } = this.props

    var isError = emailCheck(email) && password.length >= 6
    if(isError) {
      console.log('No errors')
      
      unauthInstance.post('/login', { user: this.state })
        .then(function (response) {
          console.log('response: ', response.headers.authorization)
          history.replace('/admin/prospects')
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log('errors')
    }
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.type]: e.target.value });
  };

  render() {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form" onSubmit={this.handleSubmit}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" autoComplete="new-email" value={this.state.email} onChange={this.handleInputChange} />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" autoComplete="new-password" value={this.state.password} onChange={this.handleInputChange} />
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit">
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default Login;
