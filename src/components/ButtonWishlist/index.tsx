import React, { useCallback, useState } from 'react';

import { ReactComponent as HeartSvg } from '../../assets/heart.svg';
import { ReactComponent as HeartOutlinedSvg } from '../../assets/heartOutline.svg';
import './styles.css'

const ButtonWishlist: React.FC = () => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    const handleWishlist = useCallback(() => {
        setIsWishlisted(!isWishlisted);
    }, [isWishlisted]);

    return (
        <>
            {isWishlisted
                ? <button
                    className='wishlist adicionado'
                    onClick={handleWishlist}>
                    <div className='div-icon'>
                        <HeartSvg />
                    </div>
                </button>
                : <button
                    className='wishlist default'
                    onClick={handleWishlist}>
                    <div className='div-icon'>
                        <HeartOutlinedSvg />
                    </div>
                </button>
            }

        </>
    );
}

export default ButtonWishlist;
