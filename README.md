# Jhnsn - Product Card

This is a package for testing deploy to NPM

### Johans Neira

## Ex:
```
import { ProductCard, ProductImage, ProductTitle, ProductButtonsCounter } from 'jhnsn-product-card';
```


``` 
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
```