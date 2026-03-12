---
title: "Return Headers of App Menu Item Requests"
domain: rest-api
topic: return-headers-of-app-menu-item-requests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.222Z
estimatedTokens: 134
keywords: [App, Menu, Item, Requests, Salesforce, dropdown, items, URI, retrieve, content, resource, REST, API, version, 29.0]
---

# Return Headers of App Menu Item Requests

> Returns only the headers that are returned by a GET request for the Salesforce app
		dropdown menu items. Use this URI to see the header values before you retrieve the content
		of the resource. This resource is available in REST API version 29.0 and later.

# Return Headers of App Menu Item Requests

Returns only the headers that are returned by a GET request for the Salesforce app dropdown menu items. Use this URI to see the header values before you retrieve the content of the resource. This resource is available in REST API version 29.0 and later.

## Syntax

URI

/services/data/vXX.X/appMenu/AppSwitcher/

Formats

JSON, XML

HTTP method

HEAD

Authentication

Authorization: Bearer token

Request body

None

Request parameters

None required

## Example

Example Request

```

```

## Code Examples

```
curl -X HEAD --head https://MyDomainName.my.salesforce.com/services/data/v66.0/appMenu/AppSwitcher -H "Authorization: Bearer token"
```
