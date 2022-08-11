import React from 'react';

import ButtonAdd from '../ButtonAdd';
import ButtonWishlist from '../ButtonWishlist';

import { ProductType } from '../../types';
import './styles.css';

const Card: React.FC<ProductType> = ({
    id, img, isAdd, isWishlisted, name, new_price, old_price, portion
}) => {
    return (
        <div className='main'>
            <div className='div-img'>
                <ButtonWishlist />
                <img
                    src={img}
                    alt={`monitor ${id}`}
                />
            </div>
            <div className='div-text'>
                <p className='description'>
                    {name}
                </p>
                <div>
                    <p className='preco-antigo'>R$ {old_price}</p>
                    <h6 className='preco-atual'>R$ {new_price}</h6>
                    <p className='parcelas'>
                        em até <strong>{portion}</strong> sem juros
                    </p>
                </div>
                <ButtonAdd />
            </div>
        </div>
    );
}

export default Card;
