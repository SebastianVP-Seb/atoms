import TituloPrincipal from '../../components/tituloPrincipal/TituloPrincipal';
import './world.scss';

function World() {
    
    return (
        <div className='world' id='world'>
            <div className="world-titulo">
                <TituloPrincipal titulo={'Trusted by world experts'} />
            </div>
            <div className="world_img">
                <img src='./assets/avatar-1.jpg' className='world_img-circle world_img-circle-1' alt='avatar' />
                <img src='./assets/avatar-2.jpg' className='world_img-circle world_img-circle-2' alt='avatar' />
                <img src='./assets/avatar-3.jpg' className='world_img-circle world_img-circle-3' alt='avatar' />
                <img src='./assets/avatar-4.jpg' className='world_img-circle world_img-circle-4' alt='avatar' />
                <img src='./assets/avatar-5.jpg' className='world_img-circle world_img-circle-5' alt='avatar' />
                <img src='./assets/avatar-6.jpg' className='world_img-circle world_img-circle-6' alt='avatar' />
                <img src='./assets/avatar-2.jpg' className='world_img-circle world_img-circle-7' alt='avatar' />
            </div>
        </div>
    );
};

export default World;
