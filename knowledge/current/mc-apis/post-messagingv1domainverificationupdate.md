---
title: "POST /messaging/v1/domainverification/update"
domain: mc-apis
topic: post-messagingv1domainverificationupdate
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:16.732Z
estimatedTokens: 292
keywords: [POST, messaging, domainverification, record, Address, Management, **Overview**, Marketing, Cloud, Permissions, Scope, Email, Items]
---

> Update a record in From Address Management.

# POST /messaging/v1/domainverification/update

## **Overview**

Update a record in From Address Management.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| domain | string | Required | The root domain of the email address. |
| isSendable | boolean |  | Determines whether or not the email address is sendable. |

## Usage

### Required Marketing Cloud Permissions

-   Administration, Access

### Required Scope

-   Account Settings, Read and Write
-   From Address Management, Read and Write

### Example Request 1 (Update Email Address)

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/domainverification/update
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

[
   {
      "EmailAddress":"test@test.com",
      "IsSendable":"false"
   },
   {
      "EmailAddress":"noreply.salesforce.com",
      "IsSendable":"false"
   }
]
```

### Example Response

```js
HTTP/1.1 200 OK
{
    "2 records successfully updated!"
}
```

## Related Items

-   [Domain Verification in Salesforce Help](https://help.salesforce.com/articleView?id=mc_es_domain_verification.htm&type=5)

Last Updated: Jun 8, 2021
