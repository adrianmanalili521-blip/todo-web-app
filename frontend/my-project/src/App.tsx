import CustomButton from './components/button'

function App () {

  const arr = ["tan-aw tv", "maglulu", "hugas-plato", "mang-laba", "matug", "himo-assignment"];

  return (
    <div className="display: h-screen w-200 flex flex-row content-between p-5 m-10 gap-10 bg-amber-50">
      <div className="border rounded-2xl w-100 flex flex-col items-center">
        Your Todo
        <div className="flex flex-col items-start w-full p-2">
          <ol className="list-decimal list-inside">
            {arr.map((item, key) => {
              return <li key={key} className="flex flex-row mb-5">{key+1}. {item} <CustomButton title="done"/> <CustomButton title="delete"/> <CustomButton title="update"/></li>
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
              >
            </input>
            <CustomButton title="add"/>
          </div>
      </div>
    </div>
  )
}

export default App;