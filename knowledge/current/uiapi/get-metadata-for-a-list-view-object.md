---
title: "Get Metadata for a List View Object"
domain: uiapi
topic: get-metadata-for-a-list-view-object
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.442Z
estimatedTokens: 151
keywords: [Metadata, View]
---

# Get Metadata for a List View Object

> Get metadata for a list view object.

# Get Metadata for a List View Object

Get metadata for a list view object.

Resource

```

```

-   objectApiName—A [supported](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.") object, such as Account.

Available version

61.0

HTTP methods

GET

Example

Get metadata for a list object, such as account.

```

```

Response body for GET

[List Object Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_object_info.htm "List object info.")

## Code Examples

```
/ui-api/list-object-info/${objectApiName}
```

```
GET /services/data/v66.0/ui-api/list-object-info/Account
```

## Related Topics

- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- List Object Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_object_info.htm)
