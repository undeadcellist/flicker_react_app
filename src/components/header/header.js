import React ,{ Component } from "react";
import ReactDOM from "react-dom";

class header extends Component {
    constructor(props) {
      super(props);
      this.state={tag:this.props.tag}
    }
  
  handletextchange(e){
  this.setState({tag:e.target.value});
  }
  search(){

    this.props.reset();
    this.props.search(this.state.tag);
  }
  render() {
    return (
    <header className="header">
      <div className='header_title' >Flicker</div>
        <div className="header_toolbar">
          <div className='header_button_holder'>
            <div className={'header_button'} onClick={this.search.bind(this)}>Search</div>
            <input  autofocus='true' className='header_textinput' onChange={this.handletextchange.bind(this)} value={this.state.tag} placeholder='Search tags' type='text' />
          </div>
        </div>
    </header>
  )
  }
}
export default header;
