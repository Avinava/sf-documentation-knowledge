---
title: "Writing Tests"
domain: apex-guide
topic: writing-tests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.579Z
estimatedTokens: 575
keywords: [Writing, Tests, Testing, key, successful, long-term, development, critical, component, process, strongly, recommend, test-driven, test, occurs]
---

# Writing Tests

> Testing is the key to successful long-term development and is a critical component of
        the development process. We strongly recommend that you use a test-driven
            development process, that is, test development that occurs at the same time as
        code development.

# Writing Tests

Testing is the key to successful long-term development and is a critical component of the development process. We strongly recommend that you use a test-driven development process, that is, test development that occurs at the same time as code development.

To facilitate the development of robust, error-free code, Apex supports the creation and execution of unit tests. Unit tests are class methods that verify whether a particular piece of code is working properly. Unit test methods take no arguments, commit no data to the database, and send no emails. Such methods are flagged with the @IsTest annotation in the method definition. Unit test methods must be defined in test classes, that is, classes annotated with @IsTest.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The @IsTest annotation on methods is equivalent to the testMethod keyword. As best practice, Salesforce recommends that you use @IsTest rather than testMethod. The testMethod keyword may be versioned out in a future release.

In addition, before you deploy Apex or package it for the AppExchange, the following must be true.

-   Unit tests must cover at least 75% of your Apex code, and all of those tests must complete successfully.

    Note the following.

    -   When deploying Apex to a production organization, each unit test in your organization namespace is executed by default.
    -   Calls to System.debug aren’t counted as part of Apex code coverage.
    -   Test methods and test classes aren’t counted as part of Apex code coverage.
    -   While only 75% of your Apex code must be covered by tests, don’t focus on the percentage of code that is covered. Instead, make sure that every use case of your application is covered, including positive and negative cases, as well as bulk and single records. This approach ensures that 75% or more of your code is covered by unit tests.
-   Every trigger must have some test coverage.
-   All classes and triggers must compile successfully.

For more information on writing tests, see [Testing Apex](atlas.en-us.apexcode.meta/apexcode/apex_testing.htm "Apex provides a testing framework that allows you to write unit tests, run your tests, check test results, and have code coverage results.").

## Related Topics

- Testing Apex (atlas.en-us.apexcode.meta/apexcode/apex_testing.htm)
