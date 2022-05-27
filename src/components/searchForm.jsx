import React, { Component } from 'react';
import Form from './common/form';
import Input from './common/input';

class SearchForm extends Form {
    state = {data:{searchItem:""},
  errors:{}} 

      handleChange=({currentTarget:input})=>{
    const errors={...this.state.errors}

    const data={...this.state.data};
    data[input.name]=input.value;
    // console.log(errors)
    // console.log(e.currentTarget.value)
    this.setState({data,errors});
    console.log(this.state.data.searchItem)


    }

    
    doSubmit=()=>{
     //backend Server

    }

    



    render() { 
        return (<form class="d-flex" >
        {this.renderInput('searchItem','Search','search')}
               </form>);
    }
}
 
export default SearchForm;