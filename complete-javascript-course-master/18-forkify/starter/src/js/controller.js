// https://forkify-api.herokuapp.com/v2

import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

// hot module swapping coming from parcel
// if (module.hot) {
//   module.hot.accept;
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    // 1) loading recipe
    await model.loadRecipe(id);

    // 2) rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // get search query
    const query = searchView.getQuery();
    if (!query) return;

    // load search results
    await model.loadSearchResults(query);

    // render results
    resultsView.render(model.getSearchResultsPage());

    // render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
};

const controlPagination = function (goToPage) {
  // loads new page of recipes
  resultsView.render(model.getSearchResultsPage(goToPage));

  // loads new pagination buttons associated with new page
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // update the recipe servings in the state
  model.updateServings(newServings);

  // update the recipe view
  recipeView.render(model.state.recipe);
};

// adds all the handlers to their respective listeners when the page loads, via pub-sub pattern
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerPageButton(controlPagination);
};
init();
