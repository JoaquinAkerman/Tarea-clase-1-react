'use strict';

export function MatchNombre(props) {
  const [value, setValue] = React.useState('');
  return (
    <div>
      {'Nombre: '}
      <input
        className={'input'.concat(value === props.nombre ? ' input-match' : '')}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      ></input>
      {' Ingresar joaquin'}{' '}
    </div>
  );
}

export function PasswordInput(props) {
  const [value, setValue] = React.useState('');
  return (
    <div>
      {'Password: '}
      <input
        type='password'
        className={value.length < props.minLenght ? ' input-match ' : ' input'}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      {' (longitud minima 8)'}
    </div>
  );
}

export function validarPassword(value) {
  if (
    value.length >= 8 &&
    !value.match(' ') &&
    value.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    return true;
  } else return false;
}

export function ValidationInput(props) {
  const [value, setValue] = React.useState('');
  return (
    <div>
      {'  email:'}
      <input
        className={
          props.validacionDeinput(value) === true ? ' input ' : ' input-match '
        }
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      {'(ingresar correo)'}
    </div>
  );
}
