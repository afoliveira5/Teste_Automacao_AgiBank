/// <reference types = "Cypress" />
import { ELEMENTS as el } from "../elementsMapping/Search_elements";
import "cypress-iframe";

class searchPage {
  accessPage() {
    cy.visit("/");

  };

  clickLoopSearch(){
    cy.get(el.searchLoop).click();
    
  };

  searchMateria(){
    cy.get(el.Search).type('FGTS{enter}');

  };

  searchMateriaNotExist(){
    cy.get(el.Search).type('abaporjuuitiba{enter}');

  };

  sucessMessage(){
    cy.contains(el.sucessMessage, 'Resultados encontrados para: FGTS').should('be.visible');
 
   };

  errorMessage(){
   cy.contains(el.errorMessage, 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.').should('be.visible');

  };
  
}
export default new searchPage();
