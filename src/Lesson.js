import React, { Component } from "react";
import * as MyScriptJS from 'myscript/src/myscript';
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "./data";

const WritingPad = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CharacterContainer = styled.div`
  display: flex;
  min-width: 500px;
  justify-content: center;
`;

class Lesson extends Component {
  state = {
    currentLevel: 0
  }

  componentWillMount() {
    
    const lessonNum = this.props.location.pathname.slice(-1);
    const lessonData = data[lessonNum - 1];
    console.log(lessonData, "<<<DATA")
    this.setState({
      lessonNum,
      lessonData
    })

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

    editorElement.addEventListener('exported', function (evt) {
      var exports = evt.detail.exports;
      console.log("EXPORTS>>>", exports)
      if (exports && exports['text/plain']) {
        this.exportedIsAnswer(exports);
      } else {
        // resultElement.innerHTML = '';
      }
    });

  }

  handleClick = event => {
    this.setState(state => ({
      currentLevel: state.currentLevel++
    }))
  }

  exportedIsAnswer = exports => {
    const chars = exports['text/plain'];
    const { lessonData } = this.state;
    if (lessonData.chi === chars) {
      console.log("MATCH!!")
    }
  }

  render() {

    const editorStyle = {
      'minWidth': '500px',
      'minHeight': '400px',
      'border': '1px solid #000',
      'maxWidth': '100%'
    };

    const {lessonNum, lessonData, currentLevel} = this.state;

    return (
    <div>
    <Link to="/lessons" style={{float: "left"}}>Back</Link>
    <h2>Lesson {lessonNum} - {lessonData.title}</h2>
    <CharacterContainer>
      <div>
        <h3>
        <span styled={{padding: "1em"}}>{lessonData.levels[currentLevel].chi}</span>
        <span>{lessonData.levels[currentLevel].eng}</span>
        </h3>
      </div>
      <div>
        {lessonData.levels[currentLevel].gif.map(char => {
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