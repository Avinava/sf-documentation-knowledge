---
title: "Processing Results"
domain: ajax
topic: processing-results
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:56.649Z
estimatedTokens: 223
keywords: [Processing, Results, process, query, enough, rows, require, queryMore, queryLocator, much, now, iterating, across]
---

# Processing Results

> You can process the results of a query that returns enough rows
to require queryMore and queryLocator, much as you do now,
iterating across the results:

# Processing Results

You can process the results of a query that returns enough rows to require queryMore and queryLocator, much as you do now, iterating across the results:

```

```

However, the AJAX Toolkit provides the QueryResultIterator object so that you can easily iterate through results without invoking queryMore and queryLocator. If you are experienced with the API and JavaScript, see [QueryResultIterator](atlas.en-us.ajax.meta/ajax/sforce_api_ajax_queryresultiterator.htm "Iterate over query results returned by the AJAX Toolkit without invoking queryMore and queryLocator.").

For other calls, you must handle the batching of up to 200 records at a time yourself. For example, the following sample shows how to batch files for a create() call:

```

```

For more examples, see [Examples of Synchronous Calls](atlas.en-us.ajax.meta/ajax/sforce_api_ajax_more_samples.htm).

## Code Examples

```
var result = sforce.connection.query("select name, id from account");
    var queryMore = true;
    while (queryMore) {
        var records = result.getArray("records");
        for (var i = 0; i < records.length; i++) {
            //process records[i]
        }
        if (result.getBoolean("done")) {
            queryMore = false;
        } else {
            result = sforce.connection.queryMore(result.queryLocator);
        }
    }
```

```
var accounts = [];

for (var i=0; i<10; i++) {
    var account = new sforce.SObject("Account");
    account.Name = "my new account " + i;
    accounts.push(account);
    }

var result = sforce.connection.create(accounts);

var sb = "";

for (var i=0; i<result.length; i++) {
    if (result[i].getBoolean("success")) {
    sb += "
 new account created with id " + result[i].id;
    } else {
    sb += "
 failed to create account " + result[i];
    }
}

alert("Result : " + sb);
```

## Related Topics

- QueryResultIterator (atlas.en-us.ajax.meta/ajax/sforce_api_ajax_queryresultiterator.htm)
- Examples of Synchronous Calls (atlas.en-us.ajax.meta/ajax/sforce_api_ajax_more_samples.htm)
