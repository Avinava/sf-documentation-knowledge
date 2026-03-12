---
title: "Return Layout Headers for an Object With Multiple Record
		Types"
domain: rest-api
topic: return-layout-headers-for-an-object-with-multiple-record-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.863Z
estimatedTokens: 124
keywords: [Layout, Multiple, Record, sObject, Layouts, resources, gives, chance, ahead, time, retrieving, content, resource]
---

# Return Layout Headers for an Object With Multiple Record
		Types

> Returns only the headers that are returned by a GET request to sObject Layouts
		resources. This gives you a chance to see header values ahead of time before retrieving the
		content of the resource.

# Return Layout Headers for an Object With Multiple Record Types

Returns only the headers that are returned by a GET request to sObject Layouts resources. This gives you a chance to see header values ahead of time before retrieving the content of the resource.

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/describe/layouts/recordTypeId

Formats

JSON, XML

HTTP Method

HEAD

Authentication

Authorization: Bearer token

Parameters

None required

## Example

Example Request

```

```

## Code Examples

```
curl -X HEAD https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Chocolate__c/describe/layouts/0125c000000oIN9AAM -H "Authorization: Bearer token"
```
