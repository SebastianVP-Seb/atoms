import PRICING, { PRICING_SUBMENU } from '../../db/pricing';
import TituloPrincipal from '../../components/tituloPrincipal/TituloPrincipal';
import BtnBlueTransparent from '../../components/botones/BtnBlueTransparent';
import ListPricing from '../../components/listPricing/ListPricing';
import SubMenu from '../../components/subMenu/SubMenu';
import './pricing.scss';

function Pricing() {

    return (
        <div className='pricing' id='pricing'>

            <TituloPrincipal titulo={'Flexible Pricing'} subtitulo={'We belive we have created the most efficient SaaS landing page for your users. Landing page with features that will convince you to use it for your Sass business.'} />

            <div className="container-sub">
                {
                    PRICING_SUBMENU.map((item)=>(
                        <SubMenu items={item} />
                        ))
                }
            </div>

            <div className="pricing_cards">
                {
                    PRICING.map((item)=>(
                        <div className='pricing_item' key={item.id} >
                            <h4 className='pricing_item-title'>{item.title}</h4>
                            <h3 className='pricing_item-cost' >{item.cost}</h3>

                            <div className='pricing_items'>
                                {
                                    item.items.map((item)=>(
                                        <ListPricing items={item} />
                                    ))
                                } 
                            </div>

                            <div className='pricing_btn'>
                                <BtnBlueTransparent title={'Sign up'} />
                            </div>
                        </div>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default Pricing;
