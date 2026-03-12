---
title: "RunTestsRequest"
domain: api
topic: runtestsrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:57.515Z
estimatedTokens: 814
keywords: [RunTestsRequest, Apex, code, tested, part, CompileAndTestRequest, passed, compileAndTest, call, Tooling, SOAP, API, runTests, specify, different]
---

# RunTestsRequest

> Specifies information about the Apex code to be tested. RunTestsRequest is part of CompileAndTestRequest, which is the request passed
			to the compileAndTest() call. This object is also
			passed to the Tooling SOAP API call runTests(). You
			can specify the same or different classes to be tested 

# RunTestsRequest

Specifies information about the Apex code to be tested. RunTestsRequest is part of [CompileAndTestRequest](atlas.en-us.api.meta/api/sforce_api_calls_compileandtest_request.htm), which is the request passed to the [compileAndTest()](atlas.en-us.api.meta/api/sforce_api_calls_compileandtest.htm "Compile and test your Apex in a single call.") call. This object is also passed to the Tooling SOAP API call runTests(). You can specify the same or different classes to be tested and compiled. Since triggers cannot be tested directly, they are not included in this object. Instead, you must specify a class that calls the trigger.

If the request is sent to a production organization, this request is ignored and all unit tests defined for your organization are run.

The RunTestsRequest object has the following properties:

| Name | Type | Description |
| --- | --- | --- |
| allTests | boolean | If allTests is true, all unit tests defined for your organization are run. |
| classes | string[] | An array of one or more objects. |
| namespace | string | If specified, the namespace that contains the unit tests to be run. Do not use this property if you specify allTests as true. Also, if you execute compileAndTest() in a production organization, this property is ignored, and all unit tests defined for the organization are run. |
| maxFailedTests | int | A mandatory parameter for the Tooling SOAP API call runTests(). To allow all tests in a run to execute, set maxFailedTests to -1. To stop the test run from executing new tests after a given number of tests fail, set maxFailedTests to an integer value from 0 to 1,000,000. This integer value sets the maximum allowable test failures. A value of 0 causes the test run to stop if any failure occurs. A value of 1 causes the test run to stop on the second failure, and so on. |
| packages | string[] | Do not use after version 10.0. For earlier, unsupported releases, the content of the package to be tested. |
| skipCodeCoverage | boolean | Indicates whether to opt out of collecting code coverage information during Apex test runs. Available in API version 43.0 and later. |
| tests | TestsNode[] | A mandatory parameter for the Tooling SOAP API call runTests(). Specifies individual test methods in an Apex test class.To specify classes or suites instead of a TestsNode[], set tests to null.Although this property accepts an array, the array can contain only one entry. |

## TestsNode

Specifies individual test methods in an Apex test class.

| Name | Type | Description |
| --- | --- | --- |
| classId | string | DescriptionThe ID of the Apex class that contains the test methods you want to run.classId or className is required.Supported MethodsgetClassId()setClassId(new String "<your class ID>") |
| className | string | DescriptionThe name of the Apex class that contains the test methods you want to run.To run tests from a managed package, include the package’s namespace using dot notation.classId or className is required.Supported MethodsgetClassName()setClassName(new String "YourClassName") |
| testMethods | string[] | DescriptionThe test methods you want to run.Required.Supported MethodsgetTestMethods()setTestMethods(new String[] {"testMethod1", "testMethod2"})) |

## Related Topics

- CompileAndTestRequest (atlas.en-us.api.meta/api/sforce_api_calls_compileandtest_request.htm)
- compileAndTest() (atlas.en-us.api.meta/api/sforce_api_calls_compileandtest.htm)
