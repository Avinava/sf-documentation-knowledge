---
title: "POST /messaging/v1/domainverification/verify"
domain: mc-apis
topic: post-messagingv1domainverificationverify
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:21.594Z
estimatedTokens: 197
keywords: [POST, messaging, domainverification, verify, Checks, whether, domain, already, exists, **Overview**, Usage, Marketing, Cloud, Permissions]
---

# POST /messaging/v1/domainverification/verify

> Checks whether a domain already exists.

# POST /messaging/v1/domainverification/verify

## **Overview**

Checks whether a domain already exists.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| domain | string |  | The root domain of the email address. |
| key | boolean |  | The domain’s stored token key. |

## Usage

### Required Marketing Cloud Permissions

-   Administration, Access

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/domainverification/verify
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "Domain" : "example.com",
    "Key" : ""
}
```

### Example Response

```js
HTTP/1.1 200 OK
{
    "Domain" : "example.com",
    "Key" : "SFMC-T2isWsgr_EPofeVerEFItSRDvoJz-EFq9u5zwer0"
}
```

Last Updated: Jun 8, 2021
