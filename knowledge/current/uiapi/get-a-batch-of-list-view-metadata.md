---
title: "Get a Batch of List View Metadata"
domain: uiapi
topic: get-a-batch-of-list-view-metadata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.406Z
estimatedTokens: 262
keywords: [Batch, View, Metadata, views]
---

# Get a Batch of List View Metadata

> Get metadata for a batch of list views.

# Get a Batch of List View Metadata

Get metadata for a batch of list views.

Resource

```

```

Available Version

55.0

HTTP Methods

GET

Example

This example gets metadata for a batch of list views by ID:

```

```

This example gets metadata for a batch of list views by name:

```

```

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| ids | ID | A comma-delimited list of list view IDs. A list view ID starts with 00B, like 00Bxx0000029Y0NEAU | Either ids or names is required. | 55.0 |
| names | String | A comma-delimited list of list view names. A list view name starts with an entity name, a dot, and then the name of the list view, like Account.AllAccounts. | Either ids or names is required. | 55.0 |

Response Body

[Simplified Batch Results](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results_simplified.htm "The simplified results from a request to a batch resource. Results include information for each subrequest in the batch.")

## Code Examples

```
/ui-api/list-info/batch?ids=<id>
```

```
GET /services/data/v66.0/ui-api/list-info/batch?ids=00Bxx0000029Y0OEAU,00Bxx0000029Y0NEAU
```

```
GET /services/data/v66.0/ui-api/list-info/batch?names=Account.AllAccounts,Accounts,Account.NewLastWeek
```

## Related Topics

- Simplified Batch Results (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results_simplified.htm)
