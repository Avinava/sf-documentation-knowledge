---
title: "ExecuteAnonymousResult"
domain: api
topic: executeanonymousresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.269Z
estimatedTokens: 299
keywords: [ExecuteAnonymousResult, executeanonymous, call, whether, compile, run, code, successful]
---

# ExecuteAnonymousResult

> The executeanonymous() call returns information
			about whether or not the compile and run of the code was successful.

# ExecuteAnonymousResult

The [executeanonymous()](atlas.en-us.api.meta/api/sforce_api_calls_executeanonymous.htm) call returns information about whether or not the compile and run of the code was successful.

An ExecuteAnonymousResult object has the following properties:

| Name | Type | Description |
| --- | --- | --- |
| column | int | If compiled is False, this field contains the column number of the point where the compile failed. |
| compileProblem | string | If compiled is False, this field contains a description of the problem that caused the compile to fail. |
| compiled | boolean | If True, the code was successfully compiled. If False, the column, line, and compileProblem fields are not null. |
| exceptionMessage | string | If success is False, this field contains the exception message for the failure. |
| exceptionStackTrace | string | If success is False, this field contains the stack trace for the failure. |
| line | int | If compiled is False, this field contains the line number of the point where the compile failed. |
| success | boolean | If True, the code was successfully executed. If False, the exceptionMessage and exceptionStackTrace values are not null. |

## Related Topics

- executeanonymous() (atlas.en-us.api.meta/api/sforce_api_calls_executeanonymous.htm)
