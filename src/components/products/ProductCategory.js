import React from 'react'
import PropTypes from 'prop-types';

export const ProductCategory = ({
    category,
}) => {
    return (
        <div>
            <h1>Product Category</h1>
            <hr />
        </div>
    )
}

ProductCategory.propTypes = {
    category: PropTypes.array.isRequired,
}
