---
title: "Query Batches of Archived Field History Data"
domain: field-history-retention
topic: query-batches-of-archived-field-history-data
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.824Z
estimatedTokens: 285
keywords: [Query, Batches, Archived, History, Data, Audit, Trail, entries, stored, FieldHistoryArchive]
---

# Query Batches of Archived Field History Data

> You can query Field Audit Trail entries stored on the FieldHistoryArchive object.

# Query Batches of Archived Field History Data

You can query Field Audit Trail entries stored on the FieldHistoryArchive object.

| Available in: Lightning Experience |
| --- |
| Available in: Enterprise, Performance, and Unlimited Editions with the purchase of Salesforce Shield or Field Audit Trail licenses. |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_history_retention)

#### Note

This content relates to Field Audit Trail. Read about implementing field audit trail using Shield Extension in [Own from Salesforce](https://help.salesforce.com/s/articleView?id=platform.own_from_salesforce.htm&type=5&language=en_US).

To return a large number of results, use a URI query.

```

```

Here’s an example Post request.

```

```

For more information about Bulk API queries, read [Get Results for a Query Job](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_asynch.meta/api_asynch/query_get_job_results.htm) in the Bulk API 2.0 and Bulk API Developer Guide.

You can also make a CURL request.

```

```

These examples result in a CSV file that you can examine for auditing purposes.

## Code Examples

```
/services/data/vXX.X/jobs/query
```

```
{
    "operation": "query",
    "query": "SELECT ParentId, FieldHistoryType, Field, Id, NewValue, OldValueFROM FieldHistoryArchive WHERE FieldHistoryType = ‘Account’ AND CreatedDate > LAST_MONTH"
}
```

```
curl --include --request GET \
--header "Authorization: Bearer token" \
--header "Accept: text/csv" \
https://instance.salesforce.com/services/data/vXX.X/jobs/query/750R0000000zxr8IAA/results ?maxRecords=50000
```
