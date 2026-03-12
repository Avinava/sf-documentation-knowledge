---
title: "DebuggingHeader"
domain: tooling-api
topic: debuggingheader
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:43.543Z
estimatedTokens: 479
keywords: [DebuggingHeader, deployment, result, debug, log, output, level, detail, included, Apex, tests, executed, part, Version, Calls]
---

# DebuggingHeader

> Specifies that the deployment result contains the debug log output, and specifies the
        level of detail included in the log. The debug log contains the output of Apex tests that
        are executed as part of a deployment.

# DebuggingHeader

Specifies that the deployment result contains the debug log output, and specifies the level of detail included in the log. The debug log contains the output of Apex tests that are executed as part of a deployment.

## Version

This header is available in all API versions.

## Supported Calls

deploy()

## Fields

| Field Name | Type | Description |
| --- | --- | --- |
| categories | LogInfo[] | A list of log categories with their associated log levels. |
| debugLevel | LogType (enumeration of type string) | Deprecated. This field is provided only for backward compatibility. If you provide values for both debugLevel and categories, the categories value is used.The debugLevel field specifies the type of information returned in the debug log. The values are listed from the least amount of information returned to the most information returned. Valid values include:NoneDebugonlyDbProfilingCalloutDetail |

## LogInfo

Specifies the type and amount of information to be returned in the debug log. The categories field takes a list of these objects. LogInfo is a mapping of category to level.

| Element Name | Type | Description |
| --- | --- | --- |
| category | LogCategory | Specify the type of information returned in the debug log. Valid values are:DbWorkflowValidationCalloutApex_codeApex_profilingVisualforceSystemAll |
| level | LogCategoryLevel | Specifies the level of detail returned in the debug log.Valid log levels are (listed from lowest to highest):NONEERRORWARNINFODEBUGFINEFINERFINEST |

## Sample Code—Java

Add the DebuggingHeader to the metadata connection before you perform the deploy() call as follows.

```

```

The result of the deploy() call is obtained by calling checkDeployStatus(). After the deployment finishes, and if tests were run, the response of checkDeployStatus() contains the debug log output in the debugLog field of a DebuggingInfo output header.

## Code Examples

```
LogInfo[] logs = new LogInfo[1];
logs[0] = new LogInfo();
logs[0].setCategory(LogCategory.Apex_code);
logs[0].setLevel(LogCategoryLevel.Fine);
metadataConnection.setDebuggingHeader(logs);
```
