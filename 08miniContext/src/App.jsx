
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
    </UserContextProvider>
  )
}

export default App
