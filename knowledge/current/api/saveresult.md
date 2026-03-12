---
title: "SaveResult"
domain: api
topic: saveresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.939Z
estimatedTokens: 341
keywords: [SaveResult, call, array, objects]
---

# SaveResult

> The create() call returns an array of 
    SaveResult objects.

# SaveResult

The create() call returns an array of SaveResult objects.

Each element in the SaveResult array corresponds to the [sObject](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#sobject_topic)\[\] array passed as the [sObjects](atlas.en-us.api.meta/api/sforce_api_calls_create.htm#i1424545) parameter in the [create()](atlas.en-us.api.meta/api/sforce_api_calls_create.htm "Adds one or more new records to your organization’s data.") call. For example, the object returned in the first index in the SaveResult array matches the object specified in the first index of the sObject\[\] array.

A SaveResult object has these properties.

| Name | Type | Description |
| --- | --- | --- |
| id | ID | ID of the sObject that you attempted to create(). If this field contains a value, then the object was created successfully. If this field is empty, then the object wasn’t created and the API returned error information instead. |
| success | boolean | Indicates whether the create() call succeeded (true) or not (false) for this object. |
| errors | Error[] | If an error occurred during the create() call, an array of one or more Error objects providing the error code and description.If your organization has active duplicate rules and a duplicate is detected, the SaveResult includes an Error with a data type of DuplicateError. |

## Related Topics

- sObject (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- sObjects (atlas.en-us.api.meta/api/sforce_api_calls_create.htm)
- create() (atlas.en-us.api.meta/api/sforce_api_calls_create.htm)
- Error (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
