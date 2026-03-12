---
title: "Get List View Records with URL Parameters"
domain: uiapi
topic: get-list-view-records-with-url-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.428Z
estimatedTokens: 725
keywords: [View, Records, URL, record, data]
---

# Get List View Records with URL Parameters

> Get record data for a list view using URL
    parameters.

# Get List View Records with URL Parameters

Get record data for a list view using URL parameters.

Resource

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

As an example, let’s say we have a list view named All Accounts with a list view ID of 00BR0000000Wc0rMAC. To get information about all the records on this list view, make this request.

```

```

You can also use the object API name and list view API name of the list view to make the same request.

```

```

To get record data for the most recently used (MRU) list view for accounts, use the special \_\_Recent list view API name.

```

```

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

[List Record Collection](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_record_collection.htm "A collection of list view records.")

## Code Examples

```
/ui-api/list-records/${listViewId}
```

```
/ui-api/list-records/${objectApiName}/${listViewApiName}
```

```
GET /services/data/v66.0/ui-api/list-records/00BR0000000Wc0rMAC
```

```
GET /services/data/v66.0/ui-api/list-records/Account/AllAccounts
```

```
GET /services/data/v66.0/ui-api/list-records/Account/__Recent
```

## Related Topics

- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- List Record Collection (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_record_collection.htm)
