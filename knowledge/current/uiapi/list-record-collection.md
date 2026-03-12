---
title: "List Record Collection"
domain: uiapi
topic: list-record-collection
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.917Z
estimatedTokens: 640
keywords: [Record, Collection, view, records]
---

# List Record Collection

> A collection of list view records.

# List Record Collection

A collection of list view records.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| count | Integer | The total count of records returned. | Small, 43.0 | 43.0 |
| currentPageToken | String | The token for the current page of records. | Small, 43.0 | 43.0 |
| currentPageUrl | String | The URL of the current page of records. | Small, 43.0 | 43.0 |
| fields | String[] | List of fields specified in the request. If a field isn’t available to the user, an error occurs. | Small, 48.0 | 48.0 |
| listInfoETag | String | An ETag that indicates whether the metadata has changed. | Small, 42.0 | 42.0 |
| listReference | List Reference | The list the records belong to. | Small, 48.0 | 48.0 |
| nextPageToken | String | The token for the next page of records. | Small, 43.0 | 43.0 |
| nextPageUrl | String | The URL of the next page of records. | Small, 43.0 | 43.0 |
| optionalFields | String[] | Optional fields specified in the request. If a field isn’t available to the user, no error occurs and the field isn’t included in the response. | Small, 48.0 | 48.0 |
| pageSize | Integer | The number of list records viewed at one time. The default value is 50. | Small, 48.0 | 48.0 |
| previousPageToken | String | The token for the previous page of records. | Small, 43.0 | 43.0 |
| previousPageUrl | String | The URL of the previous page of records. | Small, 43.0 | 43.0 |
| records | Record[] | A collection of records. | Small, 43.0 | 43.0 |
| searchTerm | String | Search term specified in the request. | Small, 61.0 | 61.0 |
| sortBy | String | The API name of the field the list view is sorted by. If the name is preceded with -, the sort order is descending. | Small, 48.0 | 48.0 |
| where | String | Where string specified in the request. | Small, 61.0 | 61.0 |

#### See Also

-   [Get Most Recently Used List View Records (Deprecated)](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_mru_list_views_records.htm "Get record data for an object’s most recently used (MRU) list view.")

-   [Get List View Records with URL Parameters](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_views_records.htm "Get record data for a list view using URL parameters.")

-   [Get List View Records with a Request Body](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_view_records_post.htm "Get record data for a list view using a request body.")

-   [List UI](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_ui.htm "The record data and metadata for a list view.")

## Related Topics

- ETag (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_intro.htm)
- List Reference (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_reference.htm)
- Record (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm)
- Get Most Recently Used List View Records (Deprecated) (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_mru_list_views_records.htm)
- Get List View Records with URL Parameters (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_views_records.htm)
- Get List View Records with a Request Body (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_view_records_post.htm)
- List UI (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_ui.htm)
