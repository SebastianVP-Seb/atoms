import './card.scss';

function Card({item}) {

  return (
        <div className='card_card' >
            <div className='card_card_img'>
                <img src={`${item.imrUrl}`} alt={`${item.title}`} />
            </div>
            <h3 className='card_card_title'>{item.title}</h3>
            <p className='card_card_p'>{item.parrafo}</p>
        </div>
    );
};

export default Card;
