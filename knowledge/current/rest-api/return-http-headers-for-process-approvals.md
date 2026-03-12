---
title: "Return HTTP Headers for Process Approvals"
domain: rest-api
topic: return-http-headers-for-process-approvals
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.782Z
estimatedTokens: 141
keywords: [HTTP, Headers, Process, Approvals, only, headers, returned, sending, GET, request, process, approvals, resource., gives, chance, header, values, before, retrieving, content.]
---

# Return HTTP Headers for Process Approvals

> Returns only the headers that are returned by sending a
   GET request to the process approvals resource. This gives you a chance to see returned header
   values of the GET request before retrieving the content. This resource is available in REST
  API version 30.0 and later.

# Return HTTP Headers for Process Approvals

Returns only the headers that are returned by sending a GET request to the process approvals resource. This gives you a chance to see returned header values of the GET request before retrieving the content. This resource is available in REST API version 30.0 and later.

## Syntax

URI

/services/data/vXX.X/process/approvals/

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

Example Response Body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/process/approvals/ -H "Authorization: Bearer token"
```

```
HTTP/1.1 200 OK 
Date: Mon, 21 Nov 2022 22:56:26 GMT
```
