import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    MDBNavbar, MDBNavbarBrand

} from "mdbreact";
import { findMovies } from '../../redux/acctions/movies';
import { getMovies } from '../../actions/services'

class IAppBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            year: [
                2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019
            ],
            selectYear: 0,
        };

        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
        

    }

    MakeOption = (X) => {
        return <option>{X}</option>
    }
    onChangeText(text) {
        this.setState({ text });
    }

    onChangeSelection(e) {
        const {
            findMovies
        } = this.props;

        this.setState({ selectYear: e.target.value });
        getMovies(e.target.value).then((response) => response.json())
        .then((responseJson) => {
            findMovies({ year: this.state.selectYear, movies: responseJson });
        });
    }


    render() {
        return (

            <MDBNavbar color="indigo" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">CAFETO MOVIES</strong>
                </MDBNavbarBrand>
                <div>
                        <select className="browser-default custom-select" onChange={this.onChangeSelection}>
                            <option>Years</option>
                            {
                                this.state.year.map(x => <option key={x}>{x}</option>)
                            }
                        </select>
                    </div>
          
            </MDBNavbar>

        );

    }
}

const mapStateToProps = state => ({
    mov: state.movies
});


const mapDispatchToProps = dispatch => {
    return {
        findMovies(obj) {
            dispatch(findMovies(obj));
        }

    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(IAppBar)
);
