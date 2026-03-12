---
title: "SaveResult"
domain: metadata-api
topic: saveresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:42.564Z
estimatedTokens: 118
keywords: [SaveResult, Contains, result, information, createMetadata, updateMetadata, renameMetadata, call., Version]
---

# SaveResult

> Contains result information for
the createMetadata, updateMetadata, or renameMetadata call.

# SaveResult

Contains result information for the createMetadata, updateMetadata, or renameMetadata call.

## Version

Available in API version 30.0 and later.

## Properties

| Name | Type | Description |
| --- | --- | --- |
| errors | Error[] | An array of errors returned if the operation wasn't successful. |
| fullName | string | The full name of the component processed. |
| success | boolean | Indicates whether the operation was successful (true) or not (false). |

## Related Topics

- Error (atlas.en-us.api_meta.meta/api_meta/meta_error.htm)
