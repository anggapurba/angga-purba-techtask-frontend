import React, { Component } from 'react';

class ReceipesList extends Component {

  render() {
    const{
      recipesData
    } = this.props;

    if(recipesData.length <1 ){
      return null;
    }

    return (
      <div>
      <ul>
        {recipesData.map(item => (
        <li id={item.title} key={item.title}>
          <div>
            <b>{item['title']}</b>
            {item.ingredients.map(ingredient => (
              <div key={ingredient} >
                {ingredient}
              </div>
            ))
            }       
          </div>
        </li>
        ))}
      </ul>
      </div>
      
      );
  }
}

export default ReceipesList;