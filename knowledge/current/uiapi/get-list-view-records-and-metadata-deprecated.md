---
title: "Get List View Records and Metadata (Deprecated)"
domain: uiapi
topic: get-list-view-records-and-metadata-deprecated
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.435Z
estimatedTokens: 872
keywords: [View, Records, Metadata, Deprecated, record, data]
---

# Get List View Records and Metadata (Deprecated)

> Get record data and metadata for a list view.

# Get List View Records and Metadata (Deprecated)

Get record data and metadata for a list view.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=uiapi)

#### Note

This resource is deprecated. To get list view records, use [Get List View Records with URL Parameters](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_views_records.htm "Get record data for a list view using URL parameters.") or [Get List View Records with a Request Body](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_view_records_post.htm "Get record data for a list view using a request body."). To get list view metadata, use [Get List View Metadata](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_views_md.htm "Get list view metadata.").

Resources

```

```

```

```

-   listViewId—The ID of a list view, such as 00BR0000000Wc0rMAC.
-   objectApiName—A [supported](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.") object, such as Account.
-   listViewApiName—The API name of a list view, such as AllAccounts or \_\_Recent.

Available Version

42.0

HTTP Method

GET

Example

As an example, let’s say we have a list view named All Accounts with a list view ID of 00BR0000000Wc0rMAC. To get information about all the records and metadata for this list view, make this request.

```

```

You can also use the object API name and list view API name of the list view to make the same request.

```

```

The request returns a list of records and the metadata for the list view.

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fields | String[] | Additional fields queried for the records returned. These fields don’t create visible columns. If the field isn’t available to the user, an error occurs. | Optional | 42.0 |
| optionalFields | String[] | Additional fields queried for the records returned. These fields don’t create visible columns. If the field isn’t available to the user, no error occurs and the field isn’t included in the records. | Optional | 42.0 |
| pageSize | Integer | The number of list records viewed at one time. The default value is 50. Value can be 1–2000. | Optional | 42.0 |
| pageToken | String | A token that represents the page offset. To indicate where the page starts, use this value with the pageSize parameter. The maximum offset is 2000 and the default is 0. | Optional | 42.0 |
| searchTerm | String | Search term to filter the results. Wildcards are supported. | Optional | 61.0 |
| sortBy | String[] | The API names of the fields the list view is sorted by. If the name is preceded with -, the sort order is descending. For example, Name sorts by name in ascending order. -CreatedDate sorts by created date in descending order.In API version 63.0 and later, you can sort by up to five fields. | Optional | 42.0 |
| where | String | The filter applied to returned records, in GraphQL syntax. For example, { and: [ { StageName: { eq: "Prospecting" } }, { Account: { Name: { eq: "Dickenson plc" } } } ] } filters an Opportunity related list to show only opportunities in the Prospecting stage that are linked to the “Dickenson plc” account. | Optional | 61.0 |

Response Body

[List UI](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_ui.htm "The record data and metadata for a list view.")

## Code Examples

```
/ui-api/list-ui/${listViewId}
```

```
/ui-api/list-ui/${objectApiName}/${listViewApiName}
```

```
/services/data/v66.0/ui-api/list-ui/00BR0000000Wc0rMAC
```

```
/services/data/v66.0/ui-api/list-ui/Account/AllAccounts
```

## Related Topics

- Get List View Records with URL Parameters (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_views_records.htm)
- Get List View Records with a Request Body (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_view_records_post.htm)
- Get List View Metadata (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_views_md.htm)
- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- List
              UI (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_ui.htm)
