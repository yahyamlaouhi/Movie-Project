import React, { Component } from 'react';
import TableBody from './common/tableBody';
import TableHeader from './common/tableHeader';
import Likes from './common/likes';
import {Link} from 'react-router-dom'



class MoviesTable extends Component {
    columns=[
        {path:'title',label:'Title',content:(movie)=><Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
        {path:'genre.name',label:'Genre'},
        {path:'numberInStock',label:'Stock'},
        {path:'dailyRentalRate',label:'Rate'},
        {key:'like',content:movie=><td><Likes/></td>
},
        {key:'delete',content:movie=>(<button onClick={()=>{this.props.onDelete(movie)}} type="button" className="btn btn-danger">Delete</button>)
},
        
    ]
 
        
    

    render() { 
        const {movies,onDelete,onLike,onSort}=this.props
 



        return (<table className='table'>  
        <TableHeader columns={this.columns} onSort={this.props.onSort} sortColumn={this.props.sortColumn}></TableHeader>
           
        <TableBody movies={movies} onDelete={this.props.onDelete} columns={this.columns} ></TableBody>
        </table>);
    }
}
 
export default MoviesTable;