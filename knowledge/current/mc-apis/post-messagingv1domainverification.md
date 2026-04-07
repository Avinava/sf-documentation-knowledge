---
title: "POST /messaging/v1/domainverification"
domain: mc-apis
topic: post-messagingv1domainverification
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:16.698Z
estimatedTokens: 245
keywords: [POST, messaging, domainverification, record, Address, Management, trigger, verification, email, **Overview**, Marketing, Cloud, Permissions, Scope, Items]
---

> Create a record in From Address Management and trigger a verification email. .

# POST /messaging/v1/domainverification

## **Overview**

Create a record in From Address Management and trigger a verification email. .

| Name | Type |  | Description |
| --- | --- | --- | --- |
| domain | string | Required | The root domain of the email address. |

## Usage

### Required Marketing Cloud Permissions

-   Administration, Access

### Required Scope

-   Account Settings, Read and Write
-   From Address Management, Read and Write

### Example Request 1 (Create Email Address)

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/domainverification/
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "domain":"test@test.com"
}
```

### Example Response

```js
HTTP/1.1 201 Created
{
    "test@test.com successfully added."
}
```

## Related Items

-   [Domain Verification in Salesforce Help](https://help.salesforce.com/articleView?id=mc_es_domain_verification.htm&type=5)

Last Updated: Jun 8, 2021
