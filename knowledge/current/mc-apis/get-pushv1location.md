---
title: "GET /push/v1/location"
domain: mc-apis
topic: get-pushv1location
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.073Z
estimatedTokens: 673
keywords: [push, location, locations, **Overview**, Sort, Filter, Operators, Usage]
---

# GET /push/v1/location

> Gets a list of all locations.

# GET /push/v1/location

## **Overview**

Gets a list of all locations.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| $page | number |  | Page number to return from the paged results. Start with 1 and continue until you get zero results. Typically provided along with the $pagesize parameter. |
| $pagesize | number |  | Number of results per page to return. Typically provided along with the $page parameter. |
| $filter | string |  | Filter by a location's property using a simple operator and value. Valid filter properties are Name and LocationType of 1 = Geofence or 3 = Beacon. |
| $orderBy | string |  | Determines which property to use for sorting, and also determines the direction in which to sort the data. |

### Sort Syntax

The sort syntax is the location property name followed by the order direction, either asc or desc, with a space in between. Sort by multiple property names by separating each sequence with a comma. Valid sort properties are:

-   locationType
-   name
-   geofenceId
-   createdDate
-   modifiedDate

This example sorts by name in descending order: /push/v1/message?$orderBy=name asc.

### Filter Syntax

Each filter is separated by %20. Any other special characters need to be url encoded.

### Filter Operators

| Operator | Description |
| --- | --- |
| eq | Equals. Compares numbers and strings. |
| neq | Is not equal to. Compares numbers and strings. |
| lt | Is less than. Compares numbers only. |
| lte | Is less than or equal to. Compares numbers only. |
| gt | Is greater than. Compares numbers only. |
| gte | Is greater than or equal to. Compares numbers only. |
| like | Is similar to. Compares strings only. |

### Usage

**Example Request**

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /push/v1/location/?$pageSize=25&$page=1&$filter=name%20like%20%27%25test%25%27%20and%20locationType%20eq%20%271%27
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```
HTTP/1.1 200 OK
{
"count": 2,
"page": 1,
"pageSize": 25,
"links": {},
"items": [
  {
    "id": "5555555555A",
    "name": "testA",
    "location": "Main Location on Elm Street",
    "description": "Location at 123 Elm St, Nowhere, CA 00000",
    "center": {
      "latitude": 30.750362,
      "longitude": -95.374712
    },
    "radius": 50,
    "locationType": 1
  },
  {
    "id": "5555555555B",
    "name": "testB",
    "location": "Secondary Location on Maple Street",
    "description": "Location at 456 Maple St, Nowhere, CA 00000",
    "center": {
      "latitude": 30.751362,
      "longitude": -95.374712
    },
    "radius": 50,
    "locationType": 1
  }
]}
```

Last Updated: Jun 8, 2021
