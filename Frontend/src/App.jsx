import './App.css';
//import Mapview from './Components/Mapview';
import Button from './Components/Button';
import FormRegister from './Components/FormRegister';
import FormLogin from './Components/FormLogin';
import BoxText from './Components/BoxText';
import ImageBox from './Components/ImageBox';
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