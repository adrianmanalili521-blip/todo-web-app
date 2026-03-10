import { useState } from 'react'
import CustomButton from './button'

function PostTasks () {
    const [task, setTask] = useState('');

    async function postTask () {
        try {
            const response = await fetch('http://localhost:3000/post/task', {
                method : 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({task : task}),
            });
            const data = await response.json();
            console.log(data);
            alert(data.message);
        } catch (e) {
            console.log(e);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    }

    function handleClick () {
        // alert('yamete kudasai! ;)');
        postTask();
        setTask('');
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