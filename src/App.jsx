import { ToastContainer } from "react-toastify"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Main from "./Components/Main"

function App() {

  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
