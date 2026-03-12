---
title: "List Object Info"
domain: uiapi
topic: list-object-info
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.893Z
estimatedTokens: 265
keywords: [Info]
---

# List Object Info

> List object info.

# List Object Info

List object info.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| availableScopes | List Object Scope[] | Information about available scopes for the object. | Small, 61.0 | 61.0 |
| columns | List Object Column[] | Information about available columns for the object. | Small, 61.0 | 61.0 |
| createable | Boolean | Indicates whether a new list for the object can be created (true) or not (false). | Small, 61.0 | 61.0 |
| objectApiName | String | Object API name. | Small, 61.0 | 61.0 |
| publicOrShared​Creatable | Boolean | Indicates whether the context user can create a new public or shared listview for the object (true) or not (false). | Small, 61.0 | 61.0 |
| relatedEntity​ApiName | String | API name of the related object to which this list can be scoped, or null. | Small, 61.0 | 61.0 |

#### See Also

-   [Get Metadata for a List View Object](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lists_object_md_get.htm "Get metadata for a list view object.")

## Related Topics

- List Object Scope (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_object_scope.htm)
- List Object Column (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_object_column.htm)
- Get Metadata for a List View Object (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lists_object_md_get.htm)
