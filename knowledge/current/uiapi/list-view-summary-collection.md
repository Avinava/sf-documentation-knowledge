---
title: "List View Summary Collection"
domain: uiapi
topic: list-view-summary-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.945Z
estimatedTokens: 392
keywords: [View, Summary, Collection, views]
---

# List View Summary Collection

> A collection of list views for a given object.

# List View Summary Collection

A collection of list views for a given object.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| count | Integer | The total number of list views returned. | Small, 43.0 | 43.0 |
| currentPageToken | String | The pageToken of the current page of list views. | Small, 43.0 | 43.0 |
| currentPageUrl | String | The URL of the current page of list views. | Small, 43.0 | 43.0 |
| lists | List View Summary | Collection of list views for the given object | Small, 43.0 | 43.0 |
| nextPageToken | String | The pageToken of the next page of list views. | Small, 43.0 | 43.0 |
| nextPageUrl | String | The URL of the next page of list views | Small, 43.0 | 43.0 |
| objectApiName | String | A supported object, such as Account. | Small, 48.0 | 48.0 |
| pageSize | Integer | The number of list records viewed at one time. The default value is 20. | Small, 48.0 | 48.0 |
| previousPageToken | String | The pageToken of the previous page of list views. | Small, 43.0 | 43.0 |
| previousPageUrl | String | The URL of the previous page of list views. | Small, 43.0 | 43.0 |
| queryString | String | The query string used in the query parameter. | Small, 48.0 | 48.0 |
| recentListsOnly | Boolean | Show only recently viewed lists. The default value is false. | Small, 48.0 | 48.0 |

#### See Also

-   [Get List Views for an Object (Deprecated)](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_views_object.htm "Get a collection of list views associated with an object.")

## Related Topics

- List View Summary (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_view_summary.htm)
- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- Get List Views for an Object (Deprecated) (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_views_object.htm)
