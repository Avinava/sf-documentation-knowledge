---
title: "Get Related Lists for an Object"
domain: uiapi
topic: get-related-lists-for-an-object
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.678Z
estimatedTokens: 250
keywords: [object’s, layout]
---

# Get Related Lists for an Object

> Returns the related lists in an object’s default
        layout.

# Get Related Lists for an Object

Returns the related lists in an object’s default layout.

Resource

```

```

-   parentObjectApiName—A [supported](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.") object, such as Account.

Available Version

50.0

HTTP Method

GET

Example

To get information about related lists for the Account object, make this request:

```

```

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recordTypeId | Id | The ID of the record type (RecordType object) for the record. If not provided, the default record type is used. | Optional | 50.0 |

Response Body

[Related List Summary Collection](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_summary_collection.htm "A collection of related lists for a given object.")

## Code Examples

```
/ui-api/related-list-info/${parentObjectApiName}
```

```
GET /services/data/v66.0/ui-api/related-list-info/Account
```

## Related Topics

- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- Related List Summary
                        Collection (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_summary_collection.htm)
