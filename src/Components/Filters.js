import React from 'react';

const Filters = (props) => {
  // Recogemos el valor introducido en el input y lo pasamos por lifting al componente manejador App
  const handleFilterName = (ev) => {
    props.handleFilters({
      key: 'filterName',
      value: ev.target.value,
    });
  };
  const handleFilterSpecies = (ev) => {
    props.handleFilters({
      key: 'filterSpecies',
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
        <fieldset>
          <label htmlFor='order' className='order'>
            <input
              id='order'
              type='checkbox'
              value='order'
              name='order'
              // onChange={handleFilterSpecies}
            />
            Ordenar Afabéticamente
          </label>
          <div>
            <label htmlFor='filterSpecies' className='form__label '>
              Especie:
            </label>
            <select
              id='filterSpecies'
              value={props.filterSpecies}
              onChange={handleFilterSpecies}
            >
              <option value='all'>Todas</option>
              <option value='Human'>Humano</option>
              <option value='Alien'>Alien</option>
            </select>
          </div>

          <div>
            <label htmlFor='filterStatus' className='form__label '>
              Estado vital:
            </label>
            <select
              id='filterStatus'
              // value={props.filterPrice}
              // onChange={handleFilterPrice}
            >
              <option value='all'>Todos</option>
              <option value='Alive'>Vivo</option>
              <option value='Death'>Muerto</option>
              <option value='unknown'>Desconocido</option>
            </select>
          </div>
          <div>
            <label htmlFor='filterGender' className='form__label '>
              Género:
            </label>
            <select
              id='filterGender'
              // value={props.filterPrice}
              // onChange={handleFilterPrice}
            >
              <option value='all'>Todos</option>
              <option value='Female'>Femenino</option>
              <option value='Male'>Masculino</option>
            </select>
          </div>
        </fieldset>
      </div>
    </form>
  );
};

export default Filters;
