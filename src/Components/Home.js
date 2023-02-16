import React,{useEffect} from "react";
// import {Jumbotron} from "reactstrap";

const Home = () => {
    useEffect(() => {
        document.title = "Library"

    }, []);
    return (
        <div>

            <h1>ChatGpt</h1>
            <p>It is an ai-bot which understand the meaning of the sentences</p>
        </div>
     );
 }
export default Home;