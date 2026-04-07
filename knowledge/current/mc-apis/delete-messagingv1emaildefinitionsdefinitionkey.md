---
title: "DELETE /messaging/v1/email/definitions/{definitionKey}"
domain: mc-apis
topic: delete-messagingv1emaildefinitionsdefinitionkey
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:21.400Z
estimatedTokens: 313
keywords: [messaging, email, definitions, definitionKey, Deletes, message, definition, can't, restore, deleted, archived, location, key, provided, reuse]
---

# DELETE /messaging/v1/email/definitions/{definitionKey}

> Deletes a message definition. You can't restore a deleted definition. The deleted definition is archived, and a delete location of the definition key is provided in the response for reference. You can reuse a deleted definition key because the information associated with it is copied to a new unique

# DELETE /messaging/v1/email/definitions/{definitionKey}

## **Overview**

Deletes a message definition. You can't restore a deleted definition. The deleted definition is archived, and a delete location of the definition key is provided in the response for reference. You can reuse a deleted definition key because the information associated with it is copied to a new unique identifier.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| definitionKey | string | Required | Unique identifier of the definition. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /messaging/v1/email/definitions/{definitionKey}
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

```
HTTP/1.1 200 OK
{
  "message": “Success",
  "requestId": "UUID",
  "deletedDefinitionKey": "51a05a43-0a75-49dd-8cc7-8d316025c87f"
}
```

### HTTP Responses

| Response | Reason |
| --- | --- |
| 200 OK | Send definition is updated on server. Review example response. |
| 400 Bad Request | Invalid request |
| 403 Forbidden | Failed to pass authorization. |
| 404 Not Found | Send definition doesn’t exist. |
| 500 Server Error | Internal error |

Last Updated: Jun 8, 2021
