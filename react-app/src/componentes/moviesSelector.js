import React, { Component, Fragment } from 'react';
import {    Link  } from "react-router-dom";
import { connect } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol , MDBCard,MDBCardBody,MDBCardTitle,MDBCardText} from 'mdbreact';
import AppBar from './appBar';
//import Comments from './comments';
//import Rating from './rating';

class movieSelector extends Component {
    

    componentDidMount = () => {

    }

    onChange = () => {
        
    }



    render() {
        return (
            <Fragment>
                <AppBar />
                <MDBContainer>
                    <MDBRow>
                        { (this.props.movies.movies && this.props.movies.movies.results) ? this.props.movies.movies.results.map(movie =>
                            <MDBCol md="4" key={movie.id}>
                                <MDBCard  style={{ width: "20rem" ,  height: "320px"}}>
                                    <MDBCardBody>
                                        <MDBCardTitle>{movie.original_title}</MDBCardTitle>
                                        <MDBCardText>
                                            {movie.overview.length >= 50 ? movie.overview.substring(0,50) + '...' : 
                                            movie.overview}
                                        </MDBCardText>
                                       
                                        <Link to={{ pathname: '/movie/'+movie.id, state: { movie: movie, user:this.props.user} }}
                                         >More</Link>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        ) :
                            <MDBCol md="12">
                                Please select a year
                        </MDBCol>
                        }
                    </MDBRow>
                </MDBContainer>
            </Fragment>
        );
    }
}





/* DISPATCH-REDUX */
const mapDispatchToProps = dispatch => {
    return {

    }
}

const mapStateToProps = state => ({
    movies: state.movies,
    user : state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(movieSelector);