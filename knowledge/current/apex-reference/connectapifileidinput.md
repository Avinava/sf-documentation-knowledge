---
title: "ConnectApi.FileIdInput"
domain: apex-reference
topic: connectapifileidinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:24.927Z
estimatedTokens: 235
keywords: [ConnectApi.FileIdInput, Attach, file, already, uploaded, remove, feed, element.]
---

# ConnectApi.FileIdInput

> Attach a file that has already been uploaded or remove a file from a
      feed element.

# ConnectApi.FileIdInput

Attach a file that has already been uploaded or remove a file from a feed element.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of a file that has already been uploaded. | Required | 36.0 |
| operationType | ConnectApi.​OperationType | Operation to carry out on the file. Values are:Add—Adds the file to the feed element.Remove—Removes the file from the feed element.Remove operations are processed before Add operations. Adding content that is already added and removing content that is already removed result in no operation. | OptionalIf not specified, defaults to Add. | 36.0 |

#### See Also

-   [ConnectApi.FilesCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_multiple_content_capability.htm "Attach up to 10 files that have already been uploaded or remove one or more files from a feed element.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​OperationType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.FilesCapabilityInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_multiple_content_capability.htm)
