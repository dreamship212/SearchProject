import React, { Component } from 'react'
import  './searchbar.css'

class SearchBar extends Component {

    state={
       search:''
    }
    inputChange=event =>{
      this.setState({
        search:event.target.value
      });
    }
    searchImage=()=>{
        console.log("başarılı")
        this.props.onSearchImage(this.state.search)
    }


    render(){
        return (
            <div className="search-bar-container ui input">
                <input type="text" onKeyPress={(e)=>{
                    if(e.key === 'Enter'){
                       this.searchImage();
                    }
                }} onChange={this.inputChange.bind(this)} placeholder="Search..."></input>
                <button className="ui icon button" onClick={this.searchImage}><i className="search icon"></i></button>
            </div>
        )

    }
  
}
export default SearchBar