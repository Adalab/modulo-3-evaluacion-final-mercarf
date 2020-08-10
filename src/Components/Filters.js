import React, { useState } from 'react';

/* Este componente muestra el menú de filtrado */

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
  const handleFilterStatus = (ev) => {
    props.handleFilters({
      key: 'filterStatus',
      value: ev.target.value,
    });
  };
  const handleFilterGender = (ev) => {
    props.handleFilters({
      key: 'filterGender',
      value: ev.target.value,
    });
  };

  // Prevenimos las acciones por defecto, como que refresque al pulsar tecla enter
  const preventDefaultActions = (ev) => {
    ev.preventDefault();
  };

  const [activeCollapsible, setActiveCollapsible] = useState('');

  const changeCollapsible = (ev) => {
    const clickedFilterSection = ev.currentTarget.id;
    if (clickedFilterSection === activeCollapsible) {
      return setActiveCollapsible('');
    } else {
      return setActiveCollapsible(clickedFilterSection);
    }
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
      <div className='filter__section'>
        <div
          className='filter__section__box'
          id='collapsible'
          onClick={changeCollapsible}
        >
          <h3 className='filter__section__box__title'>Filtros</h3>
          <span className='filter__section__box__icon'>
            <i
              className={`fas fa-chevron-down ${
                activeCollapsible === 'collapsible' ? 'transform' : ''
              }`}
            />
          </span>
        </div>
        <fieldset
          className={`filter__section__field ${
            activeCollapsible === 'collapsible' ? 'notHidden' : ''
          }`}
        >
          <div className='filter-box'>
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

          <div className='filter-box'>
            <label htmlFor='filterStatus' className='form__label '>
              Estado vital:
            </label>
            <select
              id='filterStatus'
              value={props.filterStatus}
              onChange={handleFilterStatus}
            >
              <option value='all'>Todos</option>
              <option value='Alive'>Vivo</option>
              <option value='Dead'>Muerto</option>
              <option value='unknown'>Desconocido</option>
            </select>
          </div>
          <div className='filter-box'>
            <label htmlFor='filterGender' className='form__label '>
              Género:
            </label>
            <select
              id='filterGender'
              value={props.filterGender}
              onChange={handleFilterGender}
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
