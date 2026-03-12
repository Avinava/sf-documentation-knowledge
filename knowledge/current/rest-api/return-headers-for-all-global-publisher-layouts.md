---
title: "Return Headers for All Global Publisher Layouts"
domain: rest-api
topic: return-headers-for-all-global-publisher-layouts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.853Z
estimatedTokens: 117
keywords: [Publisher, Layouts, sObject, resources, gives, chance, ahead, time, retrieving, content, resource]
---

# Return Headers for All Global Publisher Layouts

> Returns only the headers that are returned by a GET request to sObject Layouts
		resources. This gives you a chance to see header values ahead of time before retrieving the
		content of the resource.

# Return Headers for All Global Publisher Layouts

Returns only the headers that are returned by a GET request to sObject Layouts resources. This gives you a chance to see header values ahead of time before retrieving the content of the resource.

## Syntax

URI

/services/data/vXX.X/sobjects/Global/describe/layouts/

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
curl -X HEAD https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Global/describe/layouts/ -H "Authorization: Bearer token"
```
