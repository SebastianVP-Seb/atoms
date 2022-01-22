import BtnBlue from '../../components/botones/BtnBlue';
import LATERAL, { LATERAL_IMG } from '../../db/footer';
import './footer.scss';

function Footer() {
    return (
        <div className='footer' id='footer' >
            <img src='./assets/bg.jpg' className='footer_imagen' alt='imagen-footer' />

            <div className="footer_container">
                <div className="footer_container-first">
                    <h3 className='footer_container-first--title'>Start <span>growing</span> your bussiness</h3>
                    <p>Your issue is our main priority. Our 24/7 support team is here to help you and make sure our product is up to date. Have a presale question about our products and features? Or looking for a refund? We would love to hear what toy concern. Online awards and publications.</p>
                </div>
                <div className="footer_container-second">
                    <BtnBlue title={`GET STARTED NOW`}  />
                </div>
            </div>
            <div className="footer_third">
                <div className="footer_third-lateral">
                    <h4>LATERAL</h4>
                    <p>Copyright &copy; 2018 LATERAL.</p>
                    <p>All Rights Reserved. Proudly made in EU.</p>
                    {
                        LATERAL_IMG.map((item)=>
                            <img key={item.id} src={`${item.imgUrl}`} alt='red-social' />
                        )
                    }
                </div>
                {
                    LATERAL.map((item)=>(
                        <div key={item.id} className="footer_third-lateral-items">
                            <h5>{item.title}</h5>
                            <p>{item.it1}</p>
                            <p>{item.it2}</p>
                            <p>{item.it3}</p>
                            <p>{item.it4}</p>
                            <p>{item.it5}</p>
                        </div>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default Footer;
