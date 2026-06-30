import { Routes, Route } from "react-router-dom";
import { axiosInstance } from "./lib/utls";


function App() {

  // token => authorization heads 



  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
    </Routes>
  )
}