---
title: "GET /messaging/v1/email/definitions"
domain: mc-apis
topic: get-messagingv1emaildefinitions
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.023Z
estimatedTokens: 380
keywords: [messaging, email, definitions, send, **Overview**, Usage, HTTP, Responses]
---

# GET /messaging/v1/email/definitions

> Gets a list of send definitions.

# GET /messaging/v1/email/definitions

## **Overview**

Gets a list of send definitions.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| $filter | string |  | Filter by status type. Accepted values are active, inactive, or deleted. Valid operations are eq and neq. |
| $pageSize | integer |  | Number of definitions, which are array elements, to return per paged response. |
| $page | integer |  | Page number to return. |
| $orderBy | string |  | Sort by a dimension. You can sort by only one dimension. Accepted values are definitionKey, name, createdDate, modifiedDate, and status. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET  /messaging/v1/email/definitions/?$filter=status%20eq%20active&$pageSize=10&$page=1&$orderBy=name
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

```js
HTTP/1.1 200 OK
{
  "requestId": "ba9633fa-5c8d-4c42-8efa-a16412ac0c53",
  "definitions": [
    {
      "definitionKey": "2FA_order_accounts",
      "status": "Active",
      "name": "My Unique Definition Name",
      "createdDate": "2018-07-18T19:52:00",
      "modifiedDate": "2018-07-18T19:52:00"
    }
  ],
  "count": 1,
  "page": 1,
  "pageSize": 10
}
```

### HTTP Responses

| Response | Reason |
| --- | --- |
| 200 OK | Success. Review example response. |
| 400 Bad Request | Invalid request |
| 403 Forbidden | Failed to pass authorization. |
| 500 Server Error | Internal error |

Last Updated: Jun 8, 2021
