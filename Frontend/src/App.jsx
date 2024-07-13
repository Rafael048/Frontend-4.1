import './App.css';
import Header from './Components/Header';
import Landing from './Components/Landing';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <div>
      <div className='welcome'>
        <Header 
          
        ></Header>
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
    <Footer></Footer>
      </>
   
  );
}

export default App;