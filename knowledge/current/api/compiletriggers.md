---
title: "compileTriggers()"
domain: api
topic: compiletriggers
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.825Z
estimatedTokens: 288
keywords: [compileTriggers, Compile, Apex, triggers, Developer, Edition, sandbox, organizations, Usage, Arguments]
---

# compileTriggers()

> Compile your Apex triggers in Developer Edition or sandbox organizations.

# compileTriggers()

Compile your Apex triggers in Developer Edition or sandbox organizations.

## Syntax

```

```

## Usage

Use this call to compile the specified Apex triggers in your Developer Edition or sandbox organization. Production organizations must use [compileAndTest()](atlas.en-us.api.meta/api/sforce_api_calls_compileandtest.htm "Compile and test your Apex in a single call.").

This call supports the [DebuggingHeader](atlas.en-us.api.meta/api/sforce_api_header_debuggingheader.htm "Return the debug log in the output header, DebuggingInfo, and specify the level of detail in the debug log.") and the [SessionHeader](atlas.en-us.api.meta/api/sforce_api_header_sessionheader.htm "Specifies the session ID returned from the login server after a successful login(). This session ID is used in all subsequent calls.").

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| scripts | string | A request that includes the Apex trigger or triggers and the values for any fields that need to be set for this request. |

## Response

See [CompileTriggerResult](atlas.en-us.api.meta/api/sforce_api_calls_compileandtest_result.htm).

## Code Examples

```
CompileTriggerResult[] = compileTriggers(string[] triggerList);
```

## Related Topics

- CompileTriggerResult (atlas.en-us.api.meta/api/sforce_api_calls_compileandtest_result.htm)
- compileAndTest() (atlas.en-us.api.meta/api/sforce_api_calls_compileandtest.htm)
- DebuggingHeader (atlas.en-us.api.meta/api/sforce_api_header_debuggingheader.htm)
- SessionHeader (atlas.en-us.api.meta/api/sforce_api_header_sessionheader.htm)
