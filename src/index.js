import { Card } from './components/Card.js';
import { datosParaTarjeta } from './datos_para_tareas/datosParaTarjeta.js';
import { BlogPost } from './components/BlogPost.js';
import { datosParaBlogPost } from './datos_para_tareas/datosParaBlogpost.js';
import { MatchNombre, PasswordInput } from './components/input.js';
import { validarPassword } from './components/input.js';
import { ValidationInput } from './components/input.js';
import { UncontrolledCheckbox } from './components/checkbox.js';
import { CheckboxList } from './components/checkbox.js';

const objetoParaChecklist = {
  ['uno']: [false],
  ['dos']: [true],
  ['tres']: [false],
};
/// Tarjeta de presentación, parte 1 tarea 1
const {
  nombreDelTitular1,
  titulo1,
  imagenSrc1,
  imagenAlt1,
  imagenClass1,
  headerClass1,
} = datosParaTarjeta;
const { tituloBlogpost, parrafo1, parrafo2, parrafo3 } = datosParaBlogPost;

ReactDOM.render(
  [
    <h1 key='Tarea 1'>Tarea 1</h1>,
    <Card
      key='1'
      nombreDelTitular={nombreDelTitular1}
      contenidoPie={titulo1}
      imagenSrc={imagenSrc1}
      imagenAlt={imagenAlt1}
      imagenClass={imagenClass1}
      headerClass={headerClass1}
    />,
    <BlogPost
      key='2'
      tituloDeBlogPost={tituloBlogpost}
      parrafo1={parrafo1}
      parrafo2={parrafo2}
      parrafo3={parrafo3}
    ></BlogPost>,
    <h1 key='tarea 2'>Tarea 2</h1>,
    <MatchNombre key='3' nombre='joaquin'></MatchNombre>,
    <PasswordInput key='4' minLenght={8}></PasswordInput>,
    <ValidationInput
      key='5'
      validacionDeinput={validarPassword}
    ></ValidationInput>,
    <h1 key='tarea3'> Tarea 3</h1>,
    //  <UncontrolledCheckbox
    //    key='6'
    //   nombreDeCaja={'caja mágica'}
    //   initialValue={true}
    // ></UncontrolledCheckbox>,
    <CheckboxList
      key='7'
      objetoParaChecklist={objetoParaChecklist}
    ></CheckboxList>,
  ],
  document.getElementById('react-app')
);
