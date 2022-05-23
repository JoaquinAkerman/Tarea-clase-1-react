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
      key={props.llave}
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
      <Checkbox llave={key} isChecked={props.objetoParaChecklist[key]} />
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
  const [checked, setChecked] = React.useState(props.isChecked);

  return (
    <label>
      {' '}
      {props.name}
      <input
        type='checkbox'
        checked={checked}
        onChange={() => {
          setChecked(() => props.onChange(checked));
        }}
      ></input>
    </label>
  );
}

export function CheckboxListWithState(props) {
  const items = props.items;
  return (
    <div>
      {items.map((eachCheckbox) => {
        return <ControlledCheckbox {...eachCheckbox} />;
      })}
    </div>
  );
}
