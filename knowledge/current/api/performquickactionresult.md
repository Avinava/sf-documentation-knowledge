---
title: "PerformQuickActionResult"
domain: api
topic: performquickactionresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.428Z
estimatedTokens: 204
keywords: [PerformQuickActionResult, performQuickActions, call, array, objects]
---

# PerformQuickActionResult

> The performQuickActions() 
    call returns an array of PerformQuickActionResult objects.

# PerformQuickActionResult

The performQuickActions() call returns an array of PerformQuickActionResult objects.

| Name | Type | Description |
| --- | --- | --- |
| created | boolean | If true, the record was created successfully and if false, no record was created. |
| errors | Error[] | If an error occurred during the call, an array of one or more Error objects providing the error information. |
| feedItemIds | ID[] | Returns an array of unique identifiers of a feed item in the form of a string with IDs; in partner portals, a type with an ID is returned. |
| ids | ID[] | An array of IDs. |
| success | boolean | If true, the action executed successfully. If false, the action failed. |
| successMessage | string | Returns the message that displays to the user upon successful completion of the action. |

## Related Topics

- Error (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
