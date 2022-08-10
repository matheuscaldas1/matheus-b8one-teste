import React from 'react';

import ButtonAdd from '../ButtonAdd';
import './styles.css';

const Card: React.FC = () => {
    return (
        <div className='main'>
            <div className='div-img'>
                <img
                    src='https://comps.unlistedimages.com/ulcomp/CSP/CSP700/k7005198.jpg'
                    alt='monitor'
                />
            </div>
            <div className='div-text'>
                <p className='description'>
                    Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50
                </p>
                <div>
                    <p className='preco-antigo'>R$ 2.813,99</p>
                    <h6 className='preco-atual'>R$ 2.499,00</h6>
                    <p className='parcelas'>
                        em até <strong>10x de R$ 259,90</strong> sem juros
                    </p>
                </div>
                <ButtonAdd />
            </div>
        </div>
    );
}

export default Card;
