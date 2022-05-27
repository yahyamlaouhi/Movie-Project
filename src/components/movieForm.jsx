import React, { Component } from 'react';
import Form from './common/form';
import  Joi  from 'joi-browser';
import {getGenres} from '../services/fakeGenreService'
import {getMovie, saveMovie} from '../services/fakeMovieService'



class MovieForm extends Form {
    state = { 
        data:{title:"",
        genreId:"",
        numberInStock:'',
        dailyRentalRate:''},
        genres:[],
        errors:{}

    }

    schema={
        title:Joi.string().label('Title'),
        genreId:Joi.string().required().label('Genre'),
        numberInStock:Joi.number().min(0).max(100).label('Number in Stock'),
        dailyRentalRate:Joi.number().min(0).max(10).label('Daily Rental Rate'),


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

    componentDidMount(){
        const genres=getGenres();
        this.setState({genres});

        const movieId=this.props.match.params.id;
        if (movieId==='new') return;

        const movie=getMovie(movieId)
        if(!movie) return this.props.history.replace('/not-found');

        this.setState({data:this.mapToViewModel(movie)})
    }

    mapToViewModel(movie){
        return{
            _id:movie._id,
            title:movie.title,
            genreId:movie.genre._id,
            numberInStock:movie.numberInStock,
            dailyRentalRate:movie.dailyRentalRate


        }
    }

    
    doSubmit=()=>{
        saveMovie(this.state.data);
        this.props.history.push('/movies');


    }



        
    render() { 
        return (<div>
            <h1>Movie Form</h1>
            <form onSubmit={this.handleSubmit} >
            {this.renderInput('title','Title')}
            {this.renderSelect('genreId','Genre',this.state.genres)}
            {this.renderInput('numberInStock','Number in Stock','number')}
            {this.renderInput('dailyRentalRate','Rate')}
            {this.renderButtom('Save')}

        </form>

        </div>);
    }
}
 
export default MovieForm;