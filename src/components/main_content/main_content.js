import React ,{ Component } from "react";
import ReactDOM from "react-dom";
import Block from "../blocks/block.js"

class Main_content extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }
  componentDidMount(){
    //scroll listener for infinate scrolling
    window.addEventListener("scroll", function(e){
      var d = document.documentElement;
      var offset = d.scrollTop + window.innerHeight;
      var height = d.offsetHeight;
      //console.log('offset = ' + offset,'height = ' + height);
      if(offset==height){
        this.props.pagePlus();
      }
    }.bind(this));
  }
  componentWillUnmount(){
    //remove scroll
    window.removeEventListener("scroll", function(e){
      var d = document.documentElement;
      var offset = d.scrollTop + window.innerHeight;
      var height = d.offsetHeight;
      // console.log('offset = ' + offset,'height = ' + height);
      if(offset==height){
        this.props.pagePlus();
      }
    }.bind(this));
  }
render() {
  var display_array=[]
  if(this.props.photos && this.props.photos.length>0){
    display_array=this.props.photos

  }
  return <div className="main_content">
      <ul className='main_content_list'>
      {
        display_array.length>0?
        display_array.map(function(item, i){
          return <li  className='main_content_list_item' key={'list'+i}>
            <Block photo={item} ref={i} key={'photo'+i}/>
          </li>
       }.bind(this)):null
      }
      </ul>
    </div>
}
}
export default Main_content;
