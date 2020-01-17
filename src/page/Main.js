import React, { Component } from 'react';
import DatePicker from '../component/common/Datepicker';
import fetchMiddleware from '../library/HttpRequest';
import IngredientList from '../component/common/IngredientList';
import ReceipesList from '../component/common/ReceipesList';

class Index extends Component {

  state = {
    choosenDate: new Date(),
    ingredients: [],
    recipes: []
  }

  getDate = choosenDate => {
    this.setState({
      choosenDate
    });
  }

  getIngredients = async () => {
    const url = 'https://a61d556b-57ca-423f-8706-2e8dec75d714.mock.pstmn.io/ingredients';
    let ingredientsResponse = await fetchMiddleware({
      url,
      method: 'get',
    })

    if(ingredientsResponse.status === 200){
      await this.setState({ingredients: ingredientsResponse.data});
    }
  }

  getRecipes = async (checkedIngredient) => {

    const url = 'https://a61d556b-57ca-423f-8706-2e8dec75d714.mock.pstmn.io/recipes?ingredients='+checkedIngredient;
    console.log(url);
    let recipesResponse = await fetchMiddleware({
      url,
      method: 'get',
    })

    if(recipesResponse.status === 200){
      await this.setState({recipes: recipesResponse.data});
    }

  }

  

  render() {
    return (
      <div className="row">
        <div className="col-md-2 pull-left">
          <DatePicker id="mainDatePicker" onChange={this.getDate} />
        </div>
        <div className="col-md-1 pull-left">
          <input type="submit" name="Search" onClick={this.getIngredients} />
        </div>
        <div className="col-md-3 pull-left">
            <IngredientList 
              ingredientData={this.state.ingredients} 
              getRecipes={this.getRecipes}
              />
        </div>
        <div className="col-md-3 pull-left">
            <ReceipesList recipesData={this.state.recipes} />
        </div>
      </div>
    );
  }
}

export default Index;