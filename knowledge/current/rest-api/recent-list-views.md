---
title: "Recent List Views"
domain: rest-api
topic: recent-list-views
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.864Z
estimatedTokens: 101
keywords: [Recent, List, Views, list, recently, used, views, given, sObject, type., resource, REST, API, version, 32.0, later., Syntax, Example]
---

# Recent List Views

> Returns the list of recently used list views for the given sObject type. This resource
    is available in REST API version 32.0 and later.

# Recent List Views

Returns the list of recently used list views for the given sObject type. This resource is available in REST API version 32.0 and later.

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/listviews/recent

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

None

## Example

Example Request

```

```

Example Response Body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/listviews/recent -H "Authorization: Bearer token"
```

```
{
  "done" : true,
  "listviews" : [ {
    "describeUrl" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcCNMA0/describe",
    "developerName" : "MyAccounts",
    "id" : "00BD0000005WcCNMA0",
    "label" : "My Accounts",
    "resultsUrl" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcCNMA0/results",
    "soqlCompatible" : true,
    "url" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcCNMA0"
  }, {
    "describeUrl" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcBeMAK/describe",
    "developerName" : "NewThisWeek",
    "id" : "00BD0000005WcBeMAK",
    "label" : "New This Week",
    "resultsUrl" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcBeMAK/results",
    "soqlCompatible" : true,
    "url" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcBeMAK"
  }, {
    "describeUrl" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcCFMA0/describe",
    "developerName" : "AllAccounts",
    "id" : "00BD0000005WcCFMA0",
    "label" : "All Accounts",
    "resultsUrl" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcCFMA0/results",
    "soqlCompatible" : true,
    "url" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcCFMA0"
  } ],
  "nextRecordsUrl" : null,
  "size" : 3,
  "sobjectType" : "Account"
}
```
