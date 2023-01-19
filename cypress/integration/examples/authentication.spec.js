import jwtDecode from 'jwt-decode';



Cypress.Commands.add('login', () => {

    cy.request({
    
    method: 'POST',
    
    url: `${Cypress.env('serverUrl')}/api/v1/authenticate`,
    //url: "http://tst.finmark.com/api/v1/authenticate",
    body: {
    
    email: Cypress.env('email'),
    
    password: Cypress.env('password')
    
    }
    
    }).then((response) => {
    
    const { jwtToken, identityToken } = response.body;
    
    const { companies, scenarios } = jwtDecode(jwtToken);
    
    window.sessionStorage.setItem('jwt', jwtToken);
    
    window.sessionStorage.setItem('identityToken', identityToken);
    
    const [[scenarioId, scenario]] = Object.entries(scenarios);
    console.log(scenarios);
    console.log(scenarioId);
    
    window.sessionStorage.setItem('companyId', scenario.companyId);
    
    window.sessionStorage.setItem('scenarioId', scenarioId);
    
    });
    
    });