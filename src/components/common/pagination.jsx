import React, { Component } from 'react';
import _ from 'lodash'
import PropTypes from 'prop-types';


class Pagination extends Component {
    state = {  } 
    render() { 
      // ({itemsCount , pageSize} = this.props)

      const pageCount=Math.ceil(this.props.itemsCount/this.props.pageSize)
      console.log(pageCount)

      if (pageCount===1) {return null}

      const pages=_.range(1,pageCount+1)


        return (<nav >
        <ul className="pagination ">
          {pages.map(page=>(
    <li key={page} className={this.props.currentPage==page ?"page-item active":"page-item"} >
      <a className='page-link' onClick={()=>{this.props.onPageChange(page)}}>{page}</a>
    </li>
)
)}</ul>
</nav>)

  
    }
}
Pagination.propTypes={
pageSize:PropTypes.number.isRequired,
currentPage:PropTypes.number.isRequired,
pageSize:PropTypes.number.isRequired,
onPageChange:PropTypes.func.isRequired,

} ;

export default Pagination;