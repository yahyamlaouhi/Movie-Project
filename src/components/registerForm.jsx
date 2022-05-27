import React, { Component } from 'react';
import Form from './common/form';
import  Joi  from 'joi-browser';


class RegisterForm extends Form {
    state = { 
        data:{username:"",password:"",name:""},
        errors:{}

    }

    schema={
        username:Joi.string().required().label('Username'),
        password:Joi.string().required().min(5).label('Password'),
        name:Joi.string().required().label('Name'),


    }

    handleChange=({currentTarget:input})=>{
    const errors={...this.state.errors}
    const errorMessage=this.validateProperty(input)
    if (errorMessage) errors[input.name]=errorMessage;
    else delete errors[input.name]

    const data={...this.state.data};
    data[input.name]=input.value;
    console.log(errors)
    // console.log(e.currentTarget.value)
    this.setState({data,errors});

    }

    
    doSubmit=()=>{
     //backend Server

    }



        
    render() { 
        return (<div>
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit} >
            {this.renderInput('name','Name')}
            {this.renderInput('username','Username')}
            {this.renderInput('password','Password',"password")}
            {this.renderButtom('Register')}

        </form>

        </div>);
    }
}
 
export default RegisterForm;