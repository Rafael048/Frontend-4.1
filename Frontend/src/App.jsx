import './App.css';
import Mapview from './Components/Mapview';
import Button from './Components/Button';
import FormRegister from './Components/FormRegister';
import FormLogin from './Components/FormLogin';
import BoxText from './Components/BoxText';
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

  <BoxText
    title = "Welcome to the world of maps"
    text = {["José Gregorio, como le conocen cariñosamente, destacó por sus aportaciones al desarrollo de la medicina moderna en Venezuela, la generosidad con la que atendió a pacientes de bajos recursos y su fe religiosa."
      ,"Sobresalió como introductor de la medicina científica, basada en la investigación, como profesor de varias materias novedosas en la carrera de medicina de la Universidad Central de Venezuela.",
      "El nombre de José Gregorio Hernández fue puesto a la orden de la Iglesia católica con el calificativo del “médico de los pobres”, no obstante su don de empatía y su modo de vivir en valores hicieron que trascendiera las barreras de las clases sociales para convertirse en el 'médico de todos'.",
      "El 19 de junio de 2020, el papa Francisco aprobó el decreto promulgado por la Congregación para la Causa de los Santos, que concede la beatificacion del doctor José Gregorio Hernández."
    ]}
    class = "Bg-Gray"
  />
   </div>
    </>
   
  );
}

export default App;