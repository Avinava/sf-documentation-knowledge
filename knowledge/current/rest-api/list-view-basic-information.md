---
title: "List View Basic Information"
domain: rest-api
topic: list-view-basic-information
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.549Z
estimatedTokens: 106
keywords: [View, Basic, specific, including, label, API, resource, REST, version, 32.0, later]
---

# List View Basic Information

> Returns basic information for a specific list view, including the label, API name, and
  ID. This resource is available in REST API version 32.0 and later.

# List View Basic Information

Returns basic information for a specific list view, including the label, API name, and ID. This resource is available in REST API version 32.0 and later.

URI

/services/data/vXX.X/sobjects/sObject/listviews/listViewID

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
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcBeMAK -H "Authorization: Bearer token"
```

```
{
  "describeUrl" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcBeMAK/describe",
  "developerName" : "NewThisWeek",
  "id" : "00BD0000005WcBeMAK",
  "label" : "New This Week",
  "resultsUrl" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcBeMAK/results",
  "soqlCompatible" : true,
  "url" : "/services/data/v66.0/sobjects/Account/listviews/00BD0000005WcBeMAK"
}
```
