---
title: "Examples of Asynchronous Calls"
domain: ajax
topic: examples-of-asynchronous-calls
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.632Z
estimatedTokens: 78
keywords: [Examples, Asynchronous, Calls]
---

# Examples of Asynchronous Calls

# Examples of Asynchronous Calls

query Example:

```

```

query Inline Function Example:

```

```

query With LIMIT Example:

```

```

queryResultIterator Example:

```

```

queryMore Example:

```

```

create Example:

```

```

create Other Objects Example:

```

```

retrieve Account Example:

```

```

## Code Examples

```
var result = sforce.connection.query("Select Name,Id from User", {
      onSuccess : success,
      onFailure : failure
    });
 
  function success(result) {
    var records = result.getArray("records");
 
    for (var i=0; i<records.length; i++) {
      var record = records[i];
      log(record.Name + " -- " + record.Id);
    }
  }
 
  function failure(error) {
    log("An error has occurred " + error);
  }
```

```
var result = sforce.connection.query("Select Name,Id from User", {
      onSuccess : function(result) {
         var records = result.getArray("records");
 
         for (var i=0; i<records.length; i++) {
           var record = records[i];
           log(record.Name + " -- " + record.Id);
         }
      },
      onFailure : function(error) {
        log("An error has occurred " + error);
      }
  });
```

```
var result = sforce.connection.query("Select Name, Id from Account 
          order by Name limit 10", {
    onSuccess : success, onFailure : failure});
 
  function success(result) {
    var it = new sforce.QueryResultIterator(result);
    while(it.hasNext()){
      var record = it.next();
      log(record.Name + " -- " + record.Id);
    }
  }
 
  function failure(error) {
    log("An error has occurred " + error);
  }
```

```
var result = sforce.connection.query("Select Name,Id from User", {
    onSuccess : success, onFailure : failure});
 
  function success(result) {
    var it = new sforce.QueryResultIterator(result);
    while(it.hasNext()){
      var record = it.next();
      log(record.Name + " -- " + record.Id);
    }
  }
 
  function failure(error) {
    log("An error has occurred " + error);
  }
```

```
sforce.connection.query("Select Name,Id from Account", {
      onSuccess : success, onFailure : log });
 
  function success(result) {
    var records = result.getArray("records");
 
    var sb = new sforce.StringBuffer();
    for (var i=0; i<records.length; i++) {
      var record = records[i];
      sb.append(record.Name).append(",");
    }
 
    log(records.length);
    log(sb.toString());
 
    if (result.queryLocator) {
      sforce.connection.queryMore(result.queryLocator, {
          onSuccess : success, onFailure : log});
    }
  }
```
