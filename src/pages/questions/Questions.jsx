import QUESTIONS, { CLIENTS, LIST_QUESTIONS, QUESTIONS_LIST } from '../../db/questions';
import BtnViolet from '../../components/botones/BtnViolet';
import Card from '../../components/card/Card';
import './questions.scss';
import Accordion from 'react-bootstrap/Accordion';
import ListPricing from '../../components/listPricing/ListPricing';

function Questions() {
    return (
        <div className='questions' id='questions' >
            <div className="questions_first">
                <div className="questions_first-1">
                    <h2 className="questions_first-1-title">Frequenty asked questions</h2>
                    <p>Have a presale question about our products and features? Or looking for a refund? We would love to hear what you concern is.</p>
                    <div className="questions_first-1-subtitle">
                        {
                            LIST_QUESTIONS.map((item)=>(
                                <ListPricing items={item} />
                            ))
                        }
                    </div>
                </div>
                <div className="questions_first-2">
                    <Accordion defaultActiveKey="0">
                    {
                        QUESTIONS_LIST.map((item)=>(
                            <Accordion.Item eventKey={item.id} key={item.id} className='questions_accordion' >
                                <Accordion.Header className='questions_accordion-header' >{item.par}</Accordion.Header>
                                <Accordion.Body className='questions_accordion-body'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </Accordion.Body>
                            </Accordion.Item>
                        ))
                    }
                    </Accordion>
                </div>
            </div>
            <div className="questions_second">
                {
                    QUESTIONS.map((item)=>(
                        <div className='questions_card'>
                            <Card item={item} key={item.id} />
                            <div className='questions_btn'>
                                <BtnViolet title={item.btn_title} />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="questions_third">
                {
                    CLIENTS.map((item)=>
                        (<img key={item.id} src={`${item.imageUrl}`} alt='ícono' />)
                    )
                }
            </div>
        </div>
    );
};

export default Questions;
