import React from 'react'
import {FeatureContainer, FeatureButton} from './FeatureElements'

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Free fries and sauce when ordering</h1>
            <p>Choose ketchup or thousand islands sauce</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
