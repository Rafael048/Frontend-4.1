import './App.css';
import Mapview from './Components/Mapview';
import Button from './Components/Button';
import FormRegister from './Components/FormRegister';
import FormLogin from './Components/FormLogin';
function App() {
  
  return (
    <>
    <div>
    <Mapview></Mapview>
    <Button url ="http://localhost:8000/logout" name = "LogOut"/>
   </div>
   <div>
    
    <FormRegister/>
    <FormLogin/>
   </div>
    </>
   
  );
}

export default App;