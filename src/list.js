import react from 'react';


const ToDOlists=(props)=>{
   return <>
   <div className="todo_style">
   <i className="fas fa-times-circle" onClick={()=>{
       props.onselect(props.id);
   }}></i>
    <li>{props.text}</li>
    </div>
    </>
};

export default ToDOlists;