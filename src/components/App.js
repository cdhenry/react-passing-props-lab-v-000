import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    };
  }

  componentDidMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  handleChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  render() {
    return (
      <FruitBasket
        filters={this.state.filters}
        fruit={this.state.fruit}
        currentFilter={this.state.currentFilter}
        handleChange={this.handleChange}
      />
    )
  }
}

export default App;
