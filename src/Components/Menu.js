import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
const Menus = () => {
    return(
        <ListGroup>
            <ListGroupItem classname="list-group-item list-group-item-action" tag ="a" href="/" action>Home</ListGroupItem>
            <ListGroupItem classname="list-group-item list-group-item-action" tag ="a" href="/add-book" action>Add Book</ListGroupItem>
            <ListGroupItem classname="list-group-item list-group-item-action" tag ="a" href="/library" action>Library</ListGroupItem>
            <ListGroupItem classname="list-group-item list-group-item-action" tag ="a" href="#!" action>About</ListGroupItem>
            <ListGroupItem classname="list-group-item list-group-item-action" tag ="a" href="#!" action>Contact us</ListGroupItem>
        </ListGroup>
    );
    };
export default Menus;