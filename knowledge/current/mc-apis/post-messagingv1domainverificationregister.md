---
title: "POST /messaging/v1/domainverification/register"
domain: mc-apis
topic: post-messagingv1domainverificationregister
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:21.578Z
estimatedTokens: 194
keywords: [POST, messaging, domainverification, register, Registers, domain, validation, generating, returning, token, added, DNS, **Overview**, Usage, Marketing]
---

# POST /messaging/v1/domainverification/register

> Registers a domain for validation by generating and returning the token added to the DNS.

# POST /messaging/v1/domainverification/register

## **Overview**

Registers a domain for validation by generating and returning the token added to the DNS.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| domain | string | Required | The root domain of the email address. |

## Usage

### Required Marketing Cloud Permissions

-   Administration, Access

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/domainverification/register
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "domain": "example.com"
}
```

### Example Response

```js
HTTP/1.1 200 OK
{
    "domain": "example.com",
    "key": "SFMC-T2isWsgr_EPofeVerEFItSRDvoJz-EFq9u5zwer0"
}
```

Last Updated: Jun 8, 2021
