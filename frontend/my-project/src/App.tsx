import DisplayTasks from './components/displayTasks'
import PostTasks from './components/postTask'

function App () {
    return (
        <div className="display: h-screen w-200 flex flex-row content-between p-5 m-10 gap-10 bg-amber-50">
            <div className="border rounded-2xl w-100 flex flex-col items-center">
                Your Todo
                <div className="flex flex-col items-start w-full p-2 bg">
                    <DisplayTasks />
                </div>
            </div>
            
            <div className="ml-5 h-50 border rounded-2xl w-100 flex flex-col items-center">
                Make Todo 
                <PostTasks />
            </div>
        </div>
    )
}

export default App;