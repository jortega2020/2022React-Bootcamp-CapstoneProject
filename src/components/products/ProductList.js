import React from "react";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardOptionsNote,
  CardImage,
} from "../../styles/cards";
import PropTypes from "prop-types";
import { Content1 } from "../../styles/grid";

export const ProductList = ({ products }) => {
  return (
    <>
      {products.map(({ id, data }) => (
        <><Content1 key={id}>
              <CardWrapper>
                  <CardHeader>
                      <CardHeading>{data.title}</CardHeading>
                  </CardHeader>
                  <CardBody>
                      <CardFieldset>
                          <CardImage src={data.mainimage.url} alt={data.mainimage.alt} />
                      </CardFieldset>
                      <CardFieldset>
                          <CardOptionsNote>{data.category.slug}</CardOptionsNote>
                      </CardFieldset>
                      <CardFieldset>
                          <CardOptionsNote>${data.price}</CardOptionsNote>
                      </CardFieldset>
                  </CardBody>
              </CardWrapper>
          </Content1><br /></>
      ))}
    </>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};
