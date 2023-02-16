import React, { Fragment, useState, useEffect} from "react";
import { Container, Form, FormGroup, Input,Button } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import { Country, State, City }  from 'country-state-city';
const AddBook = () => {


    useEffect(() => {
            document.title = "All Books"

    }, []);  

    let Country = require('country-state-city').Country;
    let State = require('country-state-city').State;

    const countries = Country.getAllCountries();
    console.log(countries);
   
    const states = State.getAllStates();
    console.log(states);
  
    const cities = City.getAllCities();
    console.log(cities);

    
    const [ country, setCountry] = useState([]);
    const [ state, setState] = useState([]);
    const [ city, setCity] = useState([]);

  useEffect(()=>{
    setCountry(countries);
  },[])



  const handleCountry = (id) => {
    console.log(id);
    const dt = states.filter(x => x.countryCode === id);
    setState(dt);
  }

  // const handleState = (id) => {
  //   const dt = cities.filter(x => x.countryCode === countryCode && x.stateCode === stateCode);
  //   setCity(dt);
  // }

    const handleState = (id) => {
    console.log(id);
    const dt = cities.filter(x => x.stateCode === id);
    setCity(dt);
  }

    const[book, setBooks] =  useState({});
    // form handler function
    const handleForm = (e) => {
        console.log(book);
        postBooktoServer(book);
        e.preventDefault();
    }
    // function to call server
    const postBooktoServer=() =>{
        axios.get(`${base_url}/books`).then(
            (response) => {
                //success
                toast.success("books have been added successfully",{
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


    return (
        <Fragment>
            <h1 classname="text-center my-3"> Fill Book Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="bookId">BookId</label>
                    <Input type="text" placeholder="Enter here" name="bookId" id="bookId"
                        onChange={(e) => {
                            setBooks({...book,id:e.target.value});
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="title">Book Title</label>
                    <Input type="text" placeholder="Enter title here" id="title"
                        onChange={(e) => {
                            setBooks({...book,title:e.target.value});
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="description">Book Description</label>
                    <Input type="textarea" placeholder="Enter description here" id="description"
                        onChange={(e) => {
                            setBooks({...book,description:e.target.value});
                        }}
                    />
                </FormGroup>
                <FormGroup>
                <label for="country">Country</label>
                <select id="ddlCountry" className='form-control select-class' onChange={(e) => handleCountry(e.target.value)}>
                    <option value="0">Select Country</option>
                    {
                        country && 
                        country !== undefined ?
                        country.map((ctr,index) => {
                            return(
                                <option key={index} value={ctr.isoCode}>{ctr.name}</option>
                            )
                        })
                        :"No Country"

                    }
                </select>
                <br></br>
                <label for="state">State</label>
                <select id="ddlStates" className='form-control select-class' onChange={(e) => handleState(e.target.value)}>
                    <option value="0">Select State</option>
                    {
                        state && 
                        state !== undefined ?
                        state.map((ctr,index) => {
                            return(
                                <option key={index} value={ctr.isoCode}>{ctr.name}</option>
                            )
                        })
                        :"No State"

                    }
                </select>
                <br></br>
                <label for="city">City</label>
                <select id="ddlCity" className='form-control select-class'>
                    <option value="0">Select City</option>
                    {
                        city && 
                        city !== undefined ?
                        city.map((ctr,index) => {
                            return(
                                <option key={index} value={ctr.isoCode}>{ctr.name}</option>
                            )
                        })
                        :"No City"

                    }
                </select>
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Book</Button>
                    <Button type="reset" color="warning ml-2">Clear</Button>
                </Container>
            </Form>

        </Fragment>

    );
};
export default AddBook;