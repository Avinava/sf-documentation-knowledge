---
title: "POST /messaging/v1/domainverification/push"
domain: mc-apis
topic: post-messagingv1domainverificationpush
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:16.717Z
estimatedTokens: 274
keywords: [POST, messaging, domainverification, push, Pushes, registered, domains, child, business, units, account, EID, **Overview**, Marketing, Cloud, Permissions, Scope]
---

> Pushes one or more registered domains to all existing child business units of your account (EID).

# POST /messaging/v1/domainverification/push

## **Overview**

Pushes one or more registered domains to all existing child business units of your account (EID).

| Name | Type |  | Description |
| --- | --- | --- | --- |
| domainlist | Array of strings | Required | List of registered domains to push to existing child business units. Each child business unit receives all registered domains in this list. |

## Usage

### Required Marketing Cloud Permissions

-   Administration, Access

### Required Scope

-   Account Settings, Read and Write
-   From Address Management, Read and Write

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/domainverification/push
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "domainlist":["exampledomain1.com", "exampledomain2.com"]
}
```

### Example Response

```js
HTTP/1.1 200 OK
[
  {
    "domain": "exampledomain1.com",
    "message": "Success"
  },
  {
    "domain": "exampledomain2.com",
    "message": "Not an Enterprise Account"
  }
]
```

Last Updated: Jun 8, 2021
