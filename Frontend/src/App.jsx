import './App.css';
//import Mapview from './Components/Mapview';
import Header from './Components/Header';
import Landing from './Components/Landing';


function App() {
  return (
    <>
    <div>
      <div className='welcome'>
        <Header></Header>
        <section className='Init'>
          <div className='title-Init'>
            <h1>Dr. José Gregorio Hernández</h1>
          </div>
        </section>
      </div>
    </div>
    <div>
      <Landing></Landing>
    </div>
    {
      // <Mapview></Mapview>
    }
  
    </>
   
  );
}

export default App;