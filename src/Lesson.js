import React, { Component } from "react";
import * as MyScriptJS from "myscript/src/myscript";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import data from "./data";
import { withRouter } from "react-router";

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
  top: 1rem;
  left: 8rem;
  right: 8rem;
  bottom: 1rem;
  border: 1px solid black;
  z-index: 50;
  min-width: 9em;
  max-height: 28rem;
  background-color: #f5f5f5;
  border: 1pv solid #efefef;
  font-size: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
`;

const Container = styled.div`
  margin: 1rem 2rem;
  position: "relative";
  font-size: 1.3em;
`;

const Button = styled.span`
  background-color: #5858e8;
  border-radius: 5px;
  font-size: 0.5em;
  padding: 0.2rem 1rem;
  margin: 1rem;
  z-index: 10;
  a {
    text-decoration: none;
    color: #fff;
  }
`;

const PlayContainer = styled.div`
  font-size: 0.6em;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-direction: column;
  padding-right: 1rem;
`;

class Lesson extends Component {
  state = {
    currentLevel: 0,
    showOverlay: false
  };

  componentWillMount() {
    const lessonNum = this.props.location.pathname.slice(-1);
    const lessonData = data[lessonNum - 1];
    
    if (!lessonData) {
      console.log("HISTORY", this.props.history)
      this.props.history.push("/notfound");
    }

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
    const currentLevel = this.state.currentLevel + 1;
    
    // go to next level
    this.setState({
      currentLevel,
      showOverlay: false
    });

    // clear canvas
    var editorElement = document.getElementById("editor");
    editorElement.editor.clear();
  };

  exportedIsAnswer = exports => {
    const chars = exports["text/plain"];
    const { lessonData, lessonNum, currentLevel } = this.state;

    if (lessonData.levels[currentLevel].chi === chars) {
      
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

  playAudio = event => {
    event.target.firstChild.play();
  };

  render() {

    const { lessonNum, lessonData, currentLevel, showOverlay, redirect } = this.state;
    const canto = lessonData.levels[currentLevel].audio ? lessonData.levels[currentLevel].audio[0] : null;
    const man = lessonData.levels[currentLevel].audio ? lessonData.levels[currentLevel].audio[1] : null;
    const editorStyle = {
      minWidth: "500px",
      minHeight: "400px",
      border: "1px solid #000",
      maxWidth: "100%"
    };

    
    return (
      <div style={{position: "relative"}}>
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
            <div style={{ fontSize: "1.5em" }}>
              {lessonData.levels[currentLevel].chi}
            </div>
            <div style={{ fontSize: "1.5em" }}>
              {lessonData.levels[currentLevel].eng}
            </div>
          </div>
          <div style={{ paddingLeft: "2em", display: "flex" }}>
            <PlayContainer>
              <div>
                <span>Cantonese</span>
                <i
                  className="fas fa-play-circle"
                  style={{ fontSize: "1.5em" }}
                  onClick={this.playAudio}
                >
                  <audio src={canto} />
                </i>
              </div>
              <div>
                <span>Mandarin</span>
                <i
                  className="fas fa-play-circle"
                  style={{ fontSize: "1.5em" }}
                  onClick={this.playAudio}
                >
                  <audio
                    src={man}
                    onClick={this.playAudio}
                  />
                </i>
              </div>
            </PlayContainer>
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
          <FlexColumn
            style={{ paddingLeft: "12rem" }}
            onClick={this.handleRedo}
          >
            <i className="fas fa-redo" />
            <span style={{ fontSize: "0.6em" }}>Redo</span>
          </FlexColumn>
        </FlexRow>
        <WritingPad>
          <div id="editor" style={editorStyle} ref="editor" />
        </WritingPad>
        {showOverlay && (
          <Overlay>
            <i className="far fa-check-circle" style={{color: "#ef5f4f", fontSize: "2em"}}/>
            <span style={{color: "#ef5f4f", fontSize: "0.7em"}}>You got it!</span>
            <Button onClick={this.handleClick} style={{color: "#fff"}}>Next</Button>
          </Overlay>
        )}
      </Container>
      </div>
    );
  }
}

export default withRouter(Lesson);