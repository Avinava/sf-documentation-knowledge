---
title: "Update Related List Metadata"
domain: uiapi
topic: update-related-list-metadata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.675Z
estimatedTokens: 297
keywords: [Metadata, layout]
---

# Update Related List Metadata

> Update metadata for a related list in a page
    layout.

# Update Related List Metadata

Update metadata for a related list in a page layout.

Resource

```

```

-   parentObjectApiName—A [supported](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.") object, such as Account.
-   relatedListId—The ID of a supported related list for that object, such as Contracts.

Available Version

50.0

HTTP Method

PATCH

Example

This example uses a request body to update the metadata for the Contracts related list for the Account object:

```

```

```

```

Request Body

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recordTypeId | Id | The ID of the record type (RecordType object) for the record. If not provided, the default record type is used. | Optional | 50.0 |
| relatedList​InfoInput | Related List Input | The updated related list metadata. | Required | 50.0 |

Response Body

[Related List Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_metadata.htm "Metadata that describes a related list.")

## Code Examples

```
/ui-api/related-list-info/${parentObjectApiName}/${relatedListId}
```

```
PATCH /services/data/v66.0/ui-api/related-list-info/Account/Contracts
```

```
{ 
  "orderedByInfo" : [{ 
    "fieldApiName": "Name",
    "isAscending" : true
  }],
  "userPreferences" : {
    "columnWidths" : {
        "Name" : -1
    },
    "columnWrap" : {
        "Name" : false
    }
  }
}
```

## Related Topics

- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- Related List Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_related_list_input.htm)
- Related List Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_metadata.htm)
