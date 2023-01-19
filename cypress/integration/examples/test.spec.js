/// <reference types="Cypress" />

const cypress = require("cypress")

describe('My test', () => {
    it('Visits Rahul shetty',() => {
    cy.visit('/')

    //cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    //cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
    
    cy.get('.search-keyword').type('ca')
    
    cy.wait(2000)
    //cy.get('.products').find('.product').should('have.length',4).eq(1).find('.product-name').should('have.text','Carrot - 1 Kg')
    //cy.get('.products').find('.product').should('have.length',4).eq(1).find('.product-action').click()
    cy.log('Initial');
    cy.get('.products').find('.product').as('PRoductList')
    cy.get('@PRoductList').each(($el, index, $list) => {
      if($el.find('.product-name').text()=='Carrot - 1 Kg')
      {
          cy.log('inside if')
          console.log($el)
          cy.wrap($el).find('.product-action').click()
          //$el.find('.product-action').click()
      }
    })
    cy.log('after if');
    //cy.get('.products').find('.product').eq(0).click()
    //   .type('bu3112@yopmail.com')
    //   cy.get('[data-testid=password]')
    //   .type('10@Pearls')
    //   //.should('have.value', 'fake@email.com')
    //   cy.get('[data-testid=submit]').click()
    //*   cy.get(':nth-child(1) > [data-testid=submit]').click()
      
    })
})