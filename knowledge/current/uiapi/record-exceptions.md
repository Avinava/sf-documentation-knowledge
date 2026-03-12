---
title: "Record Exceptions"
domain: uiapi
topic: record-exceptions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.067Z
estimatedTokens: 187
keywords: [Record, Exceptions, collection, exception, errors]
---

# Record Exceptions

> A collection of record exception errors.

# Record Exceptions

A collection of record exception errors.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Record Exception Error[] | General errors. | Small, 41.0 | 41.0 |
| fieldErrors | Map<String, Record Exception Error[]> | A map of field IDs to field-specific errors. | Small, 41.0 | 41.0 |

#### See Also

-   [Error with Output](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_error_with_output.htm "Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict.")

## Related Topics

- Record Exception Error (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_exception_error.htm)
- Error with Output (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_error_with_output.htm)
