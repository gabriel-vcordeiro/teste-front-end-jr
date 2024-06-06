import './components/styles.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Main from "./components/Main/main";
import Footer from "./components/Footer/footer";



function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </div>
    
  );
}

  export default App;
