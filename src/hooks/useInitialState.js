import { useState, useEffect} from 'react';

const useInitialState = (API) => {
   //El Hook useState nos devuelve un array con dos elementos: la primera posición es el valor de nuestro estado, la segunda es una función que nos permite actualizar ese valor.
   const [videos, setVideos] = useState({mylist:[], trends:[], originals:[]});

   //El Hook useEffect nos permite ejecutar código cuando se monta, desmonta o actualiza nuestro componente.
   useEffect(()=>{
      fetch(API)
         .then(response => response.json())
         .then(data => setVideos(data));
   }, []);
   return videos; //retorno el estado
};

export default useInitialState;
