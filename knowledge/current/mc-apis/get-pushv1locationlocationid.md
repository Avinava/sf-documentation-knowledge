---
title: "GET /push/v1/location/{locationId}"
domain: mc-apis
topic: get-pushv1locationlocationid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.397Z
estimatedTokens: 251
keywords: [push, location, locationId, specific, **Overview**]
---

> Gets a specific location.

# GET /push/v1/location/{locationId}

## **Overview**

Gets a specific location.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| locationId | string | Required | ID of the location |

### Usage

**Example Request**

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /push/v1/location/5555555555A
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```
HTTP/1.1 200 OK
{
  "id": "5555555555A",
  "name": "Location A",
  "location": "Main Location on Elm Street",
  "description": "Location at 123 Elm St, Nowhere, CA 00000",
  "center": {
    "latitude": 30.750362,
    "longitude": -95.374712
  },
  "radius": 50,
  "attributes": [
    {
      "attribute": "Address 1",
      "value": "123 Elm St"
    },
    {
      "attribute": "City",
      "value": "Nowhere"
    },
    {
      "attribute": "State",
      "value": "CA"
    },
    {
      "attribute": "Zip",
      "value": "00000"
    }
  ]
}
```

Last Updated: Jun 8, 2021
