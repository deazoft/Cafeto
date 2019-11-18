import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol , MDBCard,MDBCardBody,MDBCardTitle,MDBCardText} from 'mdbreact';
import Comments from './comments';
import { getComments } from '../actions/services';
import Rating from './rating';

class movieSelected extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movie:this.props.location.state.movie,
            comments:{}
        }
       getComments(this.state.movie.id,this.props.user.id)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({comments: responseJson});
        })
        
    }



    onChange = () => {
        
    }

    addComment = () => {
        getComments(this.state.movie.id,this.props.user.id)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({comments: responseJson});
        })
    }



    render() {
        return (
            <Fragment>
                <MDBContainer>
                    <MDBRow md="12">
                            <MDBCol  key={this.state.movie.id}>
                                <MDBCard >
                                    <MDBCardBody>
                                        <MDBCardTitle>{this.state.movie.original_title}</MDBCardTitle>
                                        <MDBCardText>
                                            {this.state.movie.overview}
                                        </MDBCardText>
                                        <Rating movieID={this.state.movie.id}/>
                                        <Comments movieId={this.state.movie.id} UserId={this.props.user.id} Comments={this.state.comments} addComment= {this.addComment}/>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                      
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

export default connect(mapStateToProps, mapDispatchToProps)(movieSelected);