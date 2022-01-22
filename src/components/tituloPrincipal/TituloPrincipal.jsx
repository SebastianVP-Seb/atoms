import './tituloPrincipal.scss';

function TituloPrincipal({titulo, subtitulo}) {

  return (
    <div className='titulo_principal' >
        <h2 className='titulo_principal-encabezado'>{titulo}</h2>
        <p>_____</p>
        <div className="titulo_principal-div">
          <p>{subtitulo}</p>
        </div>
    </div>
    );
}

export default TituloPrincipal;
