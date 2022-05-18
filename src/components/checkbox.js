'use strict';

export function UncontrolledCheckbox(props) {
  const [checked, setValue] = React.useState(props.initialValue);
  return (
    <div>
      {'UncontrolledCheckbox'}
      <input
        id='caja-checkbox'
        type={'checkbox'}
        onChange={() => setValue(!checked)}
        checked={checked}
      ></input>
      <label> {props.nombreDeCaja}</label>
    </div>
  );
}

function Checkbox(props) {
  const [checked, setChecked] = React.useState(props.isChecked);
  return (
    <input
      id={props.llave}
      type='checkbox'
      onChange={() => setChecked(!checked)}
      checked={checked}
      value={checked}
    ></input>
  );
}

export function CheckboxList(props) {
  const keyDeObjeto = Object.keys(props.objetoParaChecklist);
  const listItems = keyDeObjeto.map((key) => (
    <section key={key}>
      <Checkbox
        llave={key}
        isChecked={props.objetoParaChecklist[key]}
      ></Checkbox>
      {' caja ' + key}
    </section>
  ));

  return (
    <div>
      {'CheckboxList '}
      {listItems}
    </div>
  );
}

export function ControlledCheckbox(props) {
  return (
    <label>
      {' '}
      {props.name}
      <input
        type='checkbox'
        defaultChecked={props.checked}
        onChange={props.funcionParaCheckbox}
      ></input>
    </label>
  );
}

/*
 * Este componente debe renderizar un checkbox (<input type="checkbox" />).
 * Recibirá tres props: name, value y onChange.
 * name indica el nombre del checkbox, será un string que debe ser renderizado a su lado.
 * value es un booleano que indica el valor del checkbox (true o false según esté o no seleccionado).
 * onChange es una función que se debe disparar cuando el checkbox se selecciona.
 */
