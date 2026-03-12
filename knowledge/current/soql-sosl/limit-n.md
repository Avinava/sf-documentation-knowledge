---
title: "LIMIT  n"
domain: soql-sosl
topic: limit-n
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.874Z
estimatedTokens: 352
keywords: [LIMIT, clause, added, SOSL, query, specify, maximum, number, rows, text, results, unspecified]
---

# LIMIT  n

> LIMIT is an optional clause that can be added to a
  SOSL query to specify the maximum number of rows that are returned in the text query, which can be
  up to 2,000 results. If unspecified, the default is the maximum 2,000 results.

# LIMIT n

LIMIT is an optional clause that can be added to a SOSL query to specify the maximum number of rows that are returned in the text query, which can be up to 2,000 results. If unspecified, the default is the maximum 2,000 results.

The default of 2,000 results is the largest number of rows that can be returned for API version 28.0 and later. Previous versions return up to 200 results.

The LIMIT clause can’t increase the maximum number of records returned. See [SOSL Limits on Search Results](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_limits.htm "HTML (New Window)").

You can set limits on individual objects or on an entire query.

When you set a limit on the entire query, results are evenly distributed among the objects returned. For example, let’s say you set an overall query limit of 20 and don’t define any limits on individual objects. If 19 of the results are accounts and 35 are contacts, then only 10 accounts and 10 contacts are returned.

```

```

Setting individual object limits allows you to prevent results from a single object using up the maximum query limit before other objects are returned. For example, if you issue this query, at most 20 account records can be returned, and the remaining number of records can be contacts.

```

```

If you specify a limit of 0, no records are returned for that object.

## Code Examples

```
FIND {test} RETURNING Account(id), Contact LIMIT 20
```

```
FIND {test} RETURNING Account(id LIMIT 20), Contact LIMIT 100
```
