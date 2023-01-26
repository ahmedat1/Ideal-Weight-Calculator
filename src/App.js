import React, { useState } from 'react';
import './App.css';

function App() {
  const [taille,setTaille]=useState();
  const [genre,setGenre]=useState();
  const [calcul,setCalcul]=useState();
  const [backgroundColor, setBackgroundColor] = useState('gainsboro');
  const [errorMessage, setErrorMessage] = useState('');


  const handlechange=(e)=>{
    setTaille(e.target.value);
    if (e.target.value < 150) {
      setErrorMessage('La taille doit être supérieure à 150cm');
    } else {
      setErrorMessage('');
    }
  }
  const genrevalue=(e)=>{
    setGenre(e.target.value);
    if(e.target.value==='h'){
      setBackgroundColor('#227dd7');
    }else if(e.target.value==='f'){
      setBackgroundColor('pink');
    }

  }
  const calculer=()=>{
    if(genre==='h'){ 
         setCalcul(taille- 100 - ((taille - 150) /4 ));
        }else if(genre==='f'){
          setCalcul(taille- 100 - ((taille - 150) /2,5 ));
        }
  }
  // const backgroundColor = genre === 'h' ? 'aqua' : 'pink';

  return (
    <div className="App">
      <div className='container' style={{backgroundColor: backgroundColor}}>
        <div classname='calcul-app'>
        <div className='title'>Calculateur de poids idéal</div>
        <div className='input-taille'>        
          <input type='text' className='taille-cm' value={taille} onChange={handlechange} placeholder="Votre taille en centimètres"/>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
        <div className='option-genre'>
        Vous êtes :
          <select onChange={genrevalue} value={genre} className='genre'>
            <option  value=''>Genre</option>
            <option  value='h'>Homme</option>
            <option  value='f'>Femme</option>
          </select>
        </div>
        <div className='button-calculer'>
          <button className='calculer' onClick={calculer}>Calculer</button>
        </div>
        <div className='result'>{calcul} Kg</div>
        </div>
      </div>
    </div>
  );
}

export default App;
