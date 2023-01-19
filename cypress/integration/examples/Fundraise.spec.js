describe('Fundraise',()=>{
    beforeEach(()=>{
        cy.login();
    });



    
    it('GET-read',()=>{
        cy.request({
        
            
            url: `${Cypress.env('serverUrl')}/api/v1/fundraise?scenarioId=${window.sessionStorage.getItem('scenarioId')}`,
            //url: "http://tst.finmark.com/api/v1/fundraise?scenarioId=2382", 
            failOnStatusCode: false,
            method: "GET",
        
            headers: {
                Authorization: `Bearer ${window.sessionStorage.getItem('jwt')}`
               },
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
        
        
            });

            it('POST-Write',()=>{
                cy.request({
                
                    
                    url: `${Cypress.env('serverUrl')}/api/v1/fundraise?scenarioId=${window.sessionStorage.getItem('scenarioId')}`,
                    //url: "http://tst.finmark.com/api/v1/fundraise?scenarioId=2382", 
                    failOnStatusCode: false,
                    method: "POST",
                
                    headers: {
                        Authorization: `Bearer ${window.sessionStorage.getItem('jwt')}`
                       },
                       body: {
                        
                            "amount": 100,
                            "date": "2021-02",
                            "id": 0,
                            "name": "Cyp3",
                            "scenarioId": 2690
                          
                       }
                }).then((response) => {
                    expect(response.status).to.eq(200);
                });
                
                
                    });


});