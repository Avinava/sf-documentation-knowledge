---
title: "Recently Used Report Types"
domain: api-analytics
topic: recently-used-report-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.669Z
estimatedTokens: 327
keywords: [Recently, Report, reports, created, current, user]
---

# Recently Used Report Types

> Get the list of report types used in the 50 reports most recently created by the current
  user.

# Recently Used Report Types

Get the list of report types used in the 50 reports most recently created by the current user.

## Syntax

URI

/services/data/<latest API version>/analytics/report-types/recent/by-user

Formats

JSON

HTTP Methods

| Method | Description |
| --- | --- |
| GET | Returns a list of report types used by reports recently created by the current user. |

## GET Response Body

The response body is a list of the report types used in reports recently created by the user.

| Property | Description |
| --- | --- |
| describeUrl | A URL link to the report type’s metadata. |
| isCustomReportType | Indicates whether a report type is custom (true) or not (false). |
| isHidden | Indicates whether an administrator has hidden the report type (true) or not (false). Hidden report types don’t appear in the report builder when creating a report. |
| isHistorical | Indicates whether it’s a historical tracking report type (true) or not (false). |
| label | The display name of the report type. |
| lastUsedDate | Timestamp when the report type was last used. |
| supportsJoinedFormat | Indicates whether a report type is compatible with joined reports (true) or not (false). |
| type | The API name of the report type. |

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
