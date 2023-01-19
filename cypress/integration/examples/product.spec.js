

describe('Product Api tests', () => {

    beforeEach(() => {
        cy.login();
    });
    
    it('Get - Show listing of products based on scenario id', () => {
    
    cy.request({
    
    method: 'GET',
    
    //url: "http://tst.finmark.com/api/v1/products?scenarioId=${window.sessionStorage.getItem('scenarioId')",

    url: `${Cypress.env('serverUrl')}/api/v1/products?scenarioId=${window.sessionStorage.getItem('scenarioId')}`,
    
    failOnStatusCode: false,
    
    headers: {
    
    'content-type': 'application/json',
    
    'Authorization': `Bearer ${window.sessionStorage.getItem('jwt')}`
    
    }
    
    }).then((response) => {
    
    expect(response.status).to.eq(200);
    
    });
    
    });
    
    it('Try to add product with incorrect freuency no.', () => {
    
    cy.request({
    
    method: 'POST',
    
    url: `${Cypress.env('serverUrl')}/api/v1/products?scenarioId=${window.sessionStorage.getItem('scenarioId')}`,
    
    failOnStatusCode: false,
    
    headers: {
    
    'content-type': 'application/json',
    
    'Authorization': `Bearer ${window.sessionStorage.getItem('jwt')}`
    
    },
    
    body: {
    
    id: 0,
    
    name: 'POC Product 01',
    
    pricingPlans: [
    
    {
    
    churnRate: 10,
    
    frequency: 7, // Incorrect frequency no.
    
    id: 0,
    
    price: 100
    
    }

    ]
    
    }
    
    }).then((response) => {
    
    expect(response.status).to.eq(500);
    
    expect(response.body.error).has.property(
    
    'errorMessage',
    
    'Something went wrong'
    
    );
    
    });
    
    });
});