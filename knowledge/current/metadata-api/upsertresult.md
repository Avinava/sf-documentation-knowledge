---
title: "UpsertResult"
domain: metadata-api
topic: upsertresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:42.736Z
estimatedTokens: 182
keywords: [UpsertResult, result, associated, upsertMetadata, call, Version]
---

# UpsertResult

> Contains information about the result of the associated upsertMetadata() call.

# UpsertResult

Contains information about the result of the associated upsertMetadata() call.

## Version

Available in API version 31.0 and later.

## Properties

| Name | Type | Description |
| --- | --- | --- |
| created | boolean | Indicates whether the upsert operation resulted in the creation of the component (true) or not (false). If false and the upsert operation was successful, the component was updated. |
| errors | Error[] | An array of errors that were returned if the operation wasn't successful. |
| fullName | string | The full name of the component that was created or updated if the operation was successful. |
| success | boolean | Indicates whether the operation was successful (true) or not (false). |

## Related Topics

- Error (atlas.en-us.api_meta.meta/api_meta/meta_error.htm)
