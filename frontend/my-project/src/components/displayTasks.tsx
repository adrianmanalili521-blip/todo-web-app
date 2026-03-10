import { useState, useEffect } from 'react'
import CustomButton from './button'

type Tasks = {
    id : number;
    task : string;
}

function DisplayTasks() {
    const [tasks, setTasks] = useState<Tasks[]>([]);

    function handleClick () {
        alert('yamete kudasai;)');
    }

    useEffect(() => {
        async function fetchTasks(){
            try {
                const response = await fetch('http://localhost:3000/tasks');
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                const data = await response.json();
                console.log(data.message);
                setTasks(data.task);
                } catch (e) {  
                console.log("fetch error:", e);
                }
            }
        fetchTasks();
    }, []);

    if (tasks.length === 0) {
        return (
            <p>
                Nothing to show here. maybe bcoz server is offline hehe...
            </p>
        );
    } else {
        return (
            <ol className="list-decimal list-inside">
                {tasks.map((item) => {
                    return <li key={item.id} className="flex flex-row mb-5">{item.id}. {item.task} <CustomButton title="done" onClick={handleClick}/> <CustomButton title="delete" onClick={handleClick}/> <CustomButton title="update" onClick={handleClick}/></li>        
                })}
            </ol> 
        );
    }
}

export default DisplayTasks;