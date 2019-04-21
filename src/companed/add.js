import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Add extends Component {
    static defaultProps = {
        name : "bilgi yox",
        surname : "bilgi yox",
        age : "bilgi yox"
    }
    render() {
        const {name,surname,age} = this.props
      return (
        <div>
            <ul>
                <li>add : {name}</li>
                <li>soy add : {surname} </li>
                <li> yas : {age}</li>
            </ul>
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