import React, { Component } from "react";
import * as MyScriptJS from "myscript/src/myscript";
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
  align-items: center;
  padding-bottom: 3rem;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 15%;
  left: 35%;
  right: 35%;
  bottom: 15%;
  border: 1px solid black;
  z-index: 50;
  min-width: 9em;
  min-height: 50%;
  background-color: #efefef;
  border: 1pv solid #efefef;
  font-size: 3em;
`;

const Container = styled.div`
  margin: 1rem 2rem;
  position: "relative";
  font-size: 1.3em;
`;

const Button = styled.span`
  display: block;
  background-color: #2020e4;
  opacity: 0.65;
  border-radius: 5px;
  font-size: 2em;
  padding: 0.5rem;
  margin: 1rem;
  z-index: 10;
  a {
    text-decoration: none;
    color: #fff;
  }
`;

class Lesson extends Component {
  state = {
    currentLevel: 0,
    showOverlay: false
  };

  componentWillMount() {
    const lessonNum = this.props.location.pathname.slice(-1);
    const lessonData = data[lessonNum - 1];

    this.setState({
      lessonNum,
      lessonData
    });
  }

  componentDidMount() {
    var editorElement = document.getElementById("editor");
    const exportedIsAnswer = this.exportedIsAnswer;

    MyScriptJS.register(
      this.refs.editor,
      {
        recognitionParams: {
          type: "TEXT",
          v4: {
            lang: "zh_HK",
            text: {
              guides: {
                enable: false
              }
            }
          },
          server: {
            applicationKey: "e4356f44-42bf-4eaf-97c5-504e8d0e722c",
            hmacKey: "d3c3fb0e-ee79-434b-9611-ac223a23265b"
          }
        }
      },
      undefined,
      {
        ".text": {
          "font-size": 50
        }
      }
    );

    editorElement.addEventListener("exported", function(evt) {
      var exports = evt.detail.exports;

      if (exports && exports["text/plain"]) {
        exportedIsAnswer(exports);
      }
    });


  }

  handleClick = event => {
    
    // go to next level
    this.setState(state => ({
      currentLevel: ++state.currentLevel,
      showOverlay: false
    }));

    // clear canvas
    var editorElement = document.getElementById("editor");
    editorElement.editor.clear();
  };

  exportedIsAnswer = exports => {
    const chars = exports["text/plain"];
    const { lessonData, lessonNum, currentLevel } = this.state;

    if (lessonData.levels[currentLevel].chi === chars) {
      console.log("MATCH!!");
      this.setState({ showOverlay: true });
    }
  };

  handleUndo = event => {
    var editorElement = document.getElementById("editor");
    editorElement.editor.undo();
  };

  handleRedo = event => {
    var editorElement = document.getElementById("editor");
    editorElement.editor.redo();
  };

  render() {
    const editorStyle = {
      minWidth: "500px",
      minHeight: "400px",
      border: "1px solid #000",
      maxWidth: "100%"
    };

    const { lessonNum, lessonData, currentLevel, showOverlay } = this.state;

    return (
      <Container>
        <Link to="/lessons">
          <i
            className="far fa-hand-point-left"
            style={{ height: "1rem", paddingRight: "0.5rem" }}
          />
          Back to Lessons
        </Link>
        <h2>
          Lesson {lessonNum} - {lessonData.title}
        </h2>
        <CharacterContainer>
          <div style={{ paddingRight: "2em" }}>
            <div style={{fontSize: "1.5em"}}>{lessonData.levels[currentLevel].chi}</div>
            <div style={{fontSize: "1.5em"}}>{lessonData.levels[currentLevel].eng}</div>
          </div>
          <div style={{ paddingLeft: "2em" }}>
            {lessonData.levels[currentLevel].gif.map(char => {
              return (
                <img src={char} style={{ width: "50px", height: "50px" }} />
              );
            })}
          </div>
        </CharacterContainer>
        <FlexRow>
          <FlexColumn
            style={{ paddingRight: "12rem" }}
            onClick={this.handleUndo}
          >
            <i className="fas fa-undo" />
            <span style={{ fontSize: "0.6em" }}>Undo</span>
          </FlexColumn>
          <FlexColumn style={{ paddingLeft: "12rem" }} onClick={this.handleRedo}>
            <i className="fas fa-redo" />
            <span style={{ fontSize: "0.6em" }}>Redo</span>
          </FlexColumn>
        </FlexRow>
        <WritingPad>
          <div id="editor" style={editorStyle} ref="editor" />
        </WritingPad>
        {showOverlay && (
          <Overlay>
            <i class="far fa-check-circle" />
            <Button onClick={this.handleClick}>Next</Button>
          </Overlay>
        )}
      </Container>
    );
  }
}

export default Lesson;