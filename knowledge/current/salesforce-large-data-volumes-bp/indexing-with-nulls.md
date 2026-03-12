---
title: "Indexing with Nulls"
domain: salesforce-large-data-volumes-bp
topic: indexing-with-nulls
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.982Z
estimatedTokens: 391
keywords: [Indexing, Nulls, customer, needed, allow, able, query, against, Because, single-column, indexes, picklists, foreign, key, exclude]
---

# Indexing with Nulls

> The customer needed to allow nulls
in a field and be able to query against them. Because single-column
indexes for picklists and foreign key fields exclude rows in which
the index column is equal to null, an index could not have been used
for the null queries.

# Indexing with Nulls

## Situation

The customer needed to allow nulls in a field and be able to query against them. Because single-column indexes for picklists and foreign key fields exclude rows in which the index column is equal to null, an index could not have been used for the null queries.

## Solution

The best practice would have been to not use null values initially. If you find yourself in a similar situation, use some other string, such as N/A, in place of NULL. If you cannot do that, possibly because records already exist in the object with null values, create a formula field that displays text for nulls, and then index that formula field.

For example, assume the Status field is indexed and contains nulls.

Issuing a SOQL query similar to the following prevents the index from being used.

```

```

Instead, you can create a formula called Status\_Value.

```

```

This formula field can be indexed and used when you query for a null value.

```

```

This concept can be extended to encompass multiple fields.

```

```

For more information about standard and custom indexed fields, see [Indexes](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_large_data_volumes_bp.meta/salesforce_large_data_volumes_bp/ldv_deployments_infrastructure_indexes.htm) in Best Practices for Deployments with Large Data Volumes.

To avoid long execution times of SOQL queries, see [Improve Performance of SOQL Queries using a Custom Index](https://help.salesforce.com/s/articleView?id=000385213&type=1&language=en_US "HTML (New Window)").

## Code Examples

```
SELECT Name
FROM Object
WHERE Status__c = ''
```

```
Status_Value__c = IF(ISBLANK(Status__c), "blank", Status__c)
```

```
SELECT Name
FROM Object
WHERE Status_Value__c = 'blank'
```

```
SELECT Name
FROM Object
WHERE Status_Value__c = '' OR Email = ''
```
