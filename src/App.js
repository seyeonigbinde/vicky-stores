import './App.css'
import Homepage from './components/Homepage'
import { Switch, Route } from 'react-router-dom'
import CheckoutForm from './components/CheckoutForm'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/checkout'>
          <CheckoutForm />
        </Route>
        <Route path='/'>
          <Homepage />
        </Route>
      </Switch>
    </div>
  )
}

export default App
