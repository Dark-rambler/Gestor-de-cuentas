import { Routes, Route } from 'react-router-dom'
import AccountsManager from './pages/AccountsManager'
import AddNewAccount from './pages/AddNewAccount'
import SearchAccount from './pages/SearchAccount'
import ModifyAccount from './pages/ModifyAccount'
import { AdminLayout } from './layouts/adminLayout/AdminLayout'
import './App.css'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route  element={<AdminLayout />}>
          <Route path='/' element={<AccountsManager />} />
          <Route path='/addNewAccount' element={<AddNewAccount />} />
          <Route path='/searchAccount' element={<SearchAccount />} />
          <Route path='/modifyAccount' element={<ModifyAccount />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
