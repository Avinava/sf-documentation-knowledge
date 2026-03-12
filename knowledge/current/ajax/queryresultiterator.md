---
title: "QueryResultIterator"
domain: ajax
topic: queryresultiterator
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.643Z
estimatedTokens: 82
keywords: [QueryResultIterator, Iterate, over, query, results, AJAX, Toolkit, invoking, queryMore, queryLocator]
---

# QueryResultIterator

> Iterate over query results returned by the AJAX Toolkit without invoking queryMore and queryLocator.

# QueryResultIterator

Iterate over query results returned by the AJAX Toolkit without invoking queryMore and queryLocator.

```

```

1.  The sforce.connection.query method returns a QueryResult object.
2.  A QueryResultIterator object is created and passed the QueryResult object.
3.  The code iterates through the records.

## Code Examples

```
var result = sforce.connection.query("select id, name from account");
    var it = new sforce.QueryResultIterator(result);

    while (it.hasNext()) {
        var account = it.next();
        sforce.debug.log(account.Name);
    }
```
