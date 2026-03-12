---
title: "Get Most Recently Used List View Metadata (Deprecated)"
domain: uiapi
topic: get-most-recently-used-list-view-metadata-deprecated
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.485Z
estimatedTokens: 250
keywords: [Recently, View, Metadata, Deprecated, object’s, viewed, MRU]
---

# Get Most Recently Used List View Metadata (Deprecated)

> Get metadata for an object’s most recently viewed (MRU) list
            view.

# Get Most Recently Used List View Metadata (Deprecated)

Get metadata for an object’s most recently viewed (MRU) list view.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=uiapi)

#### Note

This resource is deprecated. To get most recently used list view metadata for an object, use [Get List View Metadata](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_views_md.htm "Get list view metadata.").

Resource

```

```

-   objectApiName—A [supported](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.") object, such as Account.

Available Version

43.0

HTTP Method

GET

Example

This example gets information about the metadata for the most recently used account list view.

```

```

Response Body

[List Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_metadata.htm "Metadata that describes a list.")

## Code Examples

```
/ui-api/mru-list-info/${objectApiName}
```

```
GET /services/data/v66.0/ui-api/mru-list-info/Account
```

## Related Topics

- Get List View Metadata (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_views_md.htm)
- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- List Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_metadata.htm)
