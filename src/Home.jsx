import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Sec1 from "./components/Sec1/Sec1";
import Sec2 from "./components/Sec2/Sec2";
import Footer from './components/Footer/Footer'

function Paths() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Sec1 />
      <Sec2 />
      <Footer />
    </div>
  );
}

export default Paths