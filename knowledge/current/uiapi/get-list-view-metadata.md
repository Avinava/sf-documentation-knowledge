---
title: "Get List View Metadata"
domain: uiapi
topic: get-list-view-metadata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.403Z
estimatedTokens: 312
keywords: [View, Metadata]
---

# Get List View Metadata

> Get list view metadata.

# Get List View Metadata

Get list view metadata.

Resource

```

```

```

```

-   listViewId—The ID of a list view, such as 00BR0000000Wc0rMAC.
-   objectApiName—A [supported](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.") object, such as Account.
-   listViewApiName—The API name of a list view, such as AllAccounts, \_\_Recent, or \_\_SearchResult.

Available Version

42.0

HTTP Method

GET

Example

As an example, let’s say we have a list view named All Accounts with a list view ID of 00BR0000000Wc0rMAC. To get information about the metadata for this list view, make this request:

```

```

You can also use the object API name and list view API name of the list view to make the same request:

```

```

To get the most recently used (MRU) list view metadata for accounts, use the special \_\_Recent list view API name.

```

```

To get the search layout list view metadata for accounts, use the special \_\_SearchResult list view API name.

```

```

Response Body

[List Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_metadata.htm "Metadata that describes a list.")

## Code Examples

```
/ui-api/list-info/${listViewId}
```

```
/ui-api/list-info/${objectApiName}/${listViewApiName}
```

```
GET /services/data/v66.0/ui-api/list-info/00BR0000000Wc0rMAC
```

```
GET /services/data/v66.0/ui-api/list-info/Account/AllAccounts
```

```
GET /services/data/v66.0/ui-api/list-info/Account/__Recent
```

## Related Topics

- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- List Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_metadata.htm)
