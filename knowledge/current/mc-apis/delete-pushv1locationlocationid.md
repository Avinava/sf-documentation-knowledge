---
title: "DELETE /push/v1/location/{locationId}"
domain: mc-apis
topic: delete-pushv1locationlocationid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:21.395Z
estimatedTokens: 124
keywords: [push, location, locationId, Deletes, **Overview**, Usage]
---

# DELETE /push/v1/location/{locationId}

> Deletes an existing location.

# DELETE /push/v1/location/{locationId}

## **Overview**

Deletes an existing location.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| locationId | string | Required | ID of the location to delete |

### Usage

**Example Request**

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /push/v1/location/5555555555A
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```
HTTP/1.1 200 OK
```

Last Updated: Jun 8, 2021
