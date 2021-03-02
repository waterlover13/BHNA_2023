import React from "react"


import { Wrapper, ProductName, ProductPrice, StyledImg, ProductDetails, ImgWrapper } from "./Product.styles"

const Product = ({ image, productName, productPrice }) =>  (
        <Wrapper>
            <ImgWrapper>
            
            <StyledImg image={image} alt="Product Image" />
            </ImgWrapper>
            <ProductDetails>
            <ProductName>{productName}</ProductName>
            <ProductPrice>{productPrice}</ProductPrice>
            </ProductDetails>
        </Wrapper>
    )


export default Product