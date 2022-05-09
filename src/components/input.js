export function MatchNombre(props) {
  const [value, setValue] = React.useState('');
  return (
    <div>
      Nombre:
      <input
        className={'input'.concat(value === props.nombre ? ' input-match' : '')}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      ></input>
      (Ingresar joaquin)
    </div>
  );
}

export function PasswordInput(props) {
  const [value, setValue] = React.useState('');
  return (
    <div>
      Password:
      <input
        type='password'
        className={value.length < props.minLenght ? ' input-match ' : ' input'}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      (longitud minima 5)
    </div>
  );
}
