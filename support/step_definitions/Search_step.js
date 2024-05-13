/// <reference types="cypress" />

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import searchPage from "../pages/Search_page";


Given ("I accessed the agiBank blog", ()=>{
  searchPage.accessPage();

});

When ("searching for a specific post", ()=>{
  searchPage.clickLoopSearch();
  searchPage.searchMateria();

});

Then ("I see the success message", ()=>{
  searchPage.sucessMessage();

});

Given ("I'm on the search screen", ()=>{
  searchPage.accessPage();
 
});

When ("searching for a subject that does not exist", ()=>{
  searchPage.clickLoopSearch();
  searchPage.searchMateriaNotExist();
  
});

Then ("I see the error message", ()=>{
  searchPage.errorMessage();
  
});
