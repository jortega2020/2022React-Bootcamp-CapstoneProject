import React from 'react'
import  FeaturedBanners from '../../data/mocks/en-us/featured-banners';
import  FeaturedProducts from '../../data/mocks/en-us/featured-products';
import { Main } from '../../styles/grid';
import { Slider } from '../../components/UI/Slider';
import { ProductList } from '../products/ProductList';

export const HomePage = () => {
    const banners = FeaturedBanners.results;
    const products = FeaturedProducts.results;
    return (
        <>
            <Main>
                <Slider Banners={banners}/>
            </Main>
            <ProductList products={products} />
        </>
    )
}
