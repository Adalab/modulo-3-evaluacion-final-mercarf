import React from 'react';

const Filters = (props) => {
  const handleFilterName = (ev) => {
    ev.preventDefault(); //prevenimos las acciones por defecto, como que refresque al pulsar tecla enter

    props.handleFilterName({
      key: 'FilterName',
      value: ev.target.value,
    });
  };
  const preventDefaultActions = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className='form' onSubmit={preventDefaultActions}>
      <label className='form__label'>
        Busca tu personaje favorito:
        <input
          type='text'
          className='form__label__input'
          id='filterName'
          value={props.filterName}
          onChange={handleFilterName}
          placeholder='Nombre del personaje'
        ></input>
      </label>
    </form>
  );
};

export default Filters;
