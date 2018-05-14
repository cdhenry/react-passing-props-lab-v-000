import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ filters, fruit, handleChange, currentFilter }) =>
      <div className="fruit-basket">
        <Filter filters={filters} handleChange={handleChange} />
        <FilteredFruitList fruit={fruit}
          filter={currentFilter} />
      </div>;

FruitBasket.defaultProps = {
  filters: [],
  fruit: [],
  handleChange: null,
  currentFilter: null,
  updateFilterCallback: null
};

export default FruitBasket;
