import React, { Fragment } from 'react';
import {
    MDBInput, MDBBtn, MDBContainer, MDBListGroup, MDBListGroupItem

} from "mdbreact";
import { setComments } from '../../actions/services';



function Page(props) {



    const {
        movieId,
        UserId,
        Comments,
        addComment
    } = props;

    
    const submit = (e) => {
        e.preventDefault();
        if (e.target.comment.value && e.target.comment.value.length > 1){
            setComments(movieId, UserId, e.target.comment.value)
            addComment();
        }
    }

    return (
        <Fragment>
            <MDBContainer>
                <form autoComplete="on" onSubmit={submit}>


                    <MDBInput
                        label="New Comment"
                        icon="envelope"
                        group
                        name="comment"
                    />
                    <MDBBtn type="submit">Send</MDBBtn>

                </form>

                <MDBListGroup style={{ width: "22rem" }}>
                    {JSON.stringify(Comments) !== "{}" ? Comments.map(com => <MDBListGroupItem key={com.id}>
                        <div className="d-flex w-100 justify-content-between">
                            <small>{com.createdAt}</small>
                        </div>
                        <p className="mb-1">{com.comment}</p>
                    </MDBListGroupItem>) : ''}

                </MDBListGroup>
            </MDBContainer>

        </Fragment>
    );
}

export default Page;