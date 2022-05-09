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
        className={'input'.concat(
          value.length == props.minLenght ? ' input-match' : ''
        )}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
}
