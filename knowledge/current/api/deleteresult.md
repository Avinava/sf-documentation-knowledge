---
title: "DeleteResult"
domain: api
topic: deleteresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.950Z
estimatedTokens: 244
keywords: [DeleteResult, call, array, objects]
---

# DeleteResult

> The delete() call returns an array of DeleteResult objects.

# DeleteResult

The delete() call returns an array of DeleteResult objects.

Each element in the DeleteResult array corresponds to the ID\[\] array passed as the [ids](atlas.en-us.api.meta/api/sforce_api_calls_delete.htm#i1425080) parameter in the [delete()](atlas.en-us.api.meta/api/sforce_api_calls_delete.htm "Deletes one or more records from your organization's data.") call. For example, the object returned in the first index in the DeleteResult array matches the object specified in the first index of the ID\[\] array.

A DeleteResult object has these properties.

| Name | Type | Description |
| --- | --- | --- |
| id | ID | ID of an sObject that you attempted to delete. For information on IDs, see ID Field Type. |
| success | boolean | Indicates whether the delete() call succeeded (true) or not (false) for this object. |
| errors | Error[] | If an error occurred during the delete() call, an array of one or more Error objects providing the error information. |

## Related Topics

- ids (atlas.en-us.api.meta/api/sforce_api_calls_delete.htm)
- delete() (atlas.en-us.api.meta/api/sforce_api_calls_delete.htm)
- sObject (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- Error (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
