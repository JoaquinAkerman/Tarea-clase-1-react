import { Card } from './components/Card.js';
import { BlogPost } from './components/BlogPost.js';
import { datosParaBlogPost } from './datos_para_tareas/datosParaBlogpost.js';
import { MatchNombre, PasswordInput } from './components/input.js';
import { validarPassword } from './components/input.js';
import { ValidationInput } from './components/input.js';
import {
  UncontrolledCheckbox,
  ControlledCheckbox,
  CheckboxListWithState,
} from './components/checkbox.js';
import { CheckboxList } from './components/checkbox.js';
import { objetoParaChecklist } from './datos_para_tareas/objetoParaChecklist.js';
import {
  dataParaControledCheckbox,
  itemsParaCheckboxListWithState,
} from './datos_para_tareas/datosParaControledCheckbox.js';
ReactDOM.render(
  [
    <h1 key='Tarea-1'>Tarea 1</h1>,
    <Card key='card' {...datosParaBlogPost} />,
    <BlogPost key='BlogPost' {...datosParaBlogPost} />,
    <h1 key='tarea-2'>Tarea 2</h1>,
    <MatchNombre key='MatchNombre' nombre='joaquin' />,
    <PasswordInput key='PasswordInput' minLenght={8} />,
    <ValidationInput
      key='ValidationInput'
      validacionDeinput={validarPassword}
    />,
    <h1 key='tarea-3'> Tarea 3</h1>,
    <UncontrolledCheckbox
      key='UncontrolledCheckbox'
      nombreDeCaja={'caja mágica'}
      initialValue={true}
    />,
    <CheckboxList key='7' objetoParaChecklist={objetoParaChecklist} />,
    ////////////////////////////////
    <h1 key='tarea-4'>Tarea 4</h1>,
    <ControlledCheckbox
      key='ControlledCheckbox'
      {...dataParaControledCheckbox}
    />,
    <CheckboxListWithState
      key='CheckboxListWithState'
      items={itemsParaCheckboxListWithState}
    />,
  ],
  document.getElementById('react-app')
);
