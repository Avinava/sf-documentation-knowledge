---
title: "Examples of Synchronous Calls"
domain: ajax
topic: examples-of-synchronous-calls
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.627Z
estimatedTokens: 500
keywords: [Examples, Synchronous, Calls, possible, changed, noninclusive, terms, align, company, Equality, maintained, certain, avoid, any, effect]
---

# Examples of Synchronous Calls

> Where possible, we changed noninclusive terms to align with our
        company value of Equality. We maintained certain terms to avoid any effect on
        customer implementations.

# Examples of Synchronous Calls

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=ajax)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Data Call Examples

login Example:

```

```

query Example:

```

```

queryMore Example:

```

```

queryAll Example:

```

```

Relationship Query Example—Child to Parent:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=ajax)

#### Note

Relationship name formats differ depending on the direction of the relationship (parent-to-child or child-to-parent), and also depending on whether the objects are standard or custom objects. For more information, see Relationship Queries in the Salesforce SOQL and SOSL Reference Guide at [www.salesforce.com/us/developer/docs/soql\_sosl/index.htm](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/ "HTML (New Window)").

Relationship Query Example—Parent to Child:

```

```

create Example:

```

```

Batch create Example:

```

```

delete Example:

```

```

merge Example:

```

```

process Example:

```

```

update Example:

```

```

undelete Example:

```

```

upsert Example:

```

```

retrieve Example:

```

```

search Example:

```

```

getDeleted Example:

```

```

getUpdated Example:

```

```

convertLead Example:

```

```

## Describe Examples

describeSObject Account Example:

```

```

describeSObjects Example:

```

```

describeGlobal Example:

```

```

describeLayout Example:

```

```

describeTabs Example:

```

```

## Utility Examples

getServerTimestamp Example:

```

```

getUserInfo Example:

```

```

resetPassword and setPassword Example:

```

```

sendEmail Example:

```

```

The following sample shows best practice techniques by putting all processing in a function that does not execute until the HTML page is loaded.

```

```

## Code Examples

```
try{
    var result = sforce.connection.login("myname@myemail.com", "password");
    log("logged in with session id " + result.sessionId);
  }catch(error) {
    if (error.faultcode.indexOf("INVALID_LOGIN") != -1) {
      log("check your username and passwd, invalid login");
    } else {
      log(error);
    }
  }
```

```
result = sforce.connection.query("Select Name, Id from User");
  records = result.getArray("records");
 
  for (var i=0; i< records.length; i++) {
    var record = records[i];
    log(record.Name + " -- " + record.Id);
  }
```

```
var result = sforce.connection.query("select name, id from account");
 
  var queryMore = true;
  while (queryMore) {
      var records = result.getArray("records");
      var sb = new sforce.StringBuffer();
 
      for (var i = 0; i < records.length; i++) {
        sb.append(records[i].Name).append(",");
      }
 
      log(records.length);
      log(sb.toString());
 
      if (result.getBoolean("done")) {
        queryMore = false;
      } else {

        result = sforce.connection.queryMore(result.queryLocator);
    }
  }
```

```
var result = sforce.connection.queryAll("Select Name, Id from Account");
  var records = result.getArray("records");
 
  for (var i=0; i<records.length; i++) {
    var record = records[i];
    log(record.Name + " -- " + record.Id);
  }
```

```
var result = sforce.connection.query("SELECT c.Id, c.firstname, " +
    "c.lastname, c.leadsource, a.Id, a.name, a.industry, c.accountId " +
    "FROM Contact c, c.account a ORDER BY leadsource LIMIT 10");
 
  var it = new sforce.QueryResultIterator(result);
 
  while(it.hasNext()) {
    var record = it.next();
    var accountName = record.Account ? record.Account.Name : null;
 
    log( record.FirstName + " " + record.LastName +
         " in account " + accountName);
  }
```
