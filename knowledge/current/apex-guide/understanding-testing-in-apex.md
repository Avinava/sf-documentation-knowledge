---
title: "Understanding Testing in Apex"
domain: apex-guide
topic: understanding-testing-in-apex
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:34.056Z
estimatedTokens: 580
keywords: [Understanding, Testing, Apex, key, successful, long-term, development, critical, component, process., strongly, recommend, test-driven, process, test, occurs, same, time, code, development.]
---

# Understanding Testing in Apex

> Testing is the key to successful long-term development and is a
    critical component of the development process. We strongly recommend that you use a
     test-driven development process, that is, test development that occurs at the same
    time as code development.

# Understanding Testing in Apex

Testing is the key to successful long-term development and is a critical component of the development process. We strongly recommend that you use a test-driven development process, that is, test development that occurs at the same time as code development.

## Why Test Apex?

Testing is key to the success of your application, particularly if your application is to be deployed to customers. If you validate that your application works as expected, that there are no unexpected behaviors, your customers are going to trust you more.

There are two ways of testing an application. One is through the Salesforce user interface, important, but merely testing through the user interface will not catch all of the use cases for your application. The other way is to test for bulk functionality: up to 200 records can be passed through your code if it's invoked using SOAP API or by a Visualforce standard set controller.

An application is seldom finished. You will have additional releases of it, where you change and extend functionality. If you have written comprehensive tests, you can ensure that a regression is not introduced with any new functionality.

Before you can deploy your code or package it for the Salesforce AppExchange, the following must be true.

-   Unit tests must cover at least 75% of your Apex code, and all of those tests must complete successfully.

    Note the following.

    -   When deploying Apex to a production organization, each unit test in your organization namespace is executed by default.
    -   Calls to System.debug aren’t counted as part of Apex code coverage.
    -   Test methods and test classes aren’t counted as part of Apex code coverage.
    -   While only 75% of your Apex code must be covered by tests, don’t focus on the percentage of code that is covered. Instead, make sure that every use case of your application is covered, including positive and negative cases, as well as bulk and single records. This approach ensures that 75% or more of your code is covered by unit tests.
-   Every trigger must have some test coverage.
-   All classes and triggers must compile successfully.

Salesforce runs all tests in all organizations that have Apex code to verify that no behavior has been altered as a result of any service upgrades.
