import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import str from './string'

const marked = window.marked;


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: str
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({
      input: e.target.value
    });
  }
  render(){
    const markdown = marked(this.state.input, { gfm: true, breaks: true });
    
    return(
      <div className="container">
        <h1 className="border rounded p-3 bg-dark text-light text-center mb-3">Markdown Previewer</h1>
        <div className="row">
          <div className="col-6">
            <h4>Editor</h4>
            <textarea type="textarea" 
              id="editor"
              onChange={this.handleChange} 
              className="form-control"
              value={this.state.input}
              rows="37"
              />
          </div>
          
          <div className="col-6">
            <h4>Preview</h4>
            <div id="preview"
              className="border rounded p-3 preview" 
              dangerouslySetInnerHTML={{__html: markdown}} />
            </div>
        </div>

      </div>
    );
  }
}

export default App;
