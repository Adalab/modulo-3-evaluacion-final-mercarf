import React from 'react';

const Filters = (props) => {
  // Recogemos el valor introducido en el input y lo pasamos por lifting al componente manejador App
  const handleFilterName = (ev) => {
    ev.preventDefault();

    props.handleFilterName({
      key: 'FilterName',
      value: ev.target.value,
    });
  };

  // Prevenimos las acciones por defecto, como que refresque al pulsar tecla enter
  const preventDefaultActions = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className='form' onSubmit={preventDefaultActions}>
      <label className='form__label' htmlFor='filterName'>
        Busca tu personaje favorito:
      </label>
      <input
        type='text'
        className='form__label__input'
        id='filterName'
        value={props.filterName}
        onChange={handleFilterName}
        placeholder='Nombre del personaje'
      ></input>
    </form>
  );
};

export default Filters;
