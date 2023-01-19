describe('Pricing',()=>{
    beforeEach(()=>{
        cy.login();
    });
    it('GET-READ Price',()=>{
        cy.request({
            url: `${Cypress.env('serverUrl')}/api/v1/products?scenarioId=${window.sessionStorage.getItem('scenarioId')}`,
            failOnStatusCode: false,
            method: "GET",
         
            headers: {
                Authorization: `Bearer ${window.sessionStorage.getItem('jwt')}`
               },
        }).then((response) => {
            expect(response.status).to.eq(200);
        })
     
    })
})