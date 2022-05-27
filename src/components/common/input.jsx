
const Input = (props) => {
    return ( <div className="form-group">
          <label 
          htmlFor={props.name} 
          className="form-label">{props.label}</label>
          <input 
          onChange={props.onChange} 
          name={props.name} 
          value={props.value} 
          autoFocus 
          id={props.name}
           className="form-control" 
           type={props.type} {...props.rest} />
           {props.errors && <div className="alert alert-danger">{props.errors}</div>}
           {/* {props.errors?<div className="alert alert-danger">{props.errors}</div>:''} */}
        

         </div> );
}
 
export default Input;