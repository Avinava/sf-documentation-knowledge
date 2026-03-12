---
title: "Get Related List Metadata"
domain: uiapi
topic: get-related-list-metadata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.671Z
estimatedTokens: 450
keywords: [Metadata, layout]
---

# Get Related List Metadata

> Returns metadata for a related list in a page
    layout.

# Get Related List Metadata

Returns metadata for a related list in a page layout.

Resource

```

```

-   parentObjectApiName—A [supported](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.") object, such as Account.
-   relatedListId—The ID of a supported related list for that object, such as Contracts.

Available Version

50.0

HTTP Method

GET

Example

To get metadata for the Contracts related list in the Account object, make this request.

```

```

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fields | String[] | Fields in the related list to query. If a field is specified and the user doesn’t have access to it or it doesn’t exist, an error occurs. | Optional | 57.0 |
| optionalFields | String[] | Additional fields in the related list to query. If a field is specified and the user doesn’t have access to it, no error occurs. | Optional | 57.0 |
| recordTypeId | Id | The ID of the record type (RecordType object) for the record. If unspecified, the default record type for the context user is used. If there is no default record type for the context user, the Salesforce default record type is used. | Optional | 50.0 |
| restrictColumns​ToLayout | Boolean | Indicates whether to retrieve metadata for only the list columns in the page layout (true) or all columns (false). The default value is true. To further filter columns, also use fields and optionalFields. | Optional | 57.0 |

Response Body

[Related List Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_metadata.htm "Metadata that describes a related list.")

## Code Examples

```
/ui-api/related-list-info/${parentObjectApiName}/${relatedListId}
```

```
GET /services/data/v66.0/ui-api/related-list-info/Account/Contracts
```

## Related Topics

- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- Related List Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_metadata.htm)
