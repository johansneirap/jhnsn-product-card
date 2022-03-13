import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtonsCounter } from '../src/components';

const product = {
  id: '1',
  title: 'Coffe Mug Card!'
};

const App = () => {
  return (
    <div>
      <ProductCard
        product={ product }
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {
          ({ reset, increaseBy, count }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtonsCounter />
            </>
          )
        }
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
