import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Add extends Component {
    static defaultProps = {
        name : "bilgi yox",
        surname : "bilgi yox",
        age : "bilgi yox"
    }

    constructor(props){
      super(props);

      this.state = {
        test: 2
      }
    }
    render() {
        const {name,surname,age} = this.props
      return (
        <div className="section">
            <h4> addlar <i className="far fa-angry"></i></h4>
            <ul>
                <li>add : {name} </li>
                <li>soy add : {surname} </li>
                <li> yas : {age}</li>
            </ul>
            <p>{this.state.test}</p>
        </div>
      );
    }
  }



  Add.propTypes = {
      name : PropTypes.string.isRequired,
      surname : PropTypes.string.isRequired,
      age : PropTypes.string.isRequired
  }


  
  export default Add;