
import './App.css'
import SearchItems from './SearchItems'

function App() {

  const fruits = ['apple', 'banana', 'orange', 'grape', 'watermelon', 'pineapple', 'mango']

  return (
    <>
      <SearchItems items={fruits}/>
    </>
  )
}

export default App
