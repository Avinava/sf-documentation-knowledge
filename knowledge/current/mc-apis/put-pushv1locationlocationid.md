---
title: "PUT /push/v1/location/{locationId}"
domain: mc-apis
topic: put-pushv1locationlocationid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:20.885Z
estimatedTokens: 626
keywords: [PUT, push, location, locationId, Updates, **Overview**]
---

> Updates an existing location.

# PUT /push/v1/location/{locationId}

## **Overview**

Updates an existing location.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| locationId | string | Required | ID of the location to update |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| name | string | Required | Name of the location |
| location | string |  | Text defining the location; usually a phyiscal or mailing address |
| description | string |  | Description or notes for the location |
| center | object |  | Center point of the location circle |
| center.latitude | decimal |  | Geographic latitude of the location center |
| center.longitude | decimal |  | Geographic longitude of the location center |
| radius | integer |  | Radius of the location circle in meters |
| attributes | array |  | List of attributes for the location |
| attributes.attribute | string |  | Name of the attribute |
| attributes.value | string |  | Value for the attribute |
| locationType | integer |  | Indicates whether this is a geofence or beacon location. If not specified, it defaults to geofence. To specify, use 1 for geofence or 3 for beacon. |
| proximityUuid | string |  | Unique identifier used to distinguish one beacon from another. Required if creating a beacon location. This number is found on the beacon hardware. Enter the UUID exactly as listed. |
| major | integer |  | Specifies a particular beacon within a group. Required if creating a beacon location. This number is found on the beacon hardware. Enter this number exactly as listed. |
| minor | integer |  | Groups a related set of beacons. Required if creating a beacon location. This number is found on the beacon hardware. Enter this number exactly as listed. |

### Usage

**Example Request**

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /push/v1/location/5555555555A
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
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

**Example Response**

```
HTTP/1.1 200 OK
```

Last Updated: Jun 8, 2021
