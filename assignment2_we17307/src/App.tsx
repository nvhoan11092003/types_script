import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layoutuser from './components/layout/layoutuser'
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layoutuser></Layoutuser>}>
        <Route index element={<h1>lol</h1>}></Route>
        <Route></Route>
      </Route>
      <Route></Route>
      <Route></Route>
    </Routes>
  </BrowserRouter>
}

export default App
