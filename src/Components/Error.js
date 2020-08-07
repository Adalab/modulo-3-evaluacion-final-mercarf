import React from 'react';
import { Link } from 'react-router-dom';

const ErrorMessagePage = (props) => {
  return (
    <div>
      <span>
        No hay ningún personaje que coincida con la palabra introducida
      </span>
      <Link to='/'>
        <span className='content__title__icon far fa-arrow-alt-circle-left'>
          Atrás
        </span>
      </Link>
    </div>
  );
};

export default ErrorMessagePage;
