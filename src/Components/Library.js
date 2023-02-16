import React, {useState, useEffect} from "react";
import Book from "./Book";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const Library = () => {
        useEffect(() => {
            document.title = "Library"

        }, []);

    // function to call server
    const getAllBooksFromServer=() =>{
        axios.get(`${base_url}/books`).then(
            (response) => {
                //success
                toast.success("books have been loaded",{
                    position: "bottom-center",
                }); 
                setBooks(response.data);

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

    useEffect(() => {
        getAllBooksFromServer();
    })
    
    const [books, setBooks] = useState([]);

    const updateLibrary = (id) => {
        setBooks(books.filter((c) => c.id !== id));
    }

    return (
        <div>
            <h1>Library</h1>
            <p>Available Books
            {books.length>0 ? books.map((item) => <Book key ={item.id} book={item} update ={updateLibrary}/>):"No Books"}
            </p>
        </div>
    );
};
export default Library;