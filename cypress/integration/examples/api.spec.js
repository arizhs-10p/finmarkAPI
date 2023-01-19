
describe('Api Testing',() => {
 //   it('GET-read',()=>{
   //     cy.request('GET','http://dummy.restapiexample.com/api/v1/employees').then((response)=>{
     //       expect(response).to.have.property('status',200)
       // })
    //})

//it('POST-create',()=>{
  //  const item = {"name":"test","salary":"123","age":"23"}
//cy.request('POST','http://dummy.restapiexample.com/api/v1/create', item )
//.its('body')
//.its('data')
//.should('include', {name:'test'})

//})
it('GET-read',()=>{

cy.request({
    url: "http://tst.finmark.com/api/v1/fundraise?scenarioId=2600",
    method: "GET",
    headers: {
     Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJidTMwMTRAMTBwZWFybHMuY29tIiwiZXhwIjoxNjM3MjMxNzk0LCJpYXQiOjE2MzcyMTczOTQsImp0aSI6IjUyYjI1ZGY4LTBhMmQtNGU5OS1iZTQyLWFiZDA5MjdkZWFhZiJ9.pDX47CL_qOxPKAMBf4ETyVNR_6UkWKhm30SOhBMalFUnSPY8AvetQU1bb-w5lbCXZVdXPgZfSKEOXTDLvDK82A'
    },
})
.its("status")
.should("eql", 200)
})

})