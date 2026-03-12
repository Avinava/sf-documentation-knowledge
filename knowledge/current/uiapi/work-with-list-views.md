---
title: "Work with List Views"
domain: uiapi
topic: work-with-list-views
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.042Z
estimatedTokens: 806
keywords: [Work, Views, View, resources, record, data, metadata, Salesforce]
---

# Work with List Views

> Use the List View resources to get record data and metadata about
      list views displayed in the Salesforce UI.

# Work with List Views

Use the List View resources to get record data and metadata about list views displayed in the Salesforce UI.

Get Record Data for a List View Using GET

You can get record data for a list view using a GET request and URL parameters to modify the results.

As an example, let’s say we have a list view named All Accounts with a list view ID of 00BR0000000Wc0rMAC. To get information about all the records on this list view, make this request.

```

```

You can also use the object API name and list view API name of the list view to make the same request.

```

```

To get record data for the most recently used (MRU) list view for accounts, use the special \_\_Recent list view API name.

```

```

Modify the GET List View Results with URL Parameters.

Modify the list view results using these URL parameters.

-   fields—Additional fields queried for the records returned, for display purposes. If a field is specified and the user doesn’t have access to it, an error occurs.
-   optionalFields—Additional fields queried for the records returned, for display purposes. If a field is specified and the user doesn’t have access to it, no error occurs.
-   pageSize—The number of list records viewed at one time.
-   pageToken—A token that represents the page offset.
-   searchTerm—A search term to filter the results.
-   sortBy—The API names of the fields the list view is sorted by.
-   where—A where string, using GraphQL syntax, to filter the results.

For example, to sort records by the date they were created, set the sortBy parameter to CreatedDate.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=uiapi)

#### Note

Depending on the list view object, some extra fields that were not requested in the fields or optionalFields parameters can be returned. For example, if person accounts are enabled for the org, a request to get list view records can return the isPersonAccount field, among others.

Get Record Data for a List View Using POST

You can also get record data for a list view using a POST request and a request body to modify the results.

This example uses a request body to query a list view named All Accounts.

```

```

```

```

This example uses the special \_\_Recent list view API name to get the record data for the most recently used (MRU) list view for accounts.

```

```

Get Metadata for a List View

You can get metadata for a list view using a GET request.

As an example, let’s say we have a list view named All Accounts with a list view ID of 00BR0000000Wc0rMAC. To get information about the metadata for this list view, make this request:

```

```

You can also use the object API name and list view API name of the list view to make the same request:

```

```

To get the most recently used (MRU) list view metadata for accounts, use the special \_\_Recent list view API name.

```

```

To get the search layout list view metadata for accounts, use the special \_\_SearchResult list view API name.

```

```

#### See Also

-   [Lists](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_views.htm "Use these resources to get data and metadata about list views and related lists displayed in the Salesforce UI.")

## Code Examples

```
GET /services/data/v66.0/ui-api/list-records/00BR0000000Wc0rMAC
```

```
GET /services/data/v66.0/ui-api/list-records/Account/AllAccounts
```

```
GET /services/data/v66.0/ui-api/list-records/Account/__Recent
```

```
GET /services/data/v66.0/ui-api/list-records/00BR0000000Wc0rMAC?sortBy=CreatedDate
```

```
POST /services/data/v66.0/ui-api/list-records/Account/AllAccounts
```

## Related Topics

- Lists (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_views.htm)
