import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Items from './components/Items'
import Popular from './components/Popular'
import RecipeInfo from './components/RecipeInfo'
import ItemInfo from './components/ItemInfo'
import Signup from './components/Signup'
import LoginPage from './components/LoginPage'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/items' element={<Items />}></Route>
        <Route path='/popular' element={<Popular />}></Route>
        <Route path="/:MealId" element={<RecipeInfo />}></Route>
        <Route path='category/:strCategory' element={<ItemInfo />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
    </>
  )
}

export default App;
