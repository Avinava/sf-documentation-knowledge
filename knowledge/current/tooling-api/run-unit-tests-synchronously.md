---
title: "Run Unit Tests Synchronously"
domain: tooling-api
topic: run-unit-tests-synchronously
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:44.317Z
estimatedTokens: 1922
keywords: [Run, Unit, Tests, Synchronously, Test, Runner, API, execute, Apex, flow, tests, synchronously., test, synchronous, run, must, same, class., version, 30.0]
---

# Run Unit Tests Synchronously

> Use the Test Runner API to execute one or more Apex or flow tests synchronously. All
  test methods in a synchronous test run must be in the same class. Available for Apex tests in API
  version 30.0 and later. Available for automated flow tests in API version 65.0 and
  later.

# Run Unit Tests Synchronously

Use the Test Runner API to execute one or more Apex or flow tests synchronously. All test methods in a synchronous test run must be in the same class. Available for Apex tests in API version 30.0 and later. Available for automated flow tests in API version 65.0 and later.

In API version 40.0 and later, running Apex tests synchronously using the POST method for /runTestsSynchronous/ requires the View Setup user permission.

## Syntax

URI

/services/data/vXX.X/tooling/runTestsSynchronous/

HTTPS Method

POST

Authentication

Authorization: Bearer token

Format

JSON

Request Parameters

None.

Request Body Properties

| Name | Type | Description |
| --- | --- | --- |
| tests | Object[] | Required. An array that contains a test object. The test object includes the Apex or flow test class name, the Apex test class ID, and optionally methods in that class to run. Only one test object is allowed in the array.For definitions of properties that the test object can include, see the next table. |
| maxFailedTests | String | Optional. Specifies the maximum failed Apex tests allowed to run as an integer value from "0" to "1,000,000".If not specified, all Apex tests run regardless of the number of tests that have passed or failed.A value of "0" causes the test run to stop if any failure occurs. A value of "1" causes the test run to stop on the second failure, and so on. High values can cause slow performance. Each 1,000 tests that you add to your maxFailedTests value adds about three seconds to your test run, not including the time that the tests take to execute.maxFailedTests doesn’t support flow tests. Flow tests that fail during a test run aren’t included in the maxFailedTests count. |
| skipCodeCoverage | String | Optional. Specifies whether to opt out of collecting code coverage information during the test run ("true") or to collect code coverage information ("false").If not specified, the default value is "false". |

The test object in the tests array can include these properties.

| Name | Type | Description |
| --- | --- | --- |
| className | String | Required if classId isn’t included. The namespace prefix of the test class, followed by a period (.) and the name of the test class. For example, "customNamepacePrefix.TestClassName".For Apex tests that don’t originate from namespaced packages or orgs, omit the namespace. For example, "TestClassName".All flow tests are in the FlowTesting namespace, and the flow test class name is the API name of the flow. Therefore, for a flow test that doesn’t originate from a namespaced package or org, specify the className value as "FlowTesting.flowName". For a flow test in a namespaced package or org, specify the className value as "FlowTesting.customNamepacePrefix.flowName". |
| classId | String | Required if className isn’t included. The Salesforce ID of the Apex test class.classId doesn’t support flow tests. |
| testMethods | String[] | Optional. The names of methods in a test class to run. If not specified, all methods in the test class are run.For a flow test, includes the API name of the flow followed by an underscore (_) and the API name of the flow test. For example, FlowName_UpdateRecordFlowTest.Multiple occurrences of a test method name in a testMethods array are ignored. Test methods that don’t exist are skipped. |

Response Body Properties

| Name | Type | Description |
| --- | --- | --- |
| apexLogId | String | The ID of the ApexLog object that contains information about the test run if debug logging is enabled. If debug logging disabled, the apexLogId is null. |
| codeCoverage | CodeCoverageResult[] | If skipCodeCoverage is "true" or the test run only contains flow tests, returns an empty array.If skipCodeCoverage is "false" and the test run contains Apex tests, returns an array of CodeCoverageResult objects that contain the details of the code coverage for the specified unit tests. |
| codeCoverageWarnings | CodeCoverageWarning[] | If skipCodeCoverage is "true" or the test run only contains flow tests, returns an empty array.If skipCodeCoverage is "false" and the test run contains Apex tests, returns an array of CodeCoverageWarning objects that contain both the total number of lines that could have been executed, as well as the number, line, and column positions of code that was not executed. |
| failures | Object[] | An array of objects that represents test methods that failed during the test run. |
| flowCoverage | FlowCoverageResult[] | If skipCodeCoverage is "true" or the test run only contains Apex tests, returns an empty array.If skipCodeCoverage is false and the test run contains flow tests, returns an array of FlowCoverageResult objects that contain information about the flow version and the number of elements executed by the test run. |
| flowCoverageWarnings | FlowCoverageWarning[] | If skipCodeCoverage is "true" or the test run only contains Apex tests, returns an empty array.If skipCodeCoverage is false and the test run contains flow tests, returns an array of FlowCoverageWarning objects that contain information about the flow version that generated warnings. |
| numFailures | Integer | The number of test methods that failed during the test run. |
| numTestsRun | Integer | The total number test methods that were run. |
| successes | Object[] | An array of objects that represents test methods that succeeded during the test run. |
| totaltime | Integer | The total duration of the test run in milliseconds. |

Each failures and successes array is comprised of objects that represent test methods. Each test object has these properties.

| Name | Type | Description |
| --- | --- | --- |
| id | String | The Salesforce ID of the test method. |
| methodName | String | The name of the test method.For a flow test, the methodName value is the API name of the flow test. |
| name | String | The name of the test class.For a flow test, the name value is the API name of the flow. |
| namespace | String | The namespace prefix of the test class that contains the test method.For a flow test that originates from a namespaced package or org, the namespace value is "FlowTesting.NamespacePrefix".For an Apex or flow test that doesn’t originate from a namespaced package or org, the namespace value is null. |
| seeAllData | Boolean | Indicates whether the test method was allowed to access all record data in the org during the test run (true) or not (false).For Apex tests, the seeAllData value is set with the isTest(SeeAllData=True) annotation on the Apex test class or method. For automated flow tests, the seeAllData value is always true. |
| time | Integer | The time it took the test method to run, in milliseconds. |

The failures array can also contain these properties.

| Name | Type | Description |
| --- | --- | --- |
| message | String | The error message that the failed test returns. |
| stackTrace | String | The location of the exception in the failed test. |
| type | String | For internal use only. Possible values are: Class |

## Example

Example Request Body

```

```

Example Response Body

{ "apexLogId": null, "codeCoverage": \[\], "codeCoverageWarnings": \[\], "failures": \[\], "flowCoverage": \[\], "flowCoverageWarnings": \[\], "numFailures": 0, "numTestsRun": 2, "successes": \[ { "id": "07Mxx00000000NuEAI", "methodName": "TestUpdateDescriptionDeleted", "name": "UpdateAccountDescriptionFlow", "namespace": "FlowTesting.PkgNs1", "seeAllData": true, "time": 12 }, { "id": "07Mxx00000000NtEAI", "methodName": "TestAccountDescriptionHasWords", "name": "UpdateAccountDescriptionFlow", "namespace": "FlowTesting.PkgNs1", "seeAllData": true, "time": 129 } \], "totalTime": 12189 }

## Code Examples

```
{
  "tests": [
    {
      "className": "FlowTesting.pkgNs1.UpdateAccountDescriptionFlow",
      "testMethods": ["UpdateAccountDescriptionFlow_TestUpdateDescriptionDeleted",
                      "UpdateAccountDescriptionFlow_TestAccountDescriptionHasWords"]
    }
  ],
  "maxFailedTests": "2",
  "skipCodeCoverage": "true"
}
```
