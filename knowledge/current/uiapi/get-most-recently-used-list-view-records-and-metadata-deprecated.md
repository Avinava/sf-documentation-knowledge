---
title: "Get Most Recently Used List View Records and Metadata (Deprecated)"
domain: uiapi
topic: get-most-recently-used-list-view-records-and-metadata-deprecated
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.497Z
estimatedTokens: 685
keywords: [Recently, View, Records, Metadata, Deprecated, record, data, object’s, MRU]
---

# Get Most Recently Used List View Records and Metadata (Deprecated)

> Get record data and metadata for an object’s most recently used
      (MRU) list view.

# Get Most Recently Used List View Records and Metadata (Deprecated)

Get record data and metadata for an object’s most recently used (MRU) list view.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=uiapi)

#### Note

This resource is deprecated. To get most recently used list view records, use [Get List View Records with URL Parameters](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_views_records.htm "Get record data for a list view using URL parameters.") or [Get List View Records with a Request Body](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_view_records_post.htm "Get record data for a list view using a request body."). To get most recently used list view metadata, use [Get List View Metadata](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_views_md.htm "Get list view metadata.").

Resource

```

```

-   objectApiName—A [supported](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.") object, such as Account.

Available Version

43.0

HTTP Method

GET

Example

To get information about the record data and metadata for the most recently used account list views, make this request.

```

```

The request returns the record data and metadata for the most recently used account list view.

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fields | String[] | Additional fields queried for the records returned. These fields don’t create visible columns. If the field is not available to the user, an error occurs. | Optional | 43.0 |
| optionalFields | String[] | Additional fields queried for the records returned. These fields don’t create visible columns. If the field is not available to the user, no error occurs and the field isn’t included in the records. | Optional | 43.0 |
| pageSize | Integer | The number of list records viewed at one time. The default value is 50. Value can be 1–2000. | Optional | 43.0 |
| pageToken | String | A token that represents the page offset. To indicate where the page starts, use this value with the pageSize parameter. The maximum offset is 2000 and the default is 0. | Optional | 43.0 |
| sortBy | String[] | The API name of the field the list view is sorted by. If the name is preceded with “-”, the sort order is descending. For example, "Name" sorts by name in ascending order. "-CreatedDate" sorts by created date in descending order. | Optional | 43.0 |

Response Body

[List UI](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_ui.htm "The record data and metadata for a list view.")

## Code Examples

```
/ui-api/mru-list-ui/${objectApiName}
```

```
GET /services/data/v66.0/ui-api/mru-list-ui/Account
```

## Related Topics

- Get List View Records with URL Parameters (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_views_records.htm)
- Get List View Records with a Request Body (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_view_records_post.htm)
- Get List View Metadata (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_views_md.htm)
- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- List UI (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_ui.htm)
