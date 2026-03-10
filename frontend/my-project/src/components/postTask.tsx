import { useState, useEffect } from 'react'
import CustomButton from './button'

function PostTasks () {
    const [task, setTask] = useState('');

    function handleClick () {
        alert('yamete kudasai! ;)');
    }

    async function postTask () {
        try {
            const response = await fetch('http://localhost:5173/todo/post', {
                method : 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({task : task}),
            });
        } catch (e) {
            console.log(e);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    }
    
    return (
        <div className="w-full p-2 flex flex-row">
            <input 
                type="text" placeholder="something"
                className="border rounded-lg pl-2"
                value={task}
                onChange={handleChange}
            />
            <CustomButton title="add" onClick={handleClick} />
          </div>
    )
}

export default PostTasks;