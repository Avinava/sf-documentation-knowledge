---
title: "Return Layout Headers for a Specified Object"
domain: rest-api
topic: return-layout-headers-for-a-specified-object
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.855Z
estimatedTokens: 117
keywords: [Layout, sObject, Layouts, resources, gives, chance, ahead, time, retrieving, content, resource]
---

# Return Layout Headers for a Specified Object

> Returns only the headers that are returned by a GET request to sObject Layouts
		resources. This gives you a chance to see header values ahead of time before retrieving the
		content of the resource.

# Return Layout Headers for a Specified Object

Returns only the headers that are returned by a GET request to sObject Layouts resources. This gives you a chance to see header values ahead of time before retrieving the content of the resource.

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/describe/layouts/

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
curl -X HEAD --head https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Battle_Station__c/describe/layouts/ -H "Authorization: Bearer token"
```
