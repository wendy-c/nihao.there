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
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  border: 1px solid black;
  z-index: 50;
  min-width: 50%;
  min-height: 50%;
  background-color: #000;
  border: 1pv solid #efefef;
  font-size: 2em;
`;

class Lesson extends Component {
  state = {
    currentLevel: 0,
    showOverlay: false
  };

  componentWillMount() {
    const lessonNum = this.props.location.pathname.slice(-1);
    const lessonData = data[lessonNum - 1];
    console.log(lessonData, "<<<DATA");
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
    this.setState(state => ({
      currentLevel: ++state.currentLevel,
      showOverlay: false
    }));
  };

  exportedIsAnswer = exports => {
    const chars = exports["text/plain"];
    const { lessonData, lessonNum, currentLevel } = this.state;

    if (lessonData.levels[currentLevel].chi === chars) {
      console.log("MATCH!!");
      this.setState({ showOverlay: true });
    }
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
      <div style={{position: "relative"}}>
        <Link to="/lessons" style={{ float: "left" }}>
          Back
        </Link>
        <h2>
          Lesson {lessonNum} - {lessonData.title}
        </h2>
        <CharacterContainer>
          <div style={{ padding: "0 5em" }}>
            <h1>{lessonData.levels[currentLevel].chi}</h1>
            <h1>{lessonData.levels[currentLevel].eng}</h1>
          </div>
          <div>
            {lessonData.levels[currentLevel].gif.map(char => {
              return (
                <img src={char} style={{ width: "50px", height: "50px" }} />
              );
            })}
          </div>
        </CharacterContainer>
        <WritingPad>
        <i className="fas fa-undo"></i>
          <div id="editor" style={editorStyle} ref="editor" />
        </WritingPad>
        {showOverlay && (
          <Overlay>
            <div>check mark here</div>
              <div onClick={this.handleClick}>Next</div>
          </Overlay>
        )}
      </div>
    );
  }
}

export default Lesson;