---
title: "POST /messaging/v1/domainverification/delete"
domain: mc-apis
topic: post-messagingv1domainverificationdelete
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:16.703Z
estimatedTokens: 212
keywords: [POST, messaging, domainverification, user, domain, Address, Management, **Overview**, Marketing, Cloud, Permissions]
---

> Delete a user domain in From Address Management.

# POST /messaging/v1/domainverification/delete

## **Overview**

Delete a user domain in From Address Management.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| EmailAddress | string | Required | Email address to delete. |
| DomainType | boolean | Required | Domain type of the email address. Use UserDomain. |

## Usage

### Required Marketing Cloud Permissions

-   Administration
-   ManageDomainRegistration

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/domainverification/delete
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

[
    {
        "EmailAddress": "example@example.com",
        "DomainType": "UserDomain"
    }
]
```

### Example Response

```js
HTTP/1.1 200 OK
{
    "x records successfully updated!"
}
```

Last Updated: Jun 8, 2021
