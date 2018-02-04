import React, { Component } from "react";
import * as MyScriptJS from 'myscript/src/myscript'

class Lesson extends Component {

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

  render() {
    const editorStyle = {
    'minWidth': '500px',
    'minHeight': '500px',
  };
    return (
    <div>
    <h2>Lesson</h2>
    <div id="editor" style={editorStyle} ref="editor"></div>
    </div>
      );
  }
} 
 

export default Lesson;