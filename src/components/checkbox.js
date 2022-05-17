'use strict';

export function UncontrolledCheckbox(props) {
  const [checked, setValue] = React.useState(props.initialValue);
  return (
    <div>
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

export function CheckboxList(props) {
  const keysDeObjeto = Object.keys(props.objetoParaChecklist);
  const [checked, setValue] = React.useState('');
  const listItems = keysDeObjeto.map((key) => (
    <section key={key}>
      {' '}
      <input
        id={'caja ' + key}
        type={'checkbox'}
        onChange={() => setValue(!checked)}
      ></input>
      {'caja con valor ' + props.objetoParaChecklist[key]}
    </section>
  ));

  return <div>{listItems}</div>;
}

// objetoParaChecklist
// debe renderizar tres checkboxes, con nombres "uno", "dos" y "tres", que inicien con valores false, true y false respectivamente.
//{ [nombre]: [valorInicial] }
