---
title: "Sort Optimization on a Query"
domain: salesforce-large-data-volumes-bp
topic: sort-optimization-on-a-query
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.989Z
estimatedTokens: 258
keywords: [Sort, Optimization, Query, looking, records, created, three, days, amount, data, exceeded, threshold, standard, indexes, 30%]
---

# Sort Optimization on a Query

> The query was
looking for all the records created in the last three days, but the
amount of data in the object exceeded the threshold for standard indexes:
30% of the total records up to one million records. The query performed
poorly.

# Sort Optimization on a Query

## Situation

The customer had the following query.

```

```

The query was looking for all the records created in the last three days, but the amount of data in the object exceeded the threshold for standard indexes: 30% of the total records up to one million records. The query performed poorly.

## Solution

The query was rewritten as:

```

```

In this query, the threshold checks were not done, and the CreatedDate index was used to find the records. This kind of query returns a maximum of 99,999 records in the order that they were created within the last three days, assuming that 99,999 or fewer records were created during the last three days.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_large_data_volumes_bp)

#### Note

In general, when querying for data that has been added over the Last\_N\_Days, if you specify an ORDER BY query on an indexed field with a limit of fewer than 100,000 records, the ORDER BY index is used to do the query.

## Code Examples

```
SELECT Id,Product_Code__c
FROM Customer_Product__c
WHERE CreatedDate = Last_N_Days:3
```

```
SELECT Id,Product_Code__c
FROM Customer_Product__c
WHERE CreatedDate = Last_N_Days:3
ORDER BY CreatedDate LIMIT 99999
```
