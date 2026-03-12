---
title: "Get List Views for an Object (Deprecated)"
domain: uiapi
topic: get-list-views-for-an-object-deprecated
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.419Z
estimatedTokens: 442
keywords: [Views, Deprecated, collection, associated]
---

# Get List Views for an Object (Deprecated)

> Get a collection of list views associated with an
        object.

# Get List Views for an Object (Deprecated)

Get a collection of list views associated with an object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=uiapi)

#### Note

This resource is deprecated. To get list views for an object, use [Get List Views for an Object](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lists_object_get.htm "Get list views associated with an object.").

Resource

```

```

-   objectApiName—A [supported](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.") object, such as Account.

Available Version

43.0

HTTP Method

GET

Example

To retrieve all list views associated with accounts, make this request:

```

```

The request returns a list of all list views for the given object.

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| pageSize | Integer | The number of list records viewed at one time. The default value is 20. Value can be 1–2000. | Optional | 43.0 |
| pageToken | String | A token that represents the page offset. To indicate where the page starts, use this value with the pageSize parameter. The maximum offset is 2000 and the default is 0. | Optional | 43.0 |
| q | String | Query list views that contain certain key words. | Optional | 43.0 |
| recentListsOnly | Boolean | Show only recently viewed lists. | Optional | 43.0 |

Response Body

[List View Summary Collection](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_view_summary_collection.htm#ui_api_responses_list_view_summary_collection "A collection of list views for a given object.")

## Code Examples

```
/ui-api/list-ui/${objectApiName}
```

```
GET /services/data/v66.0/ui-api/list-ui/Account
```

## Related Topics

- Get List Views for an Object (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lists_object_get.htm)
- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- List
                            View Summary Collection (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_view_summary_collection.htm)
