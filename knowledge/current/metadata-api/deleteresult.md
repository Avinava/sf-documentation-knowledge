---
title: "DeleteResult"
domain: metadata-api
topic: deleteresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:38.357Z
estimatedTokens: 109
keywords: [DeleteResult, result, deleteMetadata, call, Version]
---

# DeleteResult

> Contains result information
for the deleteMetadata call.

# DeleteResult

Contains result information for the deleteMetadata call.

## Version

Available in API version 30.0 and later.

## Properties

| Name | Type | Description |
| --- | --- | --- |
| errors | Error[] | An array of errors returned if the operation wasn’t successful. |
| fullName | string | The full name of the deleted component. |
| success | boolean | Indicates whether the deletion was successful (true) or not (false). |

## Related Topics

- Error (atlas.en-us.api_meta.meta/api_meta/meta_error.htm)
