import './App.css'
import { Toaster } from 'react-hot-toast';
import Header from './components/pages/Header'
import Footer from './components/pages/Footer'
import AppRouter from './router/AppRouter'
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader";

function App() {
  return (
    <BrowserRouter>

      <Loader />
      
      <Header />

      <Toaster position="top-right" />

      <AppRouter />

      <Footer />

    </BrowserRouter>
  )
}

export default App