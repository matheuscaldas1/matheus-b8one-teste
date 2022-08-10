import React, { useCallback, useState } from 'react';

import './styles.css'

const ButtonAdd: React.FC = () => {
    const [isAdd, setIsAdd] = useState(false);

    const handleAdicionar = useCallback(() => {
        setIsAdd(!isAdd);
    }, [isAdd]);

    return (
        <>
            {isAdd
                ? <button
                    className='add-to-cart adicionado'
                    onClick={handleAdicionar}>✓ adicionado</button>
                : <button
                    className='add-to-cart default'
                    onClick={handleAdicionar}>adicionar</button>
            }
        </>
    );
}

export default ButtonAdd;
