---
title: "Return HTTP Headers for Custom Invocable Actions"
domain: rest-api
topic: return-http-headers-for-custom-invocable-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.346Z
estimatedTokens: 145
keywords: [HTTP, Headers, Custom, Invocable, Actions, only, headers, returned, sending, GET, request, custom, invocable, actions, resource., gives, chance, header, values, before]
---

# Return HTTP Headers for Custom Invocable Actions

> Returns only the headers that are returned by sending a GET request to the custom
    invocable actions resource. This gives you a chance to see returned header values of the GET
    request before retrieving the content. This resource is available in REST API version 32.0 and
    later.

# Return HTTP Headers for Custom Invocable Actions

Returns only the headers that are returned by sending a GET request to the custom invocable actions resource. This gives you a chance to see returned header values of the GET request before retrieving the content. This resource is available in REST API version 32.0 and later.

## URI

/services/data/vXX.X/actions/custom

## Formats

JSON, XML

## HTTP Methods

HEAD

## Authentication

Authorization: Bearer token

## Request parameters

None required

## Example

Example Request

```

```

Example Response Body

```

```

## Code Examples

```
curl -X HEAD --head https://MyDomainName.my.salesforce.com/services/data/v66.0/actions/custom -H "Authorization: Bearer token"
```

```
HTTP/1.1 200 OK 
Date: Mon, 21 Nov 2022 22:56:26 GMT
```
