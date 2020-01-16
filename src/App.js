import React, { Component } from 'react';
import Header from './component/template/Header';
import Content from './component/template/Content';
import Footer from './component/template/Footer';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header className="header"/>
        <Content className="content" />
        <Footer className="footer" />
      </div>
    );
  }
}
export default App;
