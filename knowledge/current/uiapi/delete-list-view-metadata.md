---
title: "Delete List View Metadata"
domain: uiapi
topic: delete-list-view-metadata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.409Z
estimatedTokens: 168
keywords: [View, Metadata]
---

# Delete List View Metadata

> Delete list view metadata.

# Delete List View Metadata

Delete list view metadata.

Resource

```

```

-   objectApiName—A [supported](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.") object, such as Account.
-   listViewApiName—The API name of a list view, such as AllAccounts.

Available Version

61.0

HTTP Method

DELETE

Example

This example deletes the metadata for a list view. The object API name is Account and the list view API name is AllAccounts.

```

```

Response

Deleting list view metadata returns a 204 HTTP status code.

## Code Examples

```
/ui-api/list-info/${objectApiName}/${listViewApiName}
```

```
DELETE /services/data/v66.0/ui-api/list-info/Account/AllAccounts
```

## Related Topics

- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
