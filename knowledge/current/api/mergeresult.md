---
title: "MergeResult"
domain: api
topic: mergeresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.425Z
estimatedTokens: 206
keywords: [MergeResult, merge, call, array, objects]
---

# MergeResult

> The merge() call returns an array of MergeResult
    objects.

# MergeResult

The merge() call returns an array of MergeResult objects.

A MergeResult object has these properties.

| Name | Type | Description |
| --- | --- | --- |
| errors | Error[] | If an error occurred during the merge() call, an array of one or more Error objects providing the error code and description. |
| id | ID | ID of the primary record, the record into which the other records were merged. |
| mergedRecordIds | ID[] | ID of the records that were merged into the primary record. If successful, the values match mergeRequest.recordToMergeIds. |
| success | boolean | Indicates whether the merge was successful (true) or not (false). |
| updatedRelatedIds | ID[] | ID of all related records that were moved (reparented) as a result of the merge, and that are viewable by the user sending the merge call. |

## Related Topics

- merge() (atlas.en-us.api.meta/api/sforce_api_calls_merge.htm)
- Error (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- recordToMergeIds (atlas.en-us.api.meta/api/sforce_api_calls_merge.htm)
