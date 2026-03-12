---
title: "QMgetFields_WFieldLabel API"
domain: esm-developer-guide
topic: qmgetfieldswfieldlabel-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.974Z
estimatedTokens: 100
keywords: [QMgetFields_WFieldLabel, API, labels, quote, members, QMgetFields, _WFieldLabel, URI, HTTP]
---

# QMgetFields_WFieldLabel API

> Get the field set with fields and labels for the quote members.

# QMgetFields\_WFieldLabel API

Get the field set with fields and labels for the quote members.

This API is used with the QuoteMemberGetFields Vlocity Integration Procedure (VIP) to get the quote member's fields and labels based on the FieldSetType parameter, which can have a value of Location or Subscriber.

## URI

```

```

## HTTP Method

POST

## Request Body

```

```

## Response

```

```

## Code Examples

```
/services/apexrest/vlocity_cmt/v1/integrationprocedure/QMgetFields_WFieldLabel/
```

```
{
  "FieldSetType": "Subscriber"
}
```

```
{
  "QMFSFields": [{
    "label": "Title",
    "name": "Title__c"
  },
  {
    "label": "First Name",
    "name": "FirstName__c"
  },
  {
    "label": "Last Name",
    "name": "LastName__c"
  },
  {
    "label": "MSISDN",
    "name": "MSISDN__c"
  },
  {
    "label": "Email",
    "name": "Email__c"
  }]
}
```
