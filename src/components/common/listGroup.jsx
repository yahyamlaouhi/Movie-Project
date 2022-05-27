import React, { Component } from 'react';
import { genres, getGenres } from '../../services/fakeGenreService';



class ListGroup extends Component {
    
    render() { 
      const {items,selectedItem}=this.props;

        return (<ul className="list-group">
       { items.map(g=>(
  <li key={g._id} onClick={()=>this.props.onItemSelect(g)} className={g===selectedItem ?"list-group-item d-flex justify-content-between align-items-center active":"list-group-item d-flex justify-content-between align-items-center "}>
     {g.name}  <span className="badge bg-primary rounded-pill">{this.props.moviesFiltredLength}</span>
  </li>)
  )}
  </ul>
)
}
}
 
export default ListGroup;