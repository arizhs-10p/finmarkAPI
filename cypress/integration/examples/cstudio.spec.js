describe('My test', () => {
 it('Finmark',() => {
 cy.visit('/')

 cy.contains('type').click()
     //cy.get('.products').find('.product').eq(0).click()
     cy.get('[data-testid=email]')
    .type(Cypress.env('email'))
   cy.get('[data-testid=password]')
   .type(Cypress.env('password'))
   //.should('have.value', 'fake@email.com')
   cy.get('[data-testid=submit]').click()
   //cy.wait(2000)
   //cy.get(':nth-child(2) > [data-testid=submit]').click()
   //cy.wait(3000)
   //cy.get('[data-testid=mainNav-expenses] > div > .TheMainNavigation_ItemIcon').click()
   //cy.wait(2000)
   //cy.get('[data-testid=add-expense-button-trigger]').click()
   //cy.wait(2000)
   //cy.get('[data-testid=add-expense-item]').click()
   //cy.get('[data-testid=add-expense-department]').select('2')
   //cy.get('[data-testid=add-expense-item-title]').type("Exp1")
   //cy.get('[data-testid=expense-type]').select('3')
   //cy.get('[data-testid=formula-field]').type(100)
   //cy.get('[data-testid=expense-frequency]').select('0')
   //cy.wait(2000)
   //cy.get('[data-testid=add-expense-save]').click()
   
   //cy.get('.FormField_Input')
   //cy.get('[data-testid=mainNav-employees] > div > .TheMainNavigation_ItemIcon').click()
   //cy.get('[data-testid=mainNav-expenses] > div > .TheMainNavigation_ItemIcon').click()
   //cy.get('[data-testid=add-employee-button-trigger]').click()
   //cy.get('[data-testid=add-employee-option]').click()
   //cy.wait(2000)
   //cy.get('[data-testid=add-employee-department]').select('2')

   // cy.get('.CompanySelectionPage_CompanyInfoCards').find('.CompanyInfoCard_Details')
   // .each(($el, index, $list) => {
   //   //cy.get('.CompanyInfoCard').find('.Button Button Button-success').as('cic')
   //   if($el.find('.CompanyInfoCard_Label').text()=='Ariz')
   //   {
   //       cy.log('inside if')
   //       //console.log($el)
   //       cy.wrap($el).find('.Button Button Button-success')
   //       //$el.find('.product-action').click()
   //   }
   //   cy.log('else')

   // })
 })

 /* === Test Created with Cypress Studio === */
 it('CsLoginEmployee', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://tst.finmark.com/');
  cy.get('[data-testid=email]').type('cy{backspace}{backspace}bu4970@10pearls.com');
  cy.get('[data-testid=password]').type('10@Pearls');
  cy.get('[data-testid=submit]').click();
  cy.get('[data-testid=mainNav-employees] > div > .TheMainNavigation_ItemIcon').click();
  /* ==== End Cypress Studio ==== */
 });
})
    