/// <reference types="cypress" />
import Constants from '../../../src/constants';

describe('Testing App', () => {
  it('renders learn react link', () => {
    cy.visit(Constants.URL);
  });
});
