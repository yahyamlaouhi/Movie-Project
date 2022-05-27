import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Select from './select';


class Form extends Component {
    state = {
        data:{},
        errors:{},

      } 

     


       validate=()=>{
        const result=Joi.validate(this.state.data,this.schema,{abortEarly:false})
         let errors={}
        if (!result.error) return null;
        

        for(let item of result.error.details){
            errors[item.path[0]]=item.message
            return errors

        }
        }



        validateProperty=(input)=>{
        const obj={[input.name]:input.value};
        const schema={[input.name]:this.schema[input.name]};
        const {error}=Joi.validate(obj,schema);
        
        return error ?error.details[0].message:null;
        // if (error) return null;
        // return error.details[0].message;
        



    }


    handleSubmit=(e)=>{
        e.preventDefault()

        let errors={}
        errors=this.validate();

        this.setState({errors:errors || {}});
        if (errors) return ;


        this.doSubmit()


    }

    renderButtom=(label)=>{
        return (<button  disabled={this.validate()}  type="submit" class="btn btn-primary">{label}</button>
)
    }


    renderInput=(name,label,type='text')=>{
        return(<Input 
        type={type} 
        onChange={this.handleChange} 
        label={label} 
        value={this.state.data[name]} 
        name={name} 
        errors={this.state.errors[name]}
        
       
>
        </Input>
)
    }



       renderSelect=(name,label,options)=>{
        return(<Select
        onChange={this.handleChange} 
        label={label} 
        value={this.state.data[name]} 
        name={name} 
         errors={this.state.errors[name]}
         options={options}>
        </Select>
)
    }
   

}
export default Form;