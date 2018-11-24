import React ,{ Component } from "react";
import ReactDOM from "react-dom";

class block extends Component {
    constructor(props) {
      super(props);

    }
  render() {
    var mappedtags=[]
    //seperate tags for display
      var tags= this.props.photo.tags.split(' ')
      mappedtags = tags.map(function (e,i){
        return <span className='tag' key={i}> #{e} </span>
        })
    return (
      <a href={'http://flickr.com/photo.gne?id='+this.props.photo.id} target="_blank" >
    <div className="block">

      <img src={this.props.photo.url_m} className='block_image'/>
      <h3>{this.props.photo.title}</h3>
      <div>{this.props.photo.datetaken}</div>
      <div>By {this.props.photo.ownername}</div>
      <p>{mappedtags}</p>
    </div>
    </a>
  )
  }
}
export default block;
