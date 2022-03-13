import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components'
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('debe mostrar el componente correctamente con el titulo personalizado', () => { 
      const wrapper = renderer.create(
          <ProductTitle title="Custom product" className="custom-class"/>
      );
      expect( wrapper.toJSON() ).toMatchSnapshot();
   });

   test('debe mostrar el componente con el nombre del producto', () => { 
       const wrapper = renderer.create(
           <ProductCard product={ product1 }>
               {
                   () => (
                       <ProductTitle title="Custom product" className="custom-class"/>
                   )
               }
           </ProductCard>
       );
       expect( wrapper.toJSON() ).toMatchSnapshot();
    })
});

