---
title: "Record Exception Error"
domain: uiapi
topic: record-exception-error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.071Z
estimatedTokens: 311
keywords: [Record, Exception, Error]
---

# Record Exception Error

> Information about a record exception error.

# Record Exception Error

Information about a record exception error.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| constituentField | String | If the field is a constituent of a compound field, this property contains the API name of the constituent field, and the field property contains the API name of the compound field.If the field is not a constituent of a compound field, or if no field applies to the error, the value is null. | Small, 41.0 | 41.0 |
| duplicateRecordError | Duplicate Record Error | Information about possible duplicate records. When the error code is DUPLICATES_DETECTED, this property might contain a value. | Small, 41.0 | 41.0 |
| errorCode | String | An error status code. | Small, 41.0 | 41.0 |
| field | String | A field API name. If no field applies to the error, the value is null. | Small, 41.0 | 41.0 |
| fieldLabel | String | A field label. If no field applies to the error, the value is null. | Small, 41.0 | 41.0 |
| message | String | An error message. | Small, 41.0 | 41.0 |

#### See Also

-   [Record Exceptions](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_exception.htm "A collection of record exception errors.")

## Related Topics

- Duplicate Record Error (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_duplicate_record_error.htm)
- Record Exceptions (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_exception.htm)
