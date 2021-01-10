/// <reference types="cypress" />

describe('Cura Make Appointment',()=>{
    const comment = "Automating website with cypress automation framework"

    it('Visit Cura App Web Page',()=>{
        // Cura Appointment Website
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    });

    it('Go To Login Page',()=>{
        // Click Login Button
        // click on hamberger - .fa-bars
        cy.get('.fa-bars').click()

        // click on Login - #sidebar-wrapper > ul > li:nth-child(4) > a
        cy.get('#sidebar-wrapper > ul > li:nth-child(4) > a').click()
    })

    it('Login With Credential',()=>{
        let LoginID;
        let Password;

        // get input tag value attribute and store it in LoginID variable
        cy.get("input[aria-describedby='demo_username_label']").invoke('val').then((val)=>{
            LoginID = val

            // login - Login id
            cy.get("input[name='username']").type(LoginID)
            // cy.log(LoginID+'hi1')
        })

        // get input tag value attribute and store it in Password variable
        cy.get("input[aria-describedby='demo_password_label']").invoke('val').then((val) =>{
            Password = val

            // login - Password
            cy.get("input[name='password']").type(Password)
        })

        cy.get('#btn-login').click()
        

    });

    it('Make Appointment',()=>{
        // fill in the appointment Form

        // 1. Dropdown
        cy.get('#combo_facility').select('Seoul CURA Healthcare Center')

        // 2. select check Box
        cy.get('#chk_hospotal_readmission').click()

        // 3. select None Radio
        cy.get('#radio_program_none').click()

        // 4. Type Date
        cy.get('#txt_visit_date').type('13/03/2019')

        // 5. type comment
        cy.get('#txt_comment').click({ force:true })
        cy.get('#txt_comment').type(comment)

        // 6. book appointment
        cy.get('#btn-book-appointment').click()

        // appointment confiramtion screenshot
        cy.screenshot()
    });

    it('Verify Appointment',()=>{
        cy.get('h2').contains('Appointment Confirmation')
        cy.get('#comment').contains(comment)
    });
});