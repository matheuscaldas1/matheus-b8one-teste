import React, { useState } from 'react';

import Card from './components/Card';
import './global.css';
import { ProductType } from './types';

const App: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([
    {
      id: 1,
      name: `Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50`,
      old_price: '2.813,99',
      new_price: '2.599,00',
      portion: '10x de R$ 259,90',
      img: 'https://i.zst.com.br/thumbs/12/2/16/1416765976.jpg',
      isAdd: false,
      isWishlisted: false
    },
    {
      id: 2,
      name: `Monitor Gamer Curvo Samsung Odyssey 49" DQHD, 240Hz, 1ms, HDMI, Display Port, USB, G-Sync, FreeSync Premium Pro, com ajuste de altura, branco, série G9`,
      old_price: '11.798,00',
      new_price: '11.399,00',
      portion: '10x de R$ 1.139,90',
      img: 'https://images.samsung.com/is/image/samsung/br-odyssey-g9-lc49g95tsslxzd--308652483?$720_576_PNG$',
      isAdd: false,
      isWishlisted: false
    },
  ]);

  return (
    <div className='App'>
      {products.map(product => (
        <Card
          id={product.id}
          img={product.img}
          isAdd={product.isAdd}
          isWishlisted={product.isWishlisted}
          name={product.name}
          new_price={product.new_price}
          old_price={product.old_price}
          portion={product.portion}
          key={product.id}
        />
      ))}
    </div>
  );
}

export default App;
