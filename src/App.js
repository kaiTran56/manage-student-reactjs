
import React, { Component } from 'react';
import "./App.css";
import * as typeTitle from "../src/constants/TitleConstants";
import AddingStudent from './components/adding-student/AddingStudent';
import DisplayStudent from './components/display-student/DisplayStudent';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: typeTitle.MAIN_TITLE,
      tranferTemplate: true,
    }
  }

  onAddClick = () => {
    this.setState({
      title: typeTitle.ADD_TITLE,
      tranferTemplate: true
    })
  }

  onDisplayClick = () => {
    this.setState({
      title: typeTitle.DISPLAY_TITLE,
      tranferTemplate: false
    })
  }

  onExitClick = () => {
    this.setState({
      title: typeTitle.MAIN_TITLE
    })
  }



  render() {

    let { title, tranferTemplate } = this.state;

    return (

      <div>

        <div className="sidenav">
          <a className="navbar-brand" onClick={this.onExitClick}></a>
          <hr />
          <a className="btn  text-center " onClick={this.onAddClick}>Add</a>
          <hr />
          <a className="btn  text-center" onClick={this.onDisplayClick}>Display</a>
          <hr />
          <a className="btn  text-center" onClick={this.onExitClick}>Exit</a>
          <hr />
        </div>

        <div className="topnav row">
          <div className="col-5">
          </div>
          <div className="col-7">
            <a>{title}</a>
          </div>
        </div>

        <div className="main">
        {tranferTemplate ? <AddingStudent></AddingStudent>: <DisplayStudent/>}
          
        </div>
      </div>

    );
  }
}
