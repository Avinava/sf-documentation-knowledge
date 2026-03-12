---
title: "Return Headers Using sObject CompactLayouts"
domain: rest-api
topic: return-headers-using-sobject-compactlayouts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.980Z
estimatedTokens: 154
keywords: [Headers, sObject, CompactLayouts, only, headers, returned, GET, request, resource., gives, chance, header, values, ahead, time, before, retrieving, content, resource, REST]
---

# Return Headers Using sObject CompactLayouts

> Returns only the headers that are returned by a GET request to the sObject
		CompactLayouts resource. This gives you a chance to see header values ahead of time before
		retrieving the content of the resource. This resource is available in REST API version 29.0
		and later.

# Return Headers Using sObject CompactLayouts

Returns only the headers that are returned by a GET request to the sObject CompactLayouts resource. This gives you a chance to see header values ahead of time before retrieving the content of the resource. This resource is available in REST API version 29.0 and later.

## Syntax

URI

For a compact layout description for a specific object, use /services/data/vXX.X/sobjects/sObject/describe/compactLayouts/

Formats

JSON, XML

HTTP methods

HEAD

Authentication

Authorization: Bearer token

Request parameters

None required

## Example

Example Request

```

```

## Code Examples

```
curl -X HEAD --head https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/describe/compactLayouts -H "Authorization: Bearer token"
```
