import React, { Component } from 'react';
import Input from './common/input'
import  Joi from 'joi-browser';
import { result } from 'lodash';
import Form from './common/form';

class LoginForm extends Form {
    username=React.createRef();
    state = { 
        data:{username:"",password:""},
        errors:{
            
        }

     } 

    // componentDidMount(){
    //     this.username.current.focus()

    // }

    schema={
        username:Joi.string().required().label('Username'),
        password:Joi.string().required().label('Password')
    }

   


        // let errors={}
        // const {data}=this.state
        // if(data.username.trim()==='')
        //  {errors.username ='Username is required.'};
        // if(data.password.trim()==='')
        // {errors.password='Password is required.'};

        // return Object.keys(errors).length === 0 ? null: errors;


    



    doSubmit=()=>{
     //backend Server

    }

    // validateProperty=(input)=>{
    //     if (input.name==='username'){
    //         if (input.value.trim()==='') return 'Username is required'
    //     }
    //      if (input.name==='password'){
    //         if (input.value.trim()==='') return 'Password is required'

    //     }
    // }
        
        //Call the server
    //  const username=this.username.current.value;
    // }
handleChange=({currentTarget:input})=>{
    const errors={...this.state.errors}
    const errorMessage=this.validateProperty(input)
    if (errorMessage) errors[input.name]=errorMessage;
    else delete errors[input.name]

    const data={...this.state.data};
    data[input.name]=input.value;
    // console.log(errors)
    // console.log(e.currentTarget.value)
    this.setState({data,errors});

    }


    render() { 
        return (<div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit} >
            {this.renderInput('username','Username')}
            {this.renderInput('password','Password',"password")}
            {this.renderButtom('Login')}

        </form>

        </div>);
    }

}
 
export default LoginForm;