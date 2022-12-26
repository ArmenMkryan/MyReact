import Header from './Components/Header';
import React from 'react';
import Counter from './Counter';
import { Component } from 'react';
import css from './css.css'



class Firm extends Component {
   constructor(props){
    super(props);
    this.state = {
        Name:'',
        Surname: '',
        Email: '',

        errors: {
            errorName: "",
            errorSurname: "",
            errorEmail: "",
            
        }
    }
    this.nameRef = React.createRef()
    this.surnameRef = React.createRef()
    this.emailRef = React.createRef()
}

onChange = (e) => {
    this.setState({...this.state,[e.target.name]: e.target.value});
} 

btnCall = () => {
    alert(this.nameRef.current.value + ' ' + this.surnameRef.current.value + ' ' + this.emailRef.current.value)
}    

isValidation = (e) => {
    e.preventDefault();
    let valid = true

    const error = {
        errorName: "",
        errorSurname: "",
        errorEmail: "",
  
    }

    if (!this.state.Name) {
        error.errorName = "Name Is Required"
        valid = false
    }
    
    if (!this.state.Surname) {
        error.errorSurname = "Surname Is Required"
        valid = false
    } else if (this.state.Surname !== this.state.Surname) {
        error.errorSurname = "Surname  dose not match"
        valid = false
    }
    if (!this.state.Email) {
        error.errorEmail = "Email Is Required"
        valid = false
    }
    

    this.setState({errors: error})

    return valid
}

    render() {
        
  return (
    <div className="App">
      <form>
        <input 
        type="text" 
        ref={this.nameRef} 
        className='name form' 
        placeholder="Name"
        onChange={this.onChange}
        />{this.state.Name}
        
        
        <input 
        type="text" 
        ref={this.surnameRef} 
        className='surname form' 
        placeholder="Surname"
        onChange={this.onChange}
        />{this.state.Surname}
        
        <input 
        type="text" 
        ref={this.emailRef} 
        className='email form' 
        placeholder="Email"
        onChange={this.onChange}
        />{this.state.Email}
        
        <button 
        type='submit'  
        onClick={this.btnCall + this.isValidation} 
       
        className='butt'>Submit</button>
      </form>
          </div>
  );
}
}

export default Firm;
