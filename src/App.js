import react, { useState } from 'react';
import ToDOlists from './list';
const App=()=>{

  const[inputlist,setinputlist]=useState("");
  const[items,setitems]=useState([]);
  const itemEvent=(event)=>{
         setinputlist(event.target.value);
  }

  const listofelements=()=>{
       setitems((olditem)=>{
            return[...olditem,inputlist];
       });
       setinputlist("");
  };

  const deleteitems=(id)=>{
    setitems((olditem)=>{
      return olditem.filter((arr,index)=>{
        return index!==id;
      })
    })
  };
   return<>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type='text' placeholder='Add your items' value={inputlist} onChange={itemEvent}/>
        <button onClick={listofelements}>+</button>

        <ol>
          {items.map((itemval,index)=>{
            return <> <ToDOlists text={itemval}
              key={index}
              id={index}
              onselect={deleteitems}
            />
            </>
          })}
        </ol>
      </div>
    </div>
   </>;
};
export default App;
