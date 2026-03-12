---
title: "Get Related List Record Count"
domain: uiapi
topic: get-related-list-record-count
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.659Z
estimatedTokens: 209
keywords: [Record, Count]
---

# Get Related List Record Count

> Returns the record count for a related list.

# Get Related List Record Count

Returns the record count for a related list.

Resource

```

```

-   parentRecordId—The ID of the record you want to get related lists for.
-   relatedListId—The ID of a supported related list for that object.

Available Version

50.0

HTTP Method

GET

Example

To get the number of records in the Contracts related list for the account 001RM000003UNu6YAG, make this request.

```

```

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| maxCount | Integer | The maximum number of records to return. The default value is 20. | Optional | 50.0 |

Response Body

[Related List Record Count](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_record_count.htm "The number of records in a given related list.")

## Code Examples

```
/ui-api/related-list-count/${parentRecordId}/${relatedListId}
```

```
/services/data/v66.0/ui-api/related-list-count/001RM000003UNu6YAG/Contracts
```

## Related Topics

- Related List Record Count (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_record_count.htm)
