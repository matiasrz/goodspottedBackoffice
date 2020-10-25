import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardBody, FormGroup, Form, Input, InputGroupAddon, InputGroupText,
         InputGroup, Col } from 'reactstrap';

import { emailCheck } from 'helpers/form'
import { redirectIfLoggedIn } from 'helpers/authentication'
import { authenticate } from 'store/actions/authentication'

class Login extends Component {
  constructor(props) {
    super(props);
    redirectIfLoggedIn(props);

    this.state = { email: '', password: '' }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  shouldComponentUpdate(nextProps) {
    return redirectIfLoggedIn(nextProps);
  }

  handleSubmit(e) {
    e.stopPropagation();
    e.preventDefault();
    const { email, password } = this.state

    var isError = emailCheck(email) && password.length >= 6
    if(isError) {
      this.props.authenticate(this.state)
    } else {
      console.log('errors')
    }
  }

  handleInputChange(e) {
    this.setState({ [e.target.type]: e.target.value });
  }

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

const mapStateToProps = state => ({
  auth: state.authentication
});

const mapDispatchToProps = dispatch => ({
  authenticate: (userData) => dispatch(authenticate(userData))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
