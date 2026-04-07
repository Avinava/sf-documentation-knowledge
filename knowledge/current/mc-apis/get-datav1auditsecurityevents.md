---
title: "GET /data/v1/audit/securityEvents"
domain: mc-apis
topic: get-datav1auditsecurityevents
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.221Z
estimatedTokens: 657
keywords: [data, audit, securityEvents, Retrieves, logged, Trail, security, events, authenticated, user’s, account, children, Logins, audited, enterprise]
---

# GET /data/v1/audit/securityEvents

> Retrieves logged Audit Trail security events for the authenticated user’s account and its children. Logins are audited at the enterprise level.

# GET /data/v1/audit/securityEvents

## **Overview**

Retrieves logged Audit Trail security events for the authenticated user’s account and its children. Logins are audited at the enterprise level.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| $page | number |  | Page number to return from the paged results. Start with 1 and continue until you get zero results. Typically provided along with the $pagesize parameter. The default is 1. |
| $pagesize | number |  | Number of results per page to return. Typically provided along with the $page parameter. |
| $orderBy | string |  | Determines which direction to sort the data by createdDate. Use asc for ascending and desc for descending order. For example: $orderBy=createdDate desc. If you don't provide the $orderBy parameter, the results are sorted in ascending order. |
| startdate | string |  | Start date of the date range to search for security events. If you don't provide a start date, the default is today minus 30 days. The startdate must be before the enddate. |
| enddate | string |  | End date of the date range to search for security events.. If you don't provide an end date, the default is today. The enddate must be after the startdate. |

## Usage

### Required Marketing Cloud Permissions

-   Permission: Audit Logging | API Access
-   Scope: Data | Tracking Event | Read

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /data/v1/audit/securityEvents
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

```js
HTTP/1.1 200 OK
[
  {
    "page": 1,
    "pageSize": 50,
    "count": 15,
    "items": [
      {
        "id": 00000000,
        "createdDate": "2019-01-01T12:00:00.00",
        "memberId": 00000000,
        "enterpriseId": 00000000,
        "employee": {
          "employeeName": "Test User",
          "userName": "monitoring"
        },
        "ipAddress": "255.255.255.255",
        "sessionId": "fa7cbbf2899f5b8a4257ab5a834389a7f3471478f5d0ead6e468f4c0128f538e",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36",
        "eventType": {
          "id": 1,
          "name": "Login Attempted"
        },
        "loginStatus": {
          "id": 4,
          "name": "Successful"
        },
        "eventSource": {
          "id": 11,
          "name": "Hub CAS"
        }
      }
    ]
  }
]
```

## Related Items

-   [Audit Trail Help documentation](https://help.salesforce.com/articleView?id=mc_overview_audit_trail.htm)

Last Updated: Jun 8, 2021
