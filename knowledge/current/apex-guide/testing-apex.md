---
title: "Testing Apex"
domain: apex-guide
topic: testing-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.033Z
estimatedTokens: 814
keywords: [Testing, Apex, framework, write, unit, tests, run, check, test, results, code, coverage]
---

# Testing Apex

> Apex provides a testing framework that allows you to write unit tests, run your
        tests, check test results, and have code coverage results.

# Testing Apex

Apex provides a testing framework that allows you to write unit tests, run your tests, check test results, and have code coverage results.

Let's talk about unit tests, data visibility for tests, and the tools that are available on the Lightning platform for testing Apex. We'll also describe testing best practices and a testing example.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

To protect the privacy of your data, make sure that test error messages and exception details don’t contain any personal data. The Apex exception handler and testing framework can’t determine if sensitive data is contained in user-defined messages and details. To include personal data in custom Apex exceptions, we recommend that you create an Exception subclass with new properties that hold the personal data. Then, don’t include subclass property information in the exception's message string.

-   **[Understanding Testing in Apex](atlas.en-us.apexcode.meta/apexcode/apex_testing_intro.htm)**

-   **[What to Test in Apex](atlas.en-us.apexcode.meta/apexcode/apex_testing_what.htm)**

-   **[What Are Apex Unit Tests?](atlas.en-us.apexcode.meta/apexcode/apex_testing_unit_tests.htm)**

-   **[Understanding Test Data](atlas.en-us.apexcode.meta/apexcode/apex_testing_data.htm)**
    Apex test data is transient and isn’t committed to the database.
-   **[Run Unit Test Methods](atlas.en-us.apexcode.meta/apexcode/apex_testing_unit_tests_running.htm)**
    To verify the functionality of your Apex code, execute unit tests. You can run Apex test methods in the Developer Console, in Setup, in the Salesforce extensions for Visual Studio Code, or using the API.
-   **[Testing Best Practices](atlas.en-us.apexcode.meta/apexcode/apex_testing_best_practices.htm)**

-   **[Testing Example](atlas.en-us.apexcode.meta/apexcode/apex_testing_example.htm)**

-   **[Testing and Code Coverage](atlas.en-us.apexcode.meta/apexcode/apex_code_coverage_intro.htm)**
    The Apex testing framework generates code coverage numbers for your Apex classes and triggers every time you run one or more tests. Code coverage indicates how many executable lines of code in your classes and triggers have been exercised by test methods. Write test methods to test your triggers and classes, and then run those tests to generate code coverage information.
-   **[Code Coverage Best Practices](atlas.en-us.apexcode.meta/apexcode/apex_code_coverage_best_pract.htm)**
    Consider the following code coverage tips and best practices.
-   **[Build a Mocking Framework with the Stub API](atlas.en-us.apexcode.meta/apexcode/apex_testing_stub_api.htm)**
    Apex provides a stub API for implementing a mocking framework. A mocking framework has many benefits. It can streamline and improve testing and help you create faster, more reliable tests. You can use it to test classes in isolation, which is important for unit testing. Building your mocking framework with the stub API can also be beneficial because stub objects are generated at runtime. Because these objects are generated dynamically, you don’t have to package and deploy test classes. You can build your own mocking framework, or you can use one built by someone else.

## Related Topics

- Understanding Testing in Apex (atlas.en-us.apexcode.meta/apexcode/apex_testing_intro.htm)
- What to Test in Apex (atlas.en-us.apexcode.meta/apexcode/apex_testing_what.htm)
- What Are Apex Unit Tests? (atlas.en-us.apexcode.meta/apexcode/apex_testing_unit_tests.htm)
- Understanding Test Data (atlas.en-us.apexcode.meta/apexcode/apex_testing_data.htm)
- Run Unit Test Methods (atlas.en-us.apexcode.meta/apexcode/apex_testing_unit_tests_running.htm)
- Testing Best Practices (atlas.en-us.apexcode.meta/apexcode/apex_testing_best_practices.htm)
- Testing Example (atlas.en-us.apexcode.meta/apexcode/apex_testing_example.htm)
- Testing and Code Coverage (atlas.en-us.apexcode.meta/apexcode/apex_code_coverage_intro.htm)
- Code Coverage Best Practices (atlas.en-us.apexcode.meta/apexcode/apex_code_coverage_best_pract.htm)
- Build a Mocking Framework with the Stub API (atlas.en-us.apexcode.meta/apexcode/apex_testing_stub_api.htm)
