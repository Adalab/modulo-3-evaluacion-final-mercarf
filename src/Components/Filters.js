import React from 'react';

const Filters = (props) => {
  // Recogemos el valor introducido en el input y lo pasamos por lifting al componente manejador App
  const handleFilterName = (ev) => {
    props.handleFilters({
      key: 'FilterName',
      value: ev.target.value,
    });
  };
  const handleFilterSpecies = (ev) => {
    props.handleFilters({
      key: 'FilterSpecies',
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
      <div>
        <label htmlFor='filterSpecies1' className='Human'>
          <input
            id='filterSpecies1'
            type='checkbox'
            value='Human'
            name='filterSpecies'
            onChange={handleFilterSpecies}
          />
          Humano
        </label>
        <label htmlFor='filterSpecies2' className='Alien'>
          <input
            id='filterSpecies2'
            type='checkbox'
            value='Alien'
            name='filterSpecies'
            onChange={handleFilterSpecies}
          />
          Alien
        </label>
      </div>
    </form>
  );
};

export default Filters;
