import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import People from "./components/People/People";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import Hero from "./components/hero/Hero";
import css from "./styles/app.module.scss";

const App = () => {
 
  return <div className={`bg-primary ${css.container}`}>

<Header></Header>
<Hero />
<Experties />
<Works />
<Portfolio />
<People />
<Footer />
  </div>
};

export default App;
