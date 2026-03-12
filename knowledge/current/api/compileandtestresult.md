---
title: "CompileAndTestResult"
domain: api
topic: compileandtestresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.817Z
estimatedTokens: 1079
keywords: [CompileAndTestResult, compileAndTest, call, compile, unit, test, run, Apex, including, whether, succeeded, failed, CompileClassResult, CompileTriggerResult, DeleteApexResult]
---

# CompileAndTestResult

> The compileAndTest() call returns information
			about the compile and unit test run of the specified Apex, including whether it
			succeeded or failed.

# CompileAndTestResult

The [compileAndTest()](atlas.en-us.api.meta/api/sforce_api_calls_compileandtest.htm "Compile and test your Apex in a single call.") call returns information about the compile and unit test run of the specified Apex, including whether it succeeded or failed.

A CompileAndTestResult object has the following properties:

| Name | Type | Description |
| --- | --- | --- |
| classes | CompileClassResult | Information about the success or failure of the compileAndTest() call if classes were being compiled. |
| deleteClasses | DeleteApexResult | Information about the success or failure of the compileAndTest() call if classes were being deleted. |
| deleteTriggers | DeleteApexResult | Information about the success or failure of the compileAndTest() call if triggers were being deleted. |
| runTestsResult | RunTestsResult | Information about the success or failure of the Apex unit tests, if any were specified. |
| success | boolean | If true, all of the classes, triggers, and unit tests specified ran successfully. If any class, trigger, or unit test failed, the value is false, and details are reported in the corresponding result object:CompileClassResultCompileTriggerResultDeleteApexResultRunTestsResult |
| triggers | CompileTriggerResult | Information about the success or failure of the compileAndTest() call if triggers were being compiled. |

## CompileClassResult

This object is returned as part of a [compileAndTest()](atlas.en-us.api.meta/api/sforce_api_calls_compileandtest.htm "Compile and test your Apex in a single call.") or [compileClasses()](atlas.en-us.api.meta/api/sforce_api_calls_compileclasses.htm) call. It contains information about whether or not the compile and run of the specified Apex was successful.

A CompileClassResult object has the following properties:

| Name | Type | Description |
| --- | --- | --- |
| bodyCrc | int | The CRC (cyclic redundancy check) of the class or trigger file. |
| column | int | The column number where an error occurred, if one did. |
| id | ID | An ID is created for each compiled class. The ID is unique within an organization. |
| line | int | The line number where an error occurred, if one did. |
| name | string | The name of the class. |
| problem | string | The description of the problem if an error occurred. |
| success | boolean | If true, the class or classes compiled successfully. If false, problems are specified in other properties of this object. |

## CompileTriggerResult

This object is returned as part of a [compileAndTest()](atlas.en-us.api.meta/api/sforce_api_calls_compileandtest.htm "Compile and test your Apex in a single call.") or [compileTriggers()](atlas.en-us.api.meta/api/sforce_api_calls_compiletriggers.htm "Compile your Apex triggers in Developer Edition or sandbox organizations.") call. It contains information about whether or not the compile and run of the specified Apex was successful.

A CompileTriggerResult object has the following properties:

| Name | Type | Description |
| --- | --- | --- |
| bodyCrc | int | The CRC (cyclic redundancy check) of the trigger file. |
| column | int | The column where an error occurred, if one did. |
| id | ID | An ID is created for each compiled trigger. The ID is unique within an organization. |
| line | int | The line number where an error occurred, if one did. |
| name | string | The name of the trigger. |
| problem | string | The description of the problem if an error occurred. |
| success | boolean | If true, all the specified triggers compiled and ran successfully. If the compilation or execution of any trigger fails, the value is false. |

## DeleteApexResult

This object is returned when the [compileAndTest()](atlas.en-us.api.meta/api/sforce_api_calls_compileandtest.htm "Compile and test your Apex in a single call.") call returns information about the deletion of a class or trigger.

A DeleteApexResult object has the following properties:

| Name | Type | Description |
| --- | --- | --- |
| id | ID | ID of the deleted trigger or class. The ID is unique within an organization. |
| problem | string | The description of the problem if an error occurred. |
| success | boolean | If true, all the specified classes or triggers were deleted successfully. If any class or trigger is not deleted, the value is false. |

## Related Topics

- compileAndTest() (atlas.en-us.api.meta/api/sforce_api_calls_compileandtest.htm)
- RunTestsResult (atlas.en-us.api.meta/api/sforce_api_calls_runtests_result.htm)
- compileClasses() (atlas.en-us.api.meta/api/sforce_api_calls_compileclasses.htm)
- compileTriggers() (atlas.en-us.api.meta/api/sforce_api_calls_compiletriggers.htm)
