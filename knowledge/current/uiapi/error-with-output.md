---
title: "Error with Output"
domain: uiapi
topic: error-with-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.802Z
estimatedTokens: 277
keywords: [Error, Output, extra, errors, rare, cases, message, isn't, enough, describe, reason, failure, conflicting, precondition, exists]
---

# Error with Output

> Contains extra information about errors. In rare cases, an error message isn't enough to
  describe the reason for a failure. For example, when a conflicting precondition exists, the error
  result can include the information about the cause of the conflict.

# Error with Output

Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict.

User Interface API enforces Salesforce validation rules. If a validation rule fails, the error is reported here.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| enhancedErrorType | String | Indicates the type of the output property. The value is either null or RecordError. | Small, 41.0 | 41.0 |
| message | String | Description of the error. | Small, 41.0 | 41.0 |
| output | Any response body | The response body returned by the requested resource. For example, if a successful request returns a Object Info response body but an error triggers the Error with Output response body, the value of the output property is an Object Info response body.When an error occurs related to record create or update, this value is Record Exceptions. | Small, 41.0 | 41.0 |

## Related Topics

- Object Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm)
- Record Exceptions (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_exception.htm)
