// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import jwtDecode from 'jwt-decode';



Cypress.Commands.add('login', () => {

    cy.request({
    
    method: 'POST',
    
    url: `${Cypress.env('serverUrl')}/api/v1/authenticate`,

    //url: "http://tst.finmark.com/api/v1/authenticate",
    body: {
    emailAddress: Cypress.env('email'),
    password: Cypress.env('password')
    }
    
    }).then((response) => {
    
    const { jwtToken, identityToken } = response.body;
    
    const { companies, scenarios } = jwtDecode(jwtToken);
    
    window.sessionStorage.setItem('jwt', jwtToken);
    
    window.sessionStorage.setItem('identityToken', identityToken);
    
    const [[scenarioId, scenario]] = Object.entries(scenarios);
    
    window.sessionStorage.setItem('companyId', scenario.companyId);
    
    window.sessionStorage.setItem('scenarioId', scenarioId);
    
    });
    
    });