---
title: "GET /push/v1/message"
domain: mc-apis
topic: get-pushv1message
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:18.655Z
estimatedTokens: 1096
keywords: [push, message, Retrieves, messages, currently, defined, account, **Overview**, Sort, Filter, Operators]
---

> Retrieves all messages currently defined within an account.

# GET /push/v1/message

## **Overview**

Retrieves all messages currently defined within an account.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| $page | number |  | Page number to return from the paged results. Start with 1 and continue until you get zero results. Typically provided along with the $pagesize parameter. |
| $pagesize | number |  | Number of results per page to return. Typically provided along with the $page parameter. |
| $filter | string |  | Filter by a message's property using a simple operator and value. Valid filter properties are Message Type, Content Type, and Status. |
| $orderBy | string |  | Determines which property to use for sorting, and also determines the direction in which to sort the data. |

### Sort Syntax

The sort syntax is the message property name followed by the order direction, either asc or desc, with a space in between. Sort by multiple property names by separating each sequence with a comma. Valid sort properties are:

-   id
-   name
-   statusid
-   status
-   scheduledDate
-   applicationId
-   application
-   app
-   campaign
-   sendMethodId
-   subject
-   geofenceId
-   createdDate
-   lastUpdated

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

```json
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /push/v1/message/?$pageSize=25&$page=1&$filter=status%20eq%20%272%27
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```json
200 (OK)
{
"count": 2,
"page": 1,
"pageSize": 25,
"links": {},
"items": [
    {
        "id": "MTIzOjExNDow",
        "messageType": 1,
        "contentType": 1,
        "name": "My Message Name",
        "application": {
            "id": "237690ac-41ff-4d3f-82f2-9c7efd89185f",
            "name": "MyApplication"
        },
        "alert": "Alert message to show on device",
        "sound": "Sound to play, or 'default'",
        "badge": "+1",
        "content-available": 1,
        "openDirect": "OD001",
        "keys": [
            { "key": "key01", "value": "value01" },
            { "key": "key02", "value": "value02" },
            { "key": "key03", "value": "value03" }
        ],
        "custom": {
            "customA": 1,
            "customB": "custom text b",
            "customC": {
                "cC": "custom text c"
            }
        },
        "sendInitiator": 0,
        "startDate": "2014-04-30T14:50:00Z",
        "messagesPerPeriod": 1000,
        "minutesPerPeriod": 60,
        "numberOfPeriods": 24,
        "periodType": 5,
        "isRollingPeriod": false,
        "messageLimit": 1,
        "tzBased": true,
        "tzPastSendAction": 0,
        "scheduledTzOffset": -4.0,
        "scheduledTzSupportsDst": true,
        "inclusionLists": [
            { "id": "listID01" },
            { "id": "listID02" },
            { "id": "listID03" }
        ],
        "exclusionLists": [
            { "id": "listID04" },
            { "id": "listID05" },
            { "id": "listID06" }
        ],
        "statusid":  2
    },
    {
        "id": "MjM0OjExNDow",
        "messageType": 3,
        "contentType": 3,
        "name": "My Message Name 2",
        "application": {
            "id": "237690ac-41ff-4d3f-82f2-9c7efd89185f",
            "name": "MyApplication"
        },
        "alert": "Alert message to show on device",
        "startDate": "2014-04-30T14:50:00Z",
        "statusid":  2,
        "pageId": 456,
        "url": "http://www.example.com",
        "subject": "My inbox subject line",
        "geofences": [
            { "id": "MTIzOjEyODow" },
            { "id": "MzIxOjEyODow" }
        ]
    }
]
}
```

If the request includes invalid values, the API returns a 400 response with details on the error.

Last Updated: Jun 8, 2021
