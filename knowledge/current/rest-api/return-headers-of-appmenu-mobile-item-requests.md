---
title: "Return Headers of AppMenu Mobile Item Requests"
domain: rest-api
topic: return-headers-of-appmenu-mobile-item-requests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.378Z
estimatedTokens: 146
keywords: [Headers, AppMenu, Mobile, Item, Requests, only, headers, returned, GET, request, Salesforce, mobile, app, Android, iOS, web, navigation, menu., URI, header]
---

# Return Headers of AppMenu Mobile Item Requests

> Returns only the headers that are returned by a GET request to the Salesforce mobile app
  for Android and iOS and the mobile web navigation menu. Use this URI to see the header values
  before you retrieve the content of the resource. This resource is available in REST API version
  29.0 and later.

# Return Headers of AppMenu Mobile Item Requests

Returns only the headers that are returned by a GET request to the Salesforce mobile app for Android and iOS and the mobile web navigation menu. Use this URI to see the header values before you retrieve the content of the resource. This resource is available in REST API version 29.0 and later.

## Syntax

URI

/services/data/vXX.X/appMenu/Salesforce1/

Formats

JSON, XML

HTTP methods

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
curl -X HEAD --head https://MyDomainName.my.salesforce.com/services/data/v66.0/appMenu/Salesforce1 -H "Authorization: Bearer token"
```
