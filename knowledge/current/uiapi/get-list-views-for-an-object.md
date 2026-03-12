---
title: "Get List Views for an Object"
domain: uiapi
topic: get-list-views-for-an-object
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.439Z
estimatedTokens: 375
keywords: [Views, associated]
---

# Get List Views for an Object

> Get list views associated with an object.

# Get List Views for an Object

Get list views associated with an object.

Resource

```

```

-   objectApiName—A [supported](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.") object, such as Account.

Available version

61.0

HTTP methods

GET

Example

This example gets all the list views associated with accounts.

```

```

This example gets the most recently used list views associated with accounts using the recentListsOnly request parameter.

```

```

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| pageSize | Integer | Number of list records viewed at one time. The default value is 20. Value can be 1–2000. | Optional | 61.0 |
| pageToken | String | Token that represents the page offset. To indicate where the page starts, use this value with the pageSize parameter. The maximum offset is 2000 and the default is 0. | Optional | 61.0 |
| q | String | Search term to filter the results. Wildcards are supported. | Optional | 61.0 |
| recentListsOnly | Boolean | Indicates whether to get recent lists only (true) or not (false). Default is false. | Optional | 61.0 |

Response body for GET

[List Info Summary Collection](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_info_summary_collection.htm "List info summary collection.")

## Code Examples

```
/ui-api/list-info/${objectApiName}
```

```
GET /services/data/v66.0/ui-api/list-info/Account
```

```
GET /services/data/v66.0/ui-api/list-info/Account?recentListsOnly=true
```

## Related Topics

- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- List Info Summary Collection (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_info_summary_collection.htm)
