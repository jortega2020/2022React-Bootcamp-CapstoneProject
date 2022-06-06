import React from "react";
import PropTypes from "prop-types";
import { ContentBox, ContentGrid } from "../../styles/grid";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ products }) => {
  return (
    <>
    <ContentBox>
      <ContentGrid>
        {products.map(({ id, data }) => (
          <ProductCard 
            key={id}
            name={data.name}
            image={data.mainimage.url}
            alt={data.mainimage.alt}
            price={data.price}
            category={data.category.slug}
            />
        ))}
      </ContentGrid>
    </ContentBox>
    </>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};
