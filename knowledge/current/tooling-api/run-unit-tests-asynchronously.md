---
title: "Run Unit Tests Asynchronously"
domain: tooling-api
topic: run-unit-tests-asynchronously
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:36.971Z
keywords: [Run, Unit, Tests, Asynchronously, Syntax, Example]
---

# Run Unit Tests Asynchronously

# Run Unit Tests Asynchronously

Use the Test Runner API to execute Apex and flow tests asynchronously. Available for Apex tests in API version 30.0 and later. Available for automated flow tests in API version 65.0 and later.

## Syntax

URI

/services/data/vXX.X/tooling/runTestsAsynchronous/

HTTPS Method

POST

Authentication

Authorization: Bearer token

Format

JSON

Request Parameters

None.

Request Body Properties

There are two supported JSON request body formats.

-   You can run asynchronous tests according to the test level or test category. For Apex tests, you can specify test classes or test suites.
    
    | Name | Type | Description |
    | --- | --- | --- |
    | testLevel | String | Optional. Specifies the level of tests to run.If you set this property to a value other than RunSpecifiedTests, omit the classNames, classids, suitenames, and suiteids properties.If not specified, the default value is RunSpecifiedTests.Possible values are:RunLocalTests—run all tests in your org, except the ones that originate from installed managed packages.RunAllTestsInOrg—run all tests in your org, including tests in managed packages.RunSpecifiedTests—run only the test suites or classes that you specify. |
    | Category | String[] | Optional. Specifies the categories of tests to run.If not specified, tests in all categories are run.Possible array values are:Apex–run Apex tests.Flow–run flow tests. |
    | maxFailedTests | String | Optional. Specifies the maximum failed Apex tests allowed to run as an integer value from "0" to "1,000,000".If not specified, all Apex tests run regardless of the number of tests that have passed or failed.A value of "0" causes the test run to stop if any failure occurs. A value of "1" causes the test run to stop on the second failure, and so on. High values can cause slow performance. Each 1,000 tests that you add to your maxFailedTests value adds about three seconds to your test run, not including the time that the tests take to execute.maxFailedTests doesn’t support flow tests. Flow tests that fail during a test run aren’t included in the maxFailedTests count. |
    | skipCodeCoverage | String | Optional. Specifies whether to opt out of collecting code coverage information during the test run ("true") or to collect code coverage information ("false").If not specified, the default value is false. |
    | classNames | String | Optional. A comma-separated list of Apex and flow test classes. If not specified, all test classes in the org run, as long as they meet the criteria of the other specified property values.For Apex test classes, use the namespace prefix of the test class, followed by a period (.) and the name of the test class. For example, "customNamepacePrefix.TestClassName". For Apex tests that don’t originate from namespaced packages or orgs, omit the namespace. For example, "TestClassName".All flow tests are in the FlowTesting namespace, and the flow test class name is the API name of the flow. Therefore, for a flow test that doesn’t originate from a namespaced package or org, specify the className value as "FlowTesting.flowName". For a flow test in a namespaced package or org, specify the className value as "FlowTesting.customNamepacePrefix.flowName".classNames doesn’t support flow tests. |
    | classids | String | Optional. A comma-separated list of Apex test class IDs. If not specified, all Apex test classes run, as long as they meet the criteria of the other specified property values.classids doesn’t support flow tests. |
    | suiteNames | String | Optional. A comma-separated list of Apex test suite names. If not specified, all Apex test suites run, as long as they meet the criteria of the other specified property values.suiteNames doesn’t support flow tests. |
    | suiteids | Strings | Optional. A comma-separated list of Apex test suite IDs. If not specified, all Apex test suites run, as long as they meet the criteria of the other specified request properties.suiteids doesn’t support flow tests. |
    
-   Or, you can run asynchronous tests for specific test classes and methods. With this format, you can specify Apex and flow tests.
    
    | Name | Type | Description |
    | --- | --- | --- |
    | tests | Object[] | Required. An array of objects that represent tests to run. Each test object includes the test class name or test class ID and optionally methods in that class. |
    | maxFailedTests | String | Optional. Specifies the maximum failed Apex tests allowed to run as an integer value from "0" to "1,000,000".If not specified, all Apex tests run regardless of the number of tests that have passed or failed.A value of "0" causes the test run to stop if any failure occurs. A value of "1" causes the test run to stop on the second failure, and so on. High values can cause slow performance. Each 1,000 tests that you add to your maxFailedTests value adds about three seconds to your test run, not including the time that the tests take to execute.maxFailedTests doesn’t support flow tests. Flow tests that fail during a test run aren't included in the maxFailedTests count. |
    | skipCodeCoverage | String | Optional. Specifies whether to opt out of collecting code coverage information during the test run ("true") or to collect code coverage information ("false").If not specified, the default value is "false". |
    
    Each test object in the tests array can include these properties.
    
    | Name | Type | Description |
    | --- | --- | --- |
    | className | String | Required if classId isn’t included. The namespace prefix of the test class, followed by a period (.) and the name of the test class. For example, "customNamepacePrefix.TestClassName".For Apex tests that don’t originate from namespaced packages or orgs, omit the namespace. For example, "TestClassName".All flow tests are in the FlowTesting namespace, and the flow test class name is the API name of the flow. Therefore, for a flow test that doesn’t originate from a namespaced package or org, specify the className value as "FlowTesting.flowName". For a flow test in a namespaced package or org, specify the className value as "FlowTesting.customNamepacePrefix.flowName". |
    | classId | String | Required if className isn’t included. The Salesforce ID of the Apex test class.classId doesn’t support flow tests. |
    | testMethods | String[] | Optional. The names of methods in a test class to run. If not specified, all methods in the test class are run.For a flow test, includes the API name of the flow followed by an underscore (_) and the API name of the flow test. For example, FlowName_UpdateRecordFlowTest.Multiple occurrences of a test method name in a testMethods array are ignored. Test methods that don’t exist are skipped. |
    

Response Body Properties

| Name | Type | Description |
| --- | --- | --- |
| root | String | The AsyncApexJob ID that identifies the set of tests that were run. |

Usage

-   To view the test progress and a results summary, query [ApexTestRunResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apextestrunresult.htm) and filter by the AsyncApexJob ID.
-   To view detailed test results after the tests are completed, query [ApexTestResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apextestresult.htm) and filter by the ApexTestRunResult ID.
-   If you set skipCodeCoverage to false, code coverage for each test method is stored in the [ApexCodeCoverage](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_apexcodecoverage.htm) Tooling API object. See [Testing and Code Coverage](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_code_coverage_intro.htm).
    

## Example

Example Request Body: All Tests By Category

Run tests according to the test level and test category.

```

```

Example Request Body: Specific Tests

Execute specific test classes and methods.

```

```

Example Response Body

{"root": "707xx0000000bnbh"}