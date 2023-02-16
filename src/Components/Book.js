import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,

} from "reactstrap" ;
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Book = ({ books, update}) => {
    // const[book, setBooks] =  useState({});
    // form handler function

    // function to call server
    const deleteBook = (id) =>{
        axios.get(`${base_url}/books/${id}`).then(
            (response) => {
                //success
                toast.success("Books deleted",{
                    position: "bottom-center",
                });
                update(id);
                // setBooks(response.data);

            },
            (error) => {
                //for error
                console.log(error);
                toast.error("something went wrong",{
                    position: "bottom-center",
                });
            }
        );
    }

    
    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="Font-weight-bold">{books.title}</CardSubtitle>
                <CardText>{ books.description }</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={() => {deleteBook(books.id);}}>Delete</Button>
                    <Button color="warning ml-4 ">Update</Button>
                </Container>
            </CardBody>
        </Card>
    );

};
export default Book;
