import { useState } from 'react';
import RadioBtns from '../RadioBtns';
import './formB.scss';

function FormB() {

    const comision=348;
    const tasa=8.9;
    const cat=15.71;

    const [monto, setMonto]=useState(null);
    const [mensual, setMensual]=useState(0);
    const [neto, setNeto]=useState(0);
    const [pagado, setPagado]=useState(0);
    const [meses, setMeses]=useState(null);

    const [selectedValue, setSelectedValue] = useState(null);

    const handleChangeInput = (e) => {
      setMonto(e.target.value);
    };

    const handleChangeRadioButton=e=> {
      setSelectedValue(e.target.value);
      setMeses(parseInt(e.target.value),10)
    };
  
    const controlProps = (item) => ({
      checked: selectedValue === item,
      onChange: handleChangeRadioButton,
      value: item,
      inputProps: { 'aria-label': item },
    });

    const calcularCredito=(e)=>{

        if(!monto) {
            return
        } else {
            e.preventDefault();
            const tasaMensual=tasa/meses/100;
            const aux=((1+tasaMensual)**meses);
            const pagoMensual=monto*((aux*tasaMensual)/(aux-1));
            setMensual(pagoMensual.toFixed(2));
            console.log(tasaMensual)
            console.log(aux);
            setPagado((pagoMensual*meses).toFixed(2));
            setNeto((monto-comision).toFixed(2));
        };
    };

  return (

    <form action="#" className='form'>
      <h4 className='form_title'>Simulador de Crédito</h4>

      <div className="form_first">
        <label htmlFor="input_monto" className='form_first-label'>Introduce un monto</label>
        <input onChange={(e)=>handleChangeInput(e)} type='number' value={monto} className='form_first-input' required placeholder='Monto aquí (:' id='input_monto' />
      </div>

      <div className="form_second">
        <p className='form_second-tasa'>Tasa anual: <span>8.9%</span></p>
        <p className='form_second-meses'>Plazo en meses</p>
      </div>

      <div className="form_third">
        <RadioBtns controlProps={controlProps}  />
      </div>

      <div className="form_datos">

        <div className="form_datos-item">
          <p className='form_datos-item--label'>Pago mensual: </p>
          <p className='form_datos-item--resultado'>{`$ ${mensual}`}</p>
        </div>

        <div className="form_datos-item">
          <p className='form_datos-item--label'>Comisión de apertura: </p>
          <p className='form_datos-item--resultado'>{`$ ${comision}`}</p>
        </div>

        <div className="form_datos-item">
          <p className='form_datos-item--label'>Monto neto depositado: </p>
          <p className='form_datos-item--resultado'>{`$ ${neto}`}</p>
        </div>

        <div className="form_datos-item">
          <p className='form_datos-item--label'>Total pagado: </p>
          <p className='form_datos-item--resultado'>{`$ ${pagado}`}</p>
        </div>

        <div className="form_datos-item">
          <p className='form_datos-item--label'>CAT: </p>
          <p className='form_datos-item--resultado'>{`${cat} %`}</p>
        </div>

      </div>

      <div className="form_btn">
        <button type='submit' onClick={(e)=>calcularCredito(e)} className='form_btn-1' >SOLICITAR MI CRÉDITO</button>
      </div>

  </form>
  );
};

export default FormB;
