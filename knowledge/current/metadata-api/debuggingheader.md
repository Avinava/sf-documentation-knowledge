---
title: "DebuggingHeader"
domain: metadata-api
topic: debuggingheader
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:38.587Z
estimatedTokens: 592
keywords: [DebuggingHeader, Specifies, deployment, result, contains, debug, log, output, specifies, level, detail, included, log., Apex, tests, executed, part, deployment., Version, Supported]
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

[deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.")

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

The result of the [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.") call is obtained by calling [checkDeployStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm "Checks the status of declarative metadata call deploy()."). After the deployment finishes, and if tests were run, the response of checkDeployStatus() contains the debug log output in the debugLog field of a DebuggingInfo output header.

## Code Examples

```
LogInfo[] logs = new LogInfo[1];
logs[0] = new LogInfo();
logs[0].setCategory(LogCategory.Apex_code);
logs[0].setLevel(LogCategoryLevel.Fine);
metadataConnection.setDebuggingHeader(logs);
```

## Related Topics

- deploy() (atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- checkDeployStatus() (atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm)
