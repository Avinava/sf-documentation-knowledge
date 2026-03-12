---
title: "DebuggingHeader"
domain: api
topic: debuggingheader
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.702Z
estimatedTokens: 484
keywords: [DebuggingHeader, debug, log, output, DebuggingInfo, specify, level, detail, API, Calls, LogInfo]
---

# DebuggingHeader

> Return the debug log in the output header, DebuggingInfo, and specify the level of detail in the debug
      log.

# DebuggingHeader

Return the debug log in the output header, DebuggingInfo, and specify the level of detail in the debug log.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

Calls that include DebuggingHeader are limited to 1,000 in a 24-hour period. You can continue to make these calls even after reaching the total request limit for an org.

## API Calls

[compileAndTest()](atlas.en-us.api.meta/api/sforce_api_calls_compileandtest.htm "Compile and test your Apex in a single call."), [executeanonymous()](atlas.en-us.api.meta/api/sforce_api_calls_executeanonymous.htm), [runTests()](atlas.en-us.api.meta/api/sforce_api_calls_runtests.htm)

## Fields

| Element Name | Type | Description |
| --- | --- | --- |
| categories | LogInfo[] | Specifies the type and amount of information to be returned in the debug log. |
| debugLevel | DebugLevel (enumeration of type string) | Deprecated. This field is provided only for backward compatibility. If you provide values for both debugLevel and categories, the categories value is used.The debugLevel field specifies the type of information returned in the debug log. The values are listed from the least amount of information returned to the most information returned. Valid values include:NoneDebugonlyDbProfilingCalloutDetail |

## LogInfo

Specifies the type and amount of information to be returned in the debug log. The categories field takes a list of these objects. LogInfo is a mapping of category to level.

## Fields

| Element Name | Type | Description |
| --- | --- | --- |
| category | LogCategory | Specify the type of information returned in the debug log. Valid values are:DbWorkflowValidationCalloutApex_codeApex_profilingVisualforceSystemAll |
| level | LogCategoryLevel | Specifies the level of detail returned in the debug log.Valid log levels are (listed from lowest to highest):NONEERRORWARNINFODEBUGFINEFINERFINEST |

## Related Topics

- compileAndTest() (atlas.en-us.api.meta/api/sforce_api_calls_compileandtest.htm)
- executeanonymous() (atlas.en-us.api.meta/api/sforce_api_calls_executeanonymous.htm)
- runTests() (atlas.en-us.api.meta/api/sforce_api_calls_runtests.htm)
