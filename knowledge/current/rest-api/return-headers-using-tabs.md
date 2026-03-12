---
title: "Return Headers Using Tabs"
domain: rest-api
topic: return-headers-using-tabs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:36.016Z
estimatedTokens: 125
keywords: [Tabs, resources, gives, chance, retrieving, content, resource, REST, API, version, 31.0, later]
---

# Return Headers Using Tabs

> Returns only the headers that are returned by a GET request to Tabs resources. This
		gives you a chance to see header values before retrieving the content of the resource. This
		resource is available in REST API version 31.0 and later.

# Return Headers Using Tabs

Returns only the headers that are returned by a GET request to Tabs resources. This gives you a chance to see header values before retrieving the content of the resource. This resource is available in REST API version 31.0 and later.

## Syntax

URI

/services/data/vXX.X/tabs/

Formats

JSON, XML

HTTP methods

HEAD

Authentication

Authorization: Bearer token

Request body

None

Request parameters

None

## Example

Return headers of request for all tabs

```

```

## Code Examples

```
curl -X HEAD --head https://MyDomainName.my.salesforce.com/services/data/v66.0/tabs -H "Authorization: Bearer token"
```
