import CustomButton from './components/button'
import { useState, useEffect } from 'react'

type Tasks = {
    id : number;
    task : string;
  }

function App () {
//  const [arr, setArr] = useState(["tan-aw tv", "maglulu", "hugas-plato", "mang-laba", "matug", "himo-assignment"]);

  const [todo, setTodo] = useState('');

  const [tasks, setTasks] = useState<Tasks[]>([]);

  useEffect(() => {
    async function fetchTasks(){
      try {
        const response = await fetch('http://localhost:3000/tasks');
          if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
          const data = await response.json();
          console.log(data);
          setTasks(data);
        } catch (e) {  
          console.log("fetch error:", e);
        }
      }
      fetchTasks();
    }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  }

  const handleClick = () => {
    alert('no daddy!');  
  }
  

  return (
    <div className="display: h-screen w-200 flex flex-row content-between p-5 m-10 gap-10 bg-amber-50">
      <div className="border rounded-2xl w-100 flex flex-col items-center">
        Your Todo
        <div className="flex flex-col items-start w-full p-2 bg">
          <ol className="list-decimal list-inside">
            {tasks.map((item) => {
              return <li key={item.id} className="flex flex-row mb-5">{item.id}. {item.task} <CustomButton title="done" onClick={handleClick}/> <CustomButton title="delete" onClick={handleClick}/> <CustomButton title="update" onClick={handleClick}/></li>
            })}
          </ol>
        </div>
      </div>
        
      <div className="ml-5 h-50 border rounded-2xl w-100 flex flex-col items-center">
        Make Todo 
          <div className="w-full p-2 flex flex-row">
            <input 
              type="text" placeholder="something"
              className="border rounded-lg pl-2"
              value={todo}
              onChange={handleChange}
              >
            </input>
              <CustomButton title="add" onClick={handleClick} />
          </div>
      </div>
    </div>
  )
}

export default App;