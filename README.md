# cure_appointment_cypress
make appointment on cura app 
Automate use case with Cypress


### for generating report mochawesome Package is used
## To install mochawesome report : 
  1. npm install --save-dev mochawesome
  2. npm install --save-dev mocha
  
## Run with terminal
npx cypress run --spec cypress/integration/katalon_Appointment/cura.spec.js --browser=chrome


<h6> Update code in cypress.json file </h6>

<code>
{
    "_comment" : "To get an Beautiful report for our test case i will MochAwesome",
    "reporter" : "mochawesome",
    "reporterOptions" : {
        "reportDir" : "cypress/report/mochawesome-report",
        "overwrite" : true,
        "html" : true,
        "json" : false,
        "timestamp" : "mmddyyyy_HHMMss"
    }
}
</code>


