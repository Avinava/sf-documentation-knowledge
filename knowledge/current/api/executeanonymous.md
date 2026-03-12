---
title: "executeanonymous()"
domain: api
topic: executeanonymous
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.264Z
estimatedTokens: 272
keywords: [executeanonymous, Executes, block, Apex, Usage, Arguments]
---

# executeanonymous()

> Executes a block of Apex.

# executeanonymous()

Executes a block of Apex.

## Syntax

```

```

## Usage

Use this call to execute an anonymous block of Apex. This call can be executed from AJAX.

This call supports the API [DebuggingHeader](atlas.en-us.api.meta/api/sforce_api_header_debuggingheader.htm "Return the debug log in the output header, DebuggingInfo, and specify the level of detail in the debug log.") and [SessionHeader](atlas.en-us.api.meta/api/sforce_api_header_sessionheader.htm "Specifies the session ID returned from the login server after a successful login(). This session ID is used in all subsequent calls.").

If a component in a package with restricted API access issues this call, the request is blocked.

Apex classes and triggers saved (compiled) using API version 15.0 and higher produce a runtime error if you assign a String value that is too long for the field.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| apexcode | string | A block of Apex. |

## Response

[ExecuteAnonymousResult](atlas.en-us.api.meta/api/sforce_api_calls_executeanonymous_result.htm)\[\]

## Code Examples

```
ExecuteAnonymousResult[] = binding.executeanonymous(string apexcode);
```

## Related Topics

- ExecuteAnonymousResult (atlas.en-us.api.meta/api/sforce_api_calls_executeanonymous_result.htm)
- DebuggingHeader (atlas.en-us.api.meta/api/sforce_api_header_debuggingheader.htm)
- SessionHeader (atlas.en-us.api.meta/api/sforce_api_header_sessionheader.htm)
