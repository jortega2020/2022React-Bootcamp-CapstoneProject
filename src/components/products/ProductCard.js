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
import { Content } from "../../styles/grid";

export const ProductCard = ({
    name,
    image,
    alt,
    price,
    category,
 }) => {
  return (
    <>
        <Content>
              <CardWrapper>
                  <CardHeader>
                      <CardHeading>{name}</CardHeading>
                  </CardHeader>
                  <CardBody>
                      <CardFieldset>
                          <CardImage src={image} alt={alt} />
                      </CardFieldset>
                      <CardFieldset>
                          <CardOptionsNote>{category}</CardOptionsNote>
                      </CardFieldset>
                      <CardFieldset>
                          <CardOptionsNote>${price}</CardOptionsNote>
                      </CardFieldset>
                  </CardBody>
              </CardWrapper>
          </Content>
    </>
  );
};

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
};
