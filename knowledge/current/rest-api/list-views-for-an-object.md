---
title: "List Views for an Object"
domain: rest-api
topic: list-views-for-an-object
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.564Z
estimatedTokens: 111
keywords: [Views, sObject, including, basic, view, resource, REST, API, version, 32.0, later]
---

# List Views for an Object

> Returns the list of list views for the specified sObject, including the ID and other
    basic information about each list view. This resource is available in REST API version 32.0 and
    later.

# List Views for an Object

Returns the list of list views for the specified sObject, including the ID and other basic information about each list view. This resource is available in REST API version 32.0 and later.

URI

/services/data/vXX.X/sobjects/sObject/listviews

Formats

JSON, XML

HTTP Methods

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
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/listviews -H "Authorization: Bearer token"
```

```
{
  "done" : true,
  "listviews" : [ {
    "describeUrl" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcBeMAK/describe",
    "developerName" : "NewThisWeek",
    "id" : "00BD0000005WcBeMAK",
    "label" : "New This Week",
    "resultsUrl" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcBeMAK/results",
    "soqlCompatible" : true,
    "url" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcBeMAK"
  }, {
    "describeUrl" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcBpMAK/describe",
    "developerName" : "NewLastWeek",
    "id" : "00BD0000005WcBpMAK",
    "label" : "New Last Week",
    "resultsUrl" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcBpMAK/results",
    "soqlCompatible" : true,
    "url" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcBpMAK"
  }, {
    "describeUrl" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcC6MAK/describe",
    "developerName" : "PlatinumandGoldSLACustomers",
    "id" : "00BD0000005WcC6MAK",
    "label" : "Platinum and Gold SLA Customers",
    "resultsUrl" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcC6MAK/results",
    "soqlCompatible" : true,
    "url" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcC6MAK"
  }, {
    "describeUrl" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcCEMA0/describe",
    "developerName" : "RecentlyViewedAccounts",
    "id" : "00BD0000005WcCEMA0",
    "label" : "Recently Viewed Accounts",
    "resultsUrl" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcCEMA0/results",
    "soqlCompatible" : true,
    "url" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcCEMA0"
  }, {
    "describeUrl" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcCFMA0/describe",
    "developerName" : "AllAccounts",
    "id" : "00BD0000005WcCFMA0",
    "label" : "All Accounts",
    "resultsUrl" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcCFMA0/results",
    "soqlCompatible" : true,
    "url" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcCFMA0"
  }, {
    "describeUrl" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcCNMA0/describe",
    "developerName" : "MyAccounts",
    "id" : "00BD0000005WcCNMA0",
    "label" : "My Accounts",
    "resultsUrl" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcCNMA0/results",
    "soqlCompatible" : true,
    "url" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcCNMA0"
  } ],
  "nextRecordsUrl" : null,
  "size" : 6,
  "sobjectType" : "Account"
}
```
