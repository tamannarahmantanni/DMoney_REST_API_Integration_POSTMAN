
# Dmoney REST API Testing Project

## Project Overview
This project involves testing the *Dmoney REST API* to validate its functionalities, identify issues and provide suggestions for improvement. The testing focuses on creating, managing and handling transactions between various user roles like(Admin,System User,Agent,Customers,Merchant).

---
## Tools and Technology
Postman
Newman
Nodejs
VSCode

---
## Tasks and Deliverables

### 1. *Test Cases*
Created *test cases* for the following scenarios:
Admin creates an Agent, 2 Customers, and a Merchant.
System deposits money to the Agent.
Agent deposits money to a Customer.
Check Agent's balance.
Send money between Customers.
Customer withdraws money to the Agent.
Check Customer's balance and transaction statement.
Customer makes a payment to a Merchant.
Check balances and transaction statements for Customers and the Merchant.
Standard Format of Test Cases: [TestCase.xlsx](https://github.com/user-attachments/files/17960963/TestCase.xlsx)
---

### 2. *Newman Report*
Generated a report of all test cases using Newman.
Included summary screenshots of the execution.


View the Newman report screenshots below:
Newman Report: ![Screenshot (163)](https://github.com/user-attachments/assets/dce908bd-ae5e-4d0f-a351-9f63cd45719f)

---


### 3. *Bug Report*
Reported *Bug or Improvements* in a Google Sheet, with details such as:
Issue Type (Bug/Improvement)
Issue Title
Description and Steps to Reproduce
Actual vs Expected Results
Priority and Severity
Attachments with screenshots


*To see the bug report:* Bug Report:  [BugReport.xlsx](https://github.com/user-attachments/files/17961617/BugReport.xlsx)
---
## Follow these instructions to set up and run the project locally.

This project is designed to test the Dmoney REST API using JavaScript. It utilizes Node.js to run the test scripts and I provide a step-by-step guide for anyone to clone and run the project on their machine.





### Prerequisites

Ensure you have the following installed on your machine:  
[Node.js](https://nodejs.org/) (version 14.x or later)  
[Git](https://git-scm.com/)


### Installation

1. *Clone the Repository*  
   Open your terminal and run:  
   git clone https://github.com/niloycsejnu/Dmoney-REST-API-Testing.git

2. *Navigate to the Project Directory*  
   Change your working directory to the cloned repository:  
   cd Dmoney-REST-API-Testing

3. *Install Dependencies*  
   Install the required dependencies using npm:  
   npm install

### Running the Project

Run the Report.js script using Node.js in the terminal:  
npx newman run "copy & paste published collection link without inverted comma"
Then 
node Report.js
