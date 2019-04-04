import React, { Component } from 'react';
import './App.css';
import CatList from "./CatList";
import SearchBar from './SearchBar';
import axios from 'axios';
import {Row, Col} from 'reactstrap'

class App extends Component {
  constructor() {
    super(); //must call super in constructor

    this.state = {
      cats: [],
      animals: [],
      matchedCats : [],
      search: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  changeHandler = (e) => {
    const cats = { ...this.state }
    console.log(cats)
    cats.search = e.target.value
    this.setState(cats)
  }

  handleChange(event) {
    let userInput = event.target.value.toLowerCase()
    console.log(userInput)

    let matchedCats = this.state.animals.filter(cat => {
      return cat.name.toLowerCase().includes(userInput);
    })

    let unmatchedCats = this.state.animals.filter(cats => {
      return !cats.name.toLowerCase().includes(userInput);
    })

    this.setState(prevState => ({ userInput, matchedCats, unmatchedCats }))
  }



  addCat = () => {

  }

  //when App.js loads, it will re-render the page
  componentDidMount = () => {

    const url = "https://api.thecatapi.com/v1/breeds"
    const url2 = 'https://api.thecatapi.com/v1/images/search?breed_id='
    let config = { headers: { 'x-api-key': ' e1d030fc-a5e2-4a86-9295-9529bdff5e6f' } }

    axios.get(url, config)
      .then(data => {
        console.log("first fetch", data)
        let current_state = { ...this.state } //clone state
        current_state.cats = data.data //push api data in cats array in state



        for (let i = 0; i < data.data.length; i++) {
          console.log(data.data[i].id)
          axios.get(url2 + data.data[i].id)
            .then((response) => {
              console.log(response.data[0].url);
              //setting data to this.animal
              current_state.animals.push({ name: data.data[i].name, image: response.data[0].url })

              this.setState(current_state)

            })

        }

      })
  }

  render() {
    console.log(this.state);

    const matchedCats= this.state.matchedCats.map((cats, index) => {
      return <div key={index}>{cats.name} <img src={cats.image} /></div>
    })

    console.log(matchedCats)

    return (

      <div className="App">

        <SearchBar change={this.handleChange} submit={this.addcats} />
        <Row>
          <Col md={5}>
            {matchedCats}
          </Col>
          <Col md={7}>
            <CatList cats={this.state.cats} animals={this.state.animals} matchedcats={matchedCats} />
          </Col>
        </Row>
        
          
      </div>
  
      );
      }
  
    }
  export default App;
