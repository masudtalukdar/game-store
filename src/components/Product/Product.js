import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
  const icon = <FontAwesomeIcon icon={faShoppingCart} />;
  const {
    title,
    developer,
    platform,
    publisher,
    release_date,
    genre,
    price,
    short_description,
    game_url,
    thumbnail,
  } = props.product;
  return (
    <div className='product-cart'>
      <div className='product'>
        <img src={thumbnail} alt='' />
        <div className='game-info'>
          <h3>Title: {title}</h3>
          <h3 className='cost'>
            <span>Cost: $ </span>
            {price}
          </h3>
          <h3>
            <span>publisher: {publisher}</span>
          </h3>
          <h3>developer: {developer}</h3>
          <h3>release_date: {release_date}</h3>
          <h3>{short_description}</h3>
          <h3 className='genre'>{genre}</h3>
          <h3>{platform}</h3>
        </div>

        <div className='btn'>
          <button className='gameInfo'>
            <a href={game_url}>Game Info</a>
          </button>
          <button
            onClick={() => props.handleAddToCart(props.product)}
            className='add-cart'
          >
            {icon} Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
