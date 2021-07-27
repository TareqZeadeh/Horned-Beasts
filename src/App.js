import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import './App.css';
import Data from './component/assets/data.json';
import SelectedBeast from './component/SelectedBeast';



class App extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      title: 'title',
      imgURL: 'url',
      description: 'description',
      modalShow: false,



    };

  }

  modHandler = (title, imgURL, description, modalShow) => {
    this.setState({

      title: title,
      imgURL: imgURL,
      description: description,
      modalShow: modalShow,

    });


  };

  modShow = modalShow => {
    this.setState({
      modalShow: modalShow,


    })

  }


  render() {
    return (
      <>
        <Header />
        <Main data={Data} modHandler={this.modHandler}/>
        <Footer />
        <SelectedBeast title={this.state.title} imgURL={this.state.imgURL} description={this.state.description} showMod={this.state.modalShow} hidwMod={this.modShow}/>
      </>

    )
  }

}
export default App;
