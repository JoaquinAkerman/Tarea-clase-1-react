import { Card } from './components/Card.js';
import { datosParaTarjeta } from './datos_para_tareas/datosParaTarjeta.js';
import { BlogPost } from './components/BlogPost.js';
import { datosParaBlogPost } from './datos_para_tareas/datosParaBlogpost.js';
import { MatchNombre, PasswordInput } from './components/input.js';

/// Tarjeta de presentación, parte 1 tarea 1
const {
  nombreDelTitular1,
  titulo1,
  imagenSrc1,
  imagenAlt1,
  imagenClass1,
  headerClass1,
} = datosParaTarjeta;

ReactDOM.render(
  <Card
    nombreDelTitular={nombreDelTitular1}
    contenidoPie={titulo1}
    imagenSrc={imagenSrc1}
    imagenAlt={imagenAlt1}
    imagenClass={imagenClass1}
    headerClass={headerClass1}
  />,
  document.getElementById('react-app')
);

// Posteo en blog, parte 2 tarea 1
const { tituloBlogpost, parrafo1, parrafo2, parrafo3 } = datosParaBlogPost;

ReactDOM.render(
  <BlogPost
    tituloDeBlogPost={tituloBlogpost}
    parrafo1={parrafo1}
    parrafo2={parrafo2}
    parrafo3={parrafo3}
  ></BlogPost>,
  document.getElementById('posteo-en-blog')
);

// Input que cambia de value al ingresar un string, parte 1 tarea 2
ReactDOM.render(
  [
    <MatchNombre key='1' nombre='joaquin'></MatchNombre>,
    <PasswordInput key='2' minLenght={5}></PasswordInput>,
  ],
  document.getElementById('input')
);
