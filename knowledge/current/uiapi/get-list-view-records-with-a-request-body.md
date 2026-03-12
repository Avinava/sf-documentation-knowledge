---
title: "Get List View Records with a Request Body"
domain: uiapi
topic: get-list-view-records-with-a-request-body
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.395Z
estimatedTokens: 290
keywords: [View, Records, record, data]
---

# Get List View Records with a Request Body

> Get record data for a list view using a request body.

# Get List View Records with a Request Body

Get record data for a list view using a request body.

Resource

```

```

-   objectApiName—A [supported](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.") object, such as Account.
-   listViewApiName—The API name of a list view, such as AllAccounts.

Available version

61.0

HTTP methods

POST

Example

This example uses a request body to query a list view named All Accounts.

```

```

```

```

This example uses the special \_\_Recent list view API name to get the record data for the most recently used (MRU) list view for accounts.

```

```

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| listRecordsQuery | List Records Input | Record data to query for a list view. | Required | 61.0 |

Response body for POST

[List Record Collection](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_record_collection.htm "A collection of list view records.")

## Code Examples

```
/ui-api/list-records/${objectApiName}/${listViewApiName}
```

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

- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- List Records Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_records_input.htm)
- List Record Collection (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_record_collection.htm)
