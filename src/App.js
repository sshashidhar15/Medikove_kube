//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import Feature from "./components/Feature"
import data from "./doctordata"

function App() {

  const doctor = data.map(item => {
    return(
       <Feature
       key = {item.id}
       {...item} />
    )
}) 


  return (
    <div className="App">
        <Header />
        <Main />
        <section className="feature-list">
            {doctor}
        </section>
    </div>
  );
}

export default App;
