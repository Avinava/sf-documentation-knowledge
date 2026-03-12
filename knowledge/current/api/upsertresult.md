---
title: "UpsertResult"
domain: api
topic: upsertresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.627Z
estimatedTokens: 280
keywords: [UpsertResult, upsert, call, array, objects, element, corresponds, sObject, passed, sObjects, index, matches]
---

# UpsertResult

> The upsert() call returns an array of UpsertResult
    objects. Each element in the array corresponds to the sObject[] array passed as the
      sObjects parameter in the upsert()
    call. For example, the object returned in the first index in the UpsertResult array matches the
    object specified in the first index of the sObject[] array.

# UpsertResult

The upsert() call returns an array of UpsertResult objects. Each element in the array corresponds to the sObject\[\] array passed as the sObjects parameter in the upsert() call. For example, the object returned in the first index in the UpsertResult array matches the object specified in the first index of the sObject\[\] array.

An UpsertResult object has these properties.

| Name | Type | Description |
| --- | --- | --- |
| created | boolean | Indicates whether the record was created (true) or updated (false). |
| errors | Error[] | If errors occurred during the call, an array of Error objects, providing the error code and description, is returned. |
| id | ID | If the call succeeded, the field contains the ID of the record that was either updated or created. If there was an error, the field is null. For more information, see ID Field Type. |
| success | boolean | Indicates whether the call succeeded (true) or not (false) for this object.If your organization has active duplicate rules and a duplicate is detected, the UpsertResult includes an Error with a data type of DuplicateError. |

## Related Topics

- Error (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
