---
title: "DeleteByExampleResult"
domain: api
topic: deletebyexampleresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.960Z
estimatedTokens: 250
keywords: [DeleteByExampleResult, deleteByExample, call, array, objects]
---

# DeleteByExampleResult

> The deleteByExample() call returns an array of
  DeleteByExampleResult objects.

# DeleteByExampleResult

The deleteByExample() call returns an array of DeleteByExampleResult objects.

Each element in the DeleteByExampleResult array corresponds to the [sObject](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#sobject_topic)\[\] array passed in the deleteByExample() call. For example, the object returned in the first index in the DeleteByExampleResult array matches the sObject specified in the first index of the sObject\[\] array.

A DeleteByExampleResult object has these properties.

| Name | Type | Description |
| --- | --- | --- |
| entity | sObject | Details for the sObject that you attempted to delete. |
| rowCount | long | Indicates the number of rows that were deleted. |
| success | boolean | Indicates whether the deleteByExample() call succeeded (true) or not (false) for this object. |
| errors | Error[] | If an error occurred during the deleteByExample() call, an array of one or more Error objects providing the error information. |

## Related Topics

- sObject (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- deleteByExample() (atlas.en-us.api.meta/api/sforce_api_calls_deletebyexample.htm)
- Error (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
