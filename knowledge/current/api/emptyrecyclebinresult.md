---
title: "EmptyRecycleBinResult"
domain: api
topic: emptyrecyclebinresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.262Z
estimatedTokens: 215
keywords: [EmptyRecycleBinResult, emptyRecycleBin, call, array, objects, element, corresponds, passed, index, matches]
---

# EmptyRecycleBinResult

> The emptyRecycleBin() 
  call returns an array of EmptyRecycleBinResult objects. Each element in the 
  array corresponds to an element in the ID[] array passed as the parameter in 
  the emptyRecycleBin() call. For 
  example, the object returned in the first index in the EmptyRecycleBinResult 
  array matches the object specified in the first index of the ID[] array.

# EmptyRecycleBinResult

The emptyRecycleBin() call returns an array of EmptyRecycleBinResult objects. Each element in the array corresponds to an element in the ID\[\] array passed as the parameter in the emptyRecycleBin() call. For example, the object returned in the first index in the EmptyRecycleBinResult array matches the object specified in the first index of the ID\[\] array.

A EmptyRecycleBinResult object has the following properties:

| Name | Type | Description |
| --- | --- | --- |
| id | ID | ID of an sObject that you attempted to delete from the Recycle Bin. For information about IDs, see ID Field Type. |
| isSuccess | boolean | Indicates whether the call succeeded (true) or not (false) for this record. |
| errors | Error[] | If an error occurred during the call, an array of one or more Error objects providing the error information. |

## Related Topics

- sObject (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- Error (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
