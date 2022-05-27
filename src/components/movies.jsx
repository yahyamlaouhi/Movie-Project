import React, { Component } from 'react';
import {getMovies,deleteMovie} from '../services/fakeMovieService'
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from '../services/fakeGenreService';
import { filter } from '../utils/filter';
import MoviesTable from './moviesTable';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import SearchForm from './searchForm.jsx'

class Movies  extends Component {
    state = { movies:[],
        pageSize:4,
        currentPage:1,
        genres:[],
        selectedGenre:null,
        sortColumn:{path:'title',order:'asc'}
    } 

    componentDidMount(){
        const genres=[{_id:"",name:'ALL Genres'},...getGenres()]
        this.setState({ movies:getMovies(),genres})
    }

    

    handleDelete=(movie)=>{
        const movies=this.state.movies.filter(m=>m._id!=movie._id)
        this.setState({movies:movies})

    }

    handleSort=sortColumn=>{
        this.setState({sortColumn})
    }
    
    render() { 
        
        const {sortColumn,movies:allMovies,pageSize,currentPage,selectedGenre}=this.state;
        
        if(this.state.movies.length===0){
            return <p>there are no movies in the database</p>

        }

        let moviesFiltred=selectedGenre && selectedGenre._id? allMovies.filter(i=>i.genre._id===selectedGenre._id):allMovies;
        const sorted=_.orderBy(moviesFiltred,[sortColumn.path],[sortColumn.order])

        let movies=paginate(sorted,currentPage,pageSize);





        return  <React.Fragment>
        <div className='container'>
        <div className='row'>
        <div className="col-sm-3">
            <ListGroup items={this.state.genres} selectedItem={this.state.selectedGenre} onItemSelect={this.handleGenreSelect} moviesFiltredLength={moviesFiltred.length}></ListGroup>
        </div>
        <div className="col-sm-9">

            <Link  className="btn btn-primary" to='movies/new' style={{marginBottom:20}}>
            New Movie
            </Link>
        <p>
        Showing {movies.length} movies in the database.
        </p>
        <SearchForm></SearchForm>

        
        <MoviesTable movies={movies} sortColumn={sortColumn}  onDelete={this.handleDelete} onLikes={'anotherOne'} onSort={this.handleSort} />
        
        <Pagination currentPage={currentPage} itemsCount={moviesFiltred.length} pageSize={pageSize} onPageChange={this.handlePageChange}/>
        </div>
        </div>
        </div>
        </React.Fragment>
           

    }

    handlePageChange=(page)=>{
     this.setState({currentPage:page})
    }

    handleGenreSelect=(filterName)=>{
      this.setState({selectedGenre:filterName,currentPage:1})
      console.log(filterName)


    }

}
 
export default Movies ;