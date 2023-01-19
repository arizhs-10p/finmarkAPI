import jwtDecode from 'jwt-decode';

const cypress = require("cypress")

describe('API Testing',()=>{
    it('POST-auth',()=>{
cy.request({
   
    url: `${Cypress.env('serverUrl')}/api/v1/authenticate`,
    //url: "http://tst.finmark.com/api/v1/authenticate",
    failOnStatusCode: false,
    method: "POST",
    body: {
        emailAddress: Cypress.env('email'),
        password: Cypress.env('password')
    },
})
.then((response)=>{
    const {jwtToken, identityToken}=response.body;
    window.sessionStorage.setItem('abc', identityToken);

    window.sessionStorage.setItem('jwt', jwtToken);

    const { companies, scenarios } = jwtDecode(jwtToken);
    
    window.sessionStorage.setItem('identityToken', identityToken);
    
    const [[scenarioId, scenario]] = Object.entries(scenarios);
    console.log(scenarios);
    console.log(scenarioId);
    
    window.sessionStorage.setItem('companyId', scenario.companyId);
    
    window.sessionStorage.setItem('scenarioId', scenarioId);

    //window.sessionStorage.setItem()
})
    })
    it('GET-read',()=>{
cy.request({

    
    //url: `${Cypress.env('@@')}/api/v1/fundraise?scenarioId=2382`,
    //url: "http://tst.finmark.com/api/v1/fundraise?scenarioId=2382", 
    //url: "https://tst.finmark.com/api/v1/financing?startDate=2022-01&endDate=2022-11&scenarioId=2690&companyId=757",
    url: `${Cypress.env('serverUrl')}/api/v1/financing?startDate=2022-01&endDate=2022-11&scenarioId=${window.sessionStorage.getItem('scenarioId')}&companyId=${window.sessionStorage.getItem('companyId')}"`,
    failOnStatusCode: false,
    method: "GET",

    headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem('abc')}`
       },
       })    .then((response) => {
    
        expect(response.status).to.eq(200);
        
        });


    })
})