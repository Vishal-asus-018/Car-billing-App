import { Route, Routes, useNavigate } from "react-router-dom"
import CarDealerForm from "./components/Form/DealerForm"
import Invoice from "./components/Invoice/Invoice"
import Home from './components/Home/Home'
import { Button, Typography } from "@mui/material"

function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" exact element={<h1><Home /></h1>} />
      <Route path="/bill" element={<CarDealerForm />} />
      <Route path="/invoice" element={<Invoice />} />
      <Route path="*" element={
        <>
          <Typography variant="h1" color={'primary'} >Page not found</Typography>
          <Button variant='contained' color="primary" onClick={() => navigate('/')}>{'< '} Back</Button>
        </>
      } />
    </Routes>
  )
}

export default App
