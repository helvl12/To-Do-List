
import './App.css';
import {React , useState , useRef} from "react" 

function App() {

  const [x , setX] = useState([])
  const inputRef = useRef()

  const add = () =>{
      const value = inputRef.current.value
      if (value.trim() !== "") { 
        const newData = {id: 1 ,  completed : false , value}
        setX([...x , newData])
        inputRef.current.value = ""
      }
  }

  const itemDone = (index)=>{
    const newx = [...x]
    newx[index].completed = !newx[index].completed
    setX(newx)
  }

  const toDelelte = (index)=>{
    const newx = [...x]
    newx.splice(index , 1)
    setX(newx)
  }

  const numOfTasks = [...x].length
  return (
    <div className='todo-list'>
      <h2>TO-Do-List</h2>
      <h2>{numOfTasks}</h2>

      <div className='todo-add'>
      <input placeholder='Enter new task' ref = {inputRef}></input>
      <button  onClick={add}>Add</button>
    </div>

      <ul>
        {
          x.map ((item,index) => {
            return( 
            <div>
              <li onClick = {() => itemDone(index)} className={ item.completed? "diffstyle" : "" } >{item.value}</li>
              <span onClick={() => toDelelte(index)}>✖️</span> 
            </div>
            )
          })
        }
      </ul>

    </div>
  );
}

export default App;
