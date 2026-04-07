---
title: "POST /messaging/v1/domainverification/bulk/insert"
domain: mc-apis
topic: post-messagingv1domainverificationbulkinsert
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.470Z
estimatedTokens: 462
keywords: [POST, messaging, domainverification, bulk, insert, Queue, Address, Management, either, array, email, addresses, data, extension, column]
---

# POST /messaging/v1/domainverification/bulk/insert

> Queue a bulk insert to the From Address Management table using either an array of email addresses or a data extension and column reference.

# POST /messaging/v1/domainverification/bulk/insert

## **Overview**

Queue a bulk insert to the From Address Management table using either an array of email addresses or a data extension and column reference.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| NotificationEmail | string | Required | Email address where a notification is sent when the process completes. |
| Addresses | string |  | Array of email addresses to add as from addresses. The call must include either Addresses or DETable and DEColumn. |
| DETable | string |  | Name of the data extension to retrieve addresses from. The call must include either DETable and DEColumn or Addresses. |
| DEColumn | string |  | Column in DETable to retrieve addresses from. The call must include either DETable and DEColumn or Addresses. |

## Usage

### Required Marketing Cloud Permissions

-   Administration, Access

### Example Request 1 (Address Blob)

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/domainverification/bulk/insert
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "NotificationEmail": "somebody@salesforce.com",
  "Addresses": [ "somebody@gmail.com", "somebody@yahoo.com" ]
}
```

### Example Request 2 (DE)

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/domainverification/bulk/insert
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "NotificationEmail": "somebody@salesforce.com",
  "DETable": "NotARealDE",
  "DEColumn": "NotARealColumn"
}
```

### Example Response

```js
HTTP/1.1 201 Created
{
"requestID": "be3c6442-9d8e-45be-a30a-704ad41c2641"
}
```

## Related Items

-   [Domain Verification in Salesforce Help](https://help.salesforce.com/articleView?id=mc_es_domain_verification.htm&type=5)

Last Updated: Jun 8, 2021
