import AppRouter from './AppRouter'
import { ApiProvider } from '../App/Context/api-context'
import '../App/Paginas/Interface/cssgeral.css'

function App() {
  return (
    <div className ='app_container'>
      <ApiProvider>
        <AppRouter />
      </ApiProvider>
    </div>
  )
}

export default App
