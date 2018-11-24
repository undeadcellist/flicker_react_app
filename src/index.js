import React ,{ Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header.js"
import Main_content from "./components/Main_content/Main_content.js"

import './index.scss';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {photos:[],page:1,tag:'cow'};
  }
  componentDidMount(){
    //default call on page load
    this.fetchData()
  }

  fetchData(tag='cow',page=1){

    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0abf4286c234a2bcc8b4a83bc863cc7a&tags='+tag+'&per_page=20&format=json&nojsoncallback=1&extras=date_taken,description,url_m,owner_name,tags&page='+page)
    .then(response => response.json())
    .then(data => {
      console.log(data) // Prints result from `response.json()` in getRequest
      if(data.photos){
        //concat photos to current list
        var photos = this.state.photos.concat(data.photos.photo);
        this.setState({'photos':photos,preventIncrement:false,err:undefined});

      }
    })
    .catch(function(error){
      console.error(error)
      console.log('err',error,typeof error,error.toString())
      this.setState({'err':error.toString(),'loading':false})
    }.bind(this))
  }



reset(){
  this.setState({photos:[],page:0})
}
search(tag){
  this.setState({tag:tag})
  this.fetchData(tag,this.state.page)

}
pagePlus(){
  if(this.state.preventIncrement===false){
    this.setState({'page':this.state.page+1,'preventIncrement':true,'loading':true});
    this.fetchData(this.state.tag,this.state.page)
  }
}
refresh(){
  this.setState({'loading':true})
  this.fetchData(this.state.tag,this.state.page)
}

render() {
  return (<div className="wrapper">
    <Header tag={this.state.tag} reset={this.reset.bind(this)} search={this.search.bind(this)}/>
    <Main_content photos={this.state.photos} pagePlus={this.pagePlus.bind(this)}/>
    {this.state.loading?<div className='loading'></div>:null}
    {this.state.err?<div className='err' onClick={this.refresh.bind(this)}>
    Error {this.state.err}<small>click to retry.</small></div>
    :null}
    </div>)
    ;
}
}

ReactDOM.render(<App />, document.getElementById("index"));
