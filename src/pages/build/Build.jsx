import BtnViolet from '../../components/botones/BtnViolet';
import Simulador from '../../components/simulador/Simulador';
import ModalBuild from './ModalBuild';
import './build.scss';

function Build() {
    return (
        <div className='build' id='build' >
            <div className="build_start">
                <h1>Build applications <span>faster</span></h1>
                <p>Hire experts & get your job done. The right IT security solutions. Protect your clients and computer systems from hackers and fight againts malware.</p>
                <p className='build_start-p' >For as low as <span>$0.95</span> per user account</p>
                <div className="build_start_btns">
                    <div className="build_start-modal">
                        <ModalBuild />
                    </div>
                    <BtnViolet title={'START NOW'} />
                </div>
            </div>
            <div className="build_simulador">
                <Simulador />
            </div>
        </div>
    );
}

export default Build;
