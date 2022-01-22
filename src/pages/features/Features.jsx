import FEATURES from '../../db/features';
import Card from '../../components/card/Card';
import TituloPrincipal from '../../components/tituloPrincipal/TituloPrincipal';
import './features.scss';

function Features() {

    return (
        <div className='features' id='features' >
            <TituloPrincipal titulo={'Features designed for you'} subtitulo={'We belive we have created the most efficient SaaS landing page for your users. Landing page with features that will convince you to use it for you SaaS business.'} />

            <div className='features_container' >
                {
                    FEATURES.map(item=>(
                        <Card item={item} key={item.id} />
                    ))
                }
            </div>            
        </div>
    );
};

export default Features;
