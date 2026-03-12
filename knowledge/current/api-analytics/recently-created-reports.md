---
title: "Recently Created Reports"
domain: api-analytics
topic: recently-created-reports
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.664Z
estimatedTokens: 297
keywords: [Recently, Created, Reports, particular, report, current, user, any, users]
---

# Recently Created Reports

> Get the list of recently created reports for a particular report type for the current
  user or any other users.

# Recently Created Reports

Get the list of recently created reports for a particular report type for the current user or any other users.

## Syntax

URI

/services/data/<latest API version>/analytics/report-types/<report-type-API-name>/recent-reports

Formats

JSON

HTTP Methods

| Method | Description |
| --- | --- |
| GET | Returns a list of recently created reports for a specific report type. |

Parameters

| Parameter | Description |
| --- | --- |
| pageSize | IntegerRequired for GET calls. Specifies number of recently created reports to return. |
| isCurrentUser | BooleanOptional for GET calls. Specifies if results are limited to current user (true) or all other users (false). Default value is false. |
| offset | IntegerOptional for GET calls. Specifies offset of returned report list. Default value is 0. |

## GET Response Body

The response body is a list of the recently created reports for the report type.

| Property | Description |
| --- | --- |
| createdByUser | Name of user who created report. |
| createdDate | Timestamp of report creation. |
| id | Id of report. |
| name | Name of report. |

## Example

Sample Request

```

```

Sample Response

```

```

## Code Examples

```
analytics/report-types/AccountList/recent-reports?pageSize=3&isCurrentUser=true&offset=3
```

```
[ 
   {
      "createdByUser" : "Admin User",
      "createdDate" : "2021-11-03T17:31:53.000+0000",
      "id" : "00Oxx0000011ghvEAA",
      "name" : "New Accounts Report1"
   }, 
   {
      "createdByUser" : "Admin User",
      "createdDate" : "2021-10-19T17:20:44.000+0000",
      "id" : "00Oxx0000011gLVEAY",
      "name" : "Sample Report: # of Accounts"
   }
]
```
