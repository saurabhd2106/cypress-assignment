/// <reference types="cypress" />

describe ("Alert Handling", function() {

    beforeEach(()=>{
        cy.visit("https://test.qatechhub.com/alert-handling/")
    })

    it("Handle Alert", ()=> {

        //Handling Normal Alerts
        cy.get("#NormalAlert").click()

        cy.on("window:alert", (str)=> {
            expect(str).to.equal("Hello! I am an alert box!")
        })

        //Handling Custom alerts
        cy.get("#CustomAlert").click()

        cy.on("window:confirm", (str)=> {
            expect(str).to.equal("Press a button!")

            return false
        })

    })
})