import React, { Component } from "react";
import * as MyScriptJS from 'myscript/src/myscript';
import { Link } from "react-router-dom";
import styled from "styled-components";

const WritingPad = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CharacterContainer = styled.div`
  display: flex;
  min-width: 500px;

`;

const data = [{  
  lesson: 0,
  title: "Animals",
  levels: [{
      eng: "Alpaca",
      chi: "草泥馬",
      gif: [
        "http://bishun.strokeorder.info/characters/455589.gif", 
        "http://bishun.strokeorder.info/characters/275165.gif",
        "https://upload.wikimedia.org/wikipedia/commons/3/3a/%E9%A6%AC-order.gif"
        ],
      audio: []
    }, {
      eng: "Chicken",
      chi: "草泥馬",
      gif: [
        "http://bishun.strokeorder.info/characters/455589.gif", 
        "http://bishun.strokeorder.info/characters/275165.gif",
        "https://upload.wikimedia.org/wikipedia/commons/3/3a/%E9%A6%AC-order.gif"
        ],
      audio: []
    }, {
      eng: "Cow",
      chi: "草泥馬",
      gif: [
        "http://bishun.strokeorder.info/characters/455589.gif", 
        "http://bishun.strokeorder.info/characters/275165.gif",
        "https://upload.wikimedia.org/wikipedia/commons/3/3a/%E9%A6%AC-order.gif"
        ],
      audio: []
    }, {
      eng: "Pig",
      chi: "草泥馬",
      gif: [
        "http://bishun.strokeorder.info/characters/455589.gif", 
        "http://bishun.strokeorder.info/characters/275165.gif",
        "https://upload.wikimedia.org/wikipedia/commons/3/3a/%E9%A6%AC-order.gif"
        ],
      audio: []
    }, {
      'Rabbit': {
        chi: "",
        gif: [],
        audio: []
      }
    }]
}];

class Lesson extends Component {
  state = {
    currentLevel: 0
  }

  componentDidMount() {

    var editorElement = document.getElementById('editor');

    MyScriptJS.register(this.refs.editor, {
      recognitionParams: {
        type: 'TEXT',
        v4: {
          lang: "zh_HK",
          text: {
            guides: {
              enable: false
            }
          }
        },
        server: {
          applicationKey: 'e4356f44-42bf-4eaf-97c5-504e8d0e722c',
          hmacKey: 'd3c3fb0e-ee79-434b-9611-ac223a23265b'
        }
      }
    }, undefined, {
      '.text': {
        'font-size': 50
      }
    });

  }

  handleClick = event => {
    this.setState(state => ({
      currentLevel: state.currentLevel++
    }))
  }

  render() {

    const editorStyle = {
      'minWidth': '500px',
      'minHeight': '400px',
      'border': '1px solid #000',
      'maxWidth': '100%'
    };

    const lessonNum = this.props.location.pathname.slice(-1);
    const lesson = data[lessonNum - 1];
    const {currentLevel} = this.state;

    return (
    <div>
    <Link to="/lessons" style={{float: "left"}}>Back</Link>
    <h2>Lesson {lessonNum} - {lesson.title}</h2>
    <CharacterContainer>
      <div>
        <span styled={{padding: "1em"}}>{lesson.levels[currentLevel].chi}</span>
        <span>{lesson.levels[currentLevel].eng}</span>
      </div>
      <div>
        {lesson.levels[currentLevel].gif.map(char => {
          return <img src={char} style={{width: "50px", height: "50px"}}/>
        })}
      </div>
    </CharacterContainer>
    <WritingPad>
      <div id="editor" style={editorStyle} ref="editor"></div>
    </WritingPad>
    <div>
      this is overlay
      <div onClick={this.handleClick}>Next</div>
    </div>
    </div>
      );
  }
} 
 

export default Lesson;