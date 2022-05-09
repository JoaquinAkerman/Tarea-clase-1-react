import { Card } from './Card.js';
import { datosParaTarjeta } from '../datos_para_tareas/datosParaTarjeta.js';

const {
  nombreDelTitular1,
  titulo1,
  imagenSrc1,
  imagenAlt1,
  imagenClass1,
  headerClass1,
} = datosParaTarjeta;

export function BlogPost(props) {
  return (
    <article className='post'>
      <header className='post-header'>
        <h2 className='post-title'>{props.tituloDeBlogPost}</h2>
        <Card
          nombreDelTitular={nombreDelTitular1}
          contenidoPie={titulo1}
          imagenSrc={imagenSrc1}
          imagenAlt={imagenAlt1}
          imagenClass={imagenClass1}
          headerClass={headerClass1}
        />
      </header>
      <p className='post-paragraph'>{props.parrafo1}</p>
      <p className='post-paragraph'>{props.parrafo2}</p>
      <p className='post-paragraph'>{props.parrafo3}</p>
    </article>
  );
}
