---
title: "DELETE /push/v1/message/{messageId}"
domain: mc-apis
topic: delete-pushv1messagemessageid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:21.410Z
estimatedTokens: 173
keywords: [push, message, messageId, Deletes, **Overview**, Usage]
---

# DELETE /push/v1/message/{messageId}

> Deletes an existing message

# DELETE /push/v1/message/{messageId}

## **Overview**

Deletes an existing message

| Name | Type |  | Description |
| --- | --- | --- | --- |
| messageId | string | Required | Id of the message to delete |

### Usage

**Example Request**

```json
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /push/v1/message/mjK54s3RT
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

If the request includes a valid messageID value, the API returns the following response.

```json
HTTP/1.1 202 Accepted
```

If the request includes an invalid value, the API returns a 400 response with details on the error.

Last Updated: Jun 8, 2021
