---
title: "List Records Input"
domain: uiapi
topic: list-records-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.213Z
estimatedTokens: 550
keywords: [Records, Input, Record, data, query, view]
---

# List Records Input

> Record data to query for a list view.

# List Records Input

Record data to query for a list view.

Example

This example uses a request body to query a list view named All Accounts.

```

```

```

```

This example uses the special \_\_Recent list view API name to get the record data for the most recently used (MRU) list view for accounts.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fields | String[] | Additional fields queried for the records returned. These fields don’t create visible columns. If the field isn’t available to the user, an error occurs. | Optional | 61.0 |
| optionalFields | String[] | Additional fields queried for the records returned. These fields don’t create visible columns. If the field isn’t available to the user, no error occurs and the field isn’t included in the records. | Optional | 61.0 |
| pageSize | Integer | The number of list records viewed at one time. The default value is 50. Value can be 1–2000. | Optional | 61.0 |
| pageToken | String | A token that represents the page offset. To indicate where the page starts, use this value with the pageSize parameter. The maximum offset is 2000 and the default is 0. | Optional | 61.0 |
| searchTerm | String | Search term to filter the results. Wildcards are supported. | Optional | 61.0 |
| sortBy | String[] | The API names of the fields the list view is sorted by. If the name is preceded with -, the sort order is descending. For example, Name sorts by name in ascending order. -CreatedDate sorts by created date in descending order.In API version 63.0 and later, you can sort by up to five fields. | Optional | 61.0 |
| where | String | The filter applied to returned records, in GraphQL syntax. For example, { and: [ { StageName: { eq: "Prospecting" } }, { Account: { Name: { eq: "Dickenson plc" } } } ] } filters an Opportunity related list to show only opportunities in the Prospecting stage that are linked to the “Dickenson plc” account. | Optional | 61.0 |

#### See Also

-   [Get List View Records with a Request Body](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_view_records_post.htm "Get record data for a list view using a request body.")

## Code Examples

```
POST /services/data/v66.0/ui-api/list-records/Account/AllAccounts
```

```
{
  "fields": ["Name", "Type", "AnnualRevenue", "CreatedDate"],
  "pageSize" : 10,
  "sortBy": ["CreatedDate"],
  "searchTerm" : "United",
  "where": "{AnnualRevenue: { gt: 1000000}}"
}
```

```
POST /services/data/v66.0/ui-api/list-records/Account/__Recent
```

## Related Topics

- Get List View Records with a Request Body (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_view_records_post.htm)
