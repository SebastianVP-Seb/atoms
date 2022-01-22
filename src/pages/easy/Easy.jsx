import BtnBlue from '../../components/botones/BtnBlue';
import BtnViolet from '../../components/botones/BtnViolet';
import SubMenu from '../../components/subMenu/SubMenu';
import TituloPrincipal from '../../components/tituloPrincipal/TituloPrincipal';
import EASY_SUBMENU from '../../db/easy';
import './easy.scss';

function Easy() {

    return (
        <div className='easy' id='easy'>
            <TituloPrincipal titulo={'Easy to use API'} subtitulo={'Guide to setup and configuration. You can present below a guide and a description of how your system configuration works and add some animated screens.'} />
            <div className="container-sub">
                {
                    EASY_SUBMENU.map((item)=><SubMenu items={item} />)
                }
            </div>
            <div className="easy_container">
                <div className="easy_container-p">
                <p></p>
                </div>
                <div className="easy_container-bottom">
                    <BtnBlue title={'GET THE CODE'}/>
                    <BtnViolet title={'RUN EXAMPLE'}/>
                </div>
            </div>
        </div>
    );
};

export default Easy;
