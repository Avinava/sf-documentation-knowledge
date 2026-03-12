---
title: "Get Most Recently Used List View Records (Deprecated)"
domain: uiapi
topic: get-most-recently-used-list-view-records-deprecated
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.491Z
estimatedTokens: 634
keywords: [Recently, View, Records, Deprecated, record, data, object’s, MRU]
---

# Get Most Recently Used List View Records (Deprecated)

> Get record data for an object’s most recently used (MRU) list
      view.

# Get Most Recently Used List View Records (Deprecated)

Get record data for an object’s most recently used (MRU) list view.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=uiapi)

#### Note

This resource is deprecated. To get most recently used list view records, use [Get List View Records with URL Parameters](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_views_records.htm "Get record data for a list view using URL parameters.") or [Get List View Records with a Request Body](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_view_records_post.htm "Get record data for a list view using a request body.").

Resource

```

```

-   objectApiName—A [supported](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.") object, such as Account.

Available Version

43.0

HTTP Method

GET

Example

To get information about the records in the most recently used account list views, make this request:

```

```

The request returns a list of records in the most recently used account list view.

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fields | String[] | Additional fields queried for the records returned. These fields don’t create visible columns. If the field is not available to the user, an error occurs. | Optional | 43.0 |
| optionalFields | String[] | Additional fields queried for the records returned. These fields don’t create visible columns. If the field is not available to the user, no error occurs and the field isn’t included in the records. | Optional | 43.0 |
| pageSize | Integer | The number of list records viewed at one time. The default value is 50. Value can be 1–2000. | Optional | 43.0 |
| pageToken | String | A token that represents the page offset. To indicate where the page starts, use this value with the pageSize parameter. The maximum offset is 2000 and the default is 0. | Optional | 43.0 |
| sortBy | String[] | The API name of the field the list view is sorted by. If the name is preceded with “-”, the sort order is descending. For example, "Name" sorts by name in ascending order. "-CreatedDate" sorts by created date in descending order. | Optional | 43.0 |

Response Body

[List Record Collection](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_record_collection.htm "A collection of list view records.")

## Code Examples

```
/ui-api/mru-list-records/${objectApiName}
```

```
GET /services/data/v66.0/ui-api/mru-list-records/Account
```

## Related Topics

- Get List View Records with URL Parameters (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_views_records.htm)
- Get List View Records with a Request Body (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_view_records_post.htm)
- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- List Record Collection (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_record_collection.htm)
