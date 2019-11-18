import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

/* MODULES */
import { addUser } from "../redux/acctions/user";
import { getLogin } from '../actions/services';

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';


class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            error: false,
            loading: false,
            redirect: false,
            errorMessage: ''
        }
    }

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        if (this.state.redirect && this.state.user.id) { this.props.setUser(this.state.user); }

    }


    submit = e => {

        e.preventDefault();
        this.setState({ loading: true });

        getLogin(e.target.elements.email.value)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson && responseJson.length === 1 && responseJson[0].id) {
                    this.setState({
                        user: responseJson[0]
                    });
                    this.setState({ redirect: true });

                }
                else {
                    this.setState({ errorMessage: 'User not found' });
                }
            })
            .catch((error) => { this.setState({ error: true }); })

        this.setState({ loading: false });
    }

    render = () => {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        {/* REDIRECT */}
                        {this.state.redirect ? (<Redirect to="/movies" />) : null}
                        

                        <div
                            className="text-center bg-danger rounded-lg mb-3 p-2"
                            style={this.state.errorMessage ? {} : { display: 'none' }}>
                            <span className="text-white">
                                {this.state.errorMessage}
                            </span>
                        </div>

                        <form autoComplete="on" onSubmit={this.submit}>
                            <p className="h5 text-center mb-4">Sign in</p>
                            <div className="grey-text">
                                <MDBInput
                                    label="Type your email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                    name="email"
                                    onChange={this.change}
                                />

                            </div>
                            <div className="text-center">
                                <MDBBtn type="submit">Login</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>)
    }
}



const mapDispatchToProps = dispatch => {
    return {
        setUser(user) {
            dispatch(addUser(user));
        }

    }
}

export default connect(null, mapDispatchToProps)(Form);
