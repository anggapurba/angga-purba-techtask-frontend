import React, { Component } from 'react';

class IngredientList extends Component {

  constructor(props) {
    super(props);

    this.state = {
        checkedItems: new Map(),
        checkedItemsValue: new Map(),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    this.setState(prevState => ({
        checkedItemsValue: prevState.checkedItemsValue.set(value, isChecked)
    }));
  };

  getRecipes = async () => {
    
    let checkedIngredient = "";
    const{
      ingredientData,
      getRecipes
    } = this.props;

    
    ingredientData.map((item, index) => (
      (this.state.checkedItemsValue.get(item.title))? 
        checkedIngredient += item.title+","
        :
        null
    ))

    checkedIngredient = checkedIngredient.replace(/,\s*$/, "")

    getRecipes(checkedIngredient);


  }

  render() {
    const{
      ingredientData,
      choosenTimeStampDate,
      formatDateTimeStamp
    } = this.props;

    if(ingredientData.length <1 ){
      return null;
    }

    return (
      <div>
      <ul>
        <i><b>Checkbox akan muncul jika tanggal lebih kecil dari use-bay</b></i>
        {ingredientData.map(item => (
        <li id={item.title} key={item.title}>
          <div>
          {
            (choosenTimeStampDate >= (new Date(item['use-by']).getTime()/1000) )? (
              null
            ) : (
              <input 
              onChange={this.handleChange}
              type="checkbox" 
              name="chooseIngredient" 
              value={item['title']} /> 
            )
          }
            
            {item['title']} {item['use-by']}
            </div>
        </li>
        ))}
      </ul>
      <input type="submit" name="getRecipes" onClick={this.getRecipes} value="Get recipes" />
      </div>
      
      );
  }
}

export default IngredientList;