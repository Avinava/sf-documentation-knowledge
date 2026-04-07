---
title: "GET /data/v1/audit/auditEvents"
domain: mc-apis
topic: get-datav1auditauditevents
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:21.939Z
estimatedTokens: 665
keywords: [data, audit, auditEvents, Retrieves, logged, Trail, events, current, account, children, Logins, audited, enterprise, level, **Overview**]
---

# GET /data/v1/audit/auditEvents

> Retrieves logged Audit Trail audit events for the current account and its children. Logins are audited at the enterprise level.

# GET /data/v1/audit/auditEvents

## **Overview**

Retrieves logged Audit Trail audit events for the current account and its children. Logins are audited at the enterprise level.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| $page | number |  | Page number to return from the paged results. Start with 1 and continue until you get zero results. Typically provided along with the $pagesize parameter. The default is 1. |
| $pagesize | number |  | Number of results per page to return. Typically provided along with the $page parameter. |
| $orderBy | string |  | Determines which property to use for sorting and the direction in which to sort the data. If you don't provide the $orderBy parameter, the results are sorted by createdDate in ascending order. |
| startdate | string |  | Start date of the date range to search for security events. If you don't provide a start date, the default value is today minus 30 days. The startdate must be before the enddate. |
| enddate | string |  | End date of the date range to search for security events. If you don't provide an end date, the default is today. The enddate must be after the startdate. |

## Usage

### Required Marketing Cloud Permissions

-   Permission: Audit Logging | API Access
-   Scope: Data | Tracking Event | Read

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /data/v1/audit/auditEvents
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
                    "id": 0,
                    "employeeName": "Unavailable",
                    "userName": "Unavailable"
                },
                "objectType": {
                    "id": 73,
                    "name": "DataExtractActivity"
                },
                "operation": {
                    "id": 8,
                    "name": "Start"
                },
                "object": {
                    "id": "717e3e1e-a2ce-488c-99a9-71df64a9981a",
                    "name": "Security Action Audit Log"
                },
                "transactionId": "b01234ab-d2ca-4e17-8d5c-e36320543573"
            }
        ]
    }
]
```

## Related Items

-   [Audit Trail Help documentation](https://help.salesforce.com/articleView?id=mc_overview_audit_trail.htm)

Last Updated: Jun 8, 2021
