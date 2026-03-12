---
title: "CompileAndTestRequest"
domain: api
topic: compileandtestrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.809Z
estimatedTokens: 422
keywords: [CompileAndTestRequest, compileAndTest, call, Apex, compiled]
---

# CompileAndTestRequest

> The compileAndTest() call contains this object, a request
      with information about the Apex to be compiled.

# CompileAndTestRequest

The [compileAndTest()](atlas.en-us.api.meta/api/sforce_api_calls_compileandtest.htm "Compile and test your Apex in a single call.") call contains this object, a request with information about the Apex to be compiled.

A CompileAndTestRequest object has the following properties:

| Name | Type | Description |
| --- | --- | --- |
| checkOnly | boolean | If set to true, the Apex classes and triggers submitted are not saved to your organization, whether or not the code successfully compiles and unit tests pass. |
| classes | string | Content of the class or classes to be compiled. |
| deleteClasses | string | Name of the class or classes to be deleted. |
| deleteTriggers | string | Name of the trigger or triggers to be deleted. |
| runTestsRequest | RunTestsRequest | Specifies information about the Apex to be tested. If this request is sent in a production organization, this property is ignored and all unit tests are run for your entire organization. |
| triggers | string | Content of the trigger or triggers to be compiled. |

Note the following about this object:

-   This object contains the [RunTestsRequest](atlas.en-us.api.meta/api/sforce_api_calls_runtests_request.htm) property. If the request is run in a production organization, the property is ignored and all tests are run.
-   If any errors occur during compile, delete, testing, or if the goal of 75% code coverage is missed, no classes or triggers are saved to your organization. This is the same requirement as Salesforce AppExchange package testing.
-   All triggers must have code coverage. If a trigger has no code coverage, no classes or triggers are saved to your organization.

## Related Topics

- compileAndTest() (atlas.en-us.api.meta/api/sforce_api_calls_compileandtest.htm)
- RunTestsRequest (atlas.en-us.api.meta/api/sforce_api_calls_runtests_request.htm)
