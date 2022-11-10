import React from 'react';
import '../styles/Projects.css';
import {Card, Button} from "react-bootstrap";

import joke from "../images/joke-generator.png";
import music from "../images/music.png";
import recipe from "../images/recipe.png";

export default function Project() {
  return (
    <div className='align-wrapper'>
    <div className="wrapper">
            <div className="card">
              <Card.Link href="https://github.com/Nkwor-Jane/randomn-joke-generator" target="_blank" rel="noreferrer">
                  <Card.Img  src={joke}/>
                  <div className="info">
                    <Card.Body>
                      <Card.Title className="title">Random Joke Generator</Card.Title>
                      <Card.Text>A randomn joke generator that displays a new joke each time the button is clicked</Card.Text>
                      <div className="btns">
                        <Button>ReactJS</Button>
                        <Button>JokeAPI</Button>
                      </div>
                    </Card.Body>
                  </div>
              </Card.Link>
            </div>
            <div className="card">
              <Card.Link href="https://www.google.com" target="_blank" rel="noreferrer">
                  <Card.Img variant="top" src={music}/>
                  <div className="info">
                    <Card.Body>
                      <Card.Title className="title">CALLER TUNE GENERATOR</Card.Title>
                      <Card.Text>Generates tunes based on your mood</Card.Text>
                      <div className="btns">
                        <Button>ReactJS</Button>
                        <Button>MusicAPi</Button>
                        <Button>EmojiApi</Button>
                      </div>
                    </Card.Body>
                  </div>
              </Card.Link>
            </div>
            <div className="card">
              <Card.Link href="https://github.com/Nkwor-Jane/randomn-joke-generator" target="_blank" rel="noreferrer">
                  <Card.Img variant="top" src={recipe}/>
                  <div className='info'>
                    <Card.Body>
                      <Card.Title className="title">RECIPE PRINTER</Card.Title>
                      <Card.Text>Downloads recipes and prints on beautifully formatted paper</Card.Text>
                      <div className='btns'>
                        <Button>ReactJS</Button>
                        <Button>Bootstrap</Button>
                        <Button>RecipeAPI</Button>
                      </div>
                    </Card.Body>
                  </div>
              </Card.Link>
            </div>
    </div>
  </div>
  )
}
