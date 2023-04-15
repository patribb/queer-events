import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AddEvent, Home } from "./pages"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/add-event' element={<AddEvent />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App