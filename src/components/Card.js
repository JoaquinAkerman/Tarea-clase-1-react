export function Card(props) {
  return (
    <div className='tarjeta'>
      <img
        src={props.imagenSrc}
        alt={props.imagenAlt}
        className={props.imagenClass}
      ></img>
      <div className='tarjeta-data'>
        <header className={props.headerClass}>{props.nombreDelTitular}</header>
        <span>{props.contenidoPie}</span>
      </div>
    </div>
  );
}
