import React from 'react'
import  FeaturedBanners from '../../data/mocks/en-us/featured-banners';
import { Main } from '../../styles/grid';
import { Slider } from '../../components/UI/Slider';

export const HomePage = () => {
    const banners = FeaturedBanners.results;
    return (
        <>
            <Main>
                <Slider Banners={banners}/>
            </Main>  
        </>
    )
}
