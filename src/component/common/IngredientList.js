import React, { Component } from 'react';

class IngredientList extends Component {

  render() {
    const{
      ingredientData
    } = this.props;

    console.log(ingredientData);
    return (
      <ul>
        {ingredientData.map(item => (
        <li key={item.title}>
          <div>{item['title']} {item['use-by']}</div>
        </li>
        ))}
      </ul>
    );
  }
}

export default IngredientList;