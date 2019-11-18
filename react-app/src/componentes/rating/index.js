import React, { Fragment } from 'react';
import {
    MDBContainer, MDBRating

} from "mdbreact";


function Page(props) {
    const {
        movieID
    } = props;

    
    return (
        <Fragment>
            <MDBContainer>
                <MDBRating iconRegular />
            </MDBContainer>
        </Fragment>
    );
}

export default Page;