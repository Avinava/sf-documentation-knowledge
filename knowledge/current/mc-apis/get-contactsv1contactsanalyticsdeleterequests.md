---
title: "GET /contacts/v1/contacts/analytics/deleterequests"
domain: mc-apis
topic: get-contactsv1contactsanalyticsdeleterequests
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:19.899Z
estimatedTokens: 1564
keywords: [contacts, analytics, deleterequests, Retrieves, contact, requests, date, range, **Overview**, Usage]
---

# GET /contacts/v1/contacts/analytics/deleterequests

> Retrieves details of contact delete requests for a date range.

# GET /contacts/v1/contacts/analytics/deleterequests

## **Overview**

Retrieves details of contact delete requests for a date range.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| startdateutc | datetime | Required | Start date and time in UTC of the date range. |
| enddateutc | datetime | Required | End date and time in UTC of the date range. |
| statusid | int |  | Delete request status ID. Use it to filter delete requests by status. Valid values are 1 - Processing, 5 - Completed, and 7 - Invalid. |
| $pagesize | int |  | Number of records per page. |
| $page | int |  | Page number to retrieve. |
| $orderBy | string |  | Determines which property to use for sorting and the direction in which to sort the data. |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET contacts/v1/contacts/analytics/deleterequests?startdateutc=2019-02-18T00%3A00%3A00&enddateutc=2019-03-19T00%3A00%3A00&%24page=1&%24pagesize=20&%24orderby=operationId%20desc&statusid=5
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
{
   "startDateUtc":"2019-02-18T00:00:00",
   "endDateUtc":"2019-03-19T00:00:00",
   "statusAsOfDateUtc":"2019-03-19T19:33:17.496471Z",
   "pageNumber":1,
   "pageSize":20,
   "operations":[
      {
         "operationId":22944,
         "totalContactCount":1,
         "completedContactCount":1,
         "receivedDateUtc":"2019-03-04T22:42:00",
         "status":"Completed",
         "lastStatusDateUtc":"2019-03-19T04:47:40.293",
         "deleteMethod":"Contact Key/ID"
      },
      {
         "operationId":22943,
         "totalContactCount":1,
         "completedContactCount":1,
         "receivedDateUtc":"2019-03-04T22:41:00",
         "status":"Completed",
         "lastStatusDateUtc":"2019-03-19T04:47:40.293",
         "deleteMethod":"Contact Key/ID"
      },
      {
         "operationId":22625,
         "totalContactCount":1,
         "completedContactCount":1,
         "receivedDateUtc":"2019-02-26T23:26:00",
         "status":"Completed",
         "lastStatusDateUtc":"2019-03-13T10:10:17.9",
         "deleteMethod":"Contact Key/ID"
      },
      {
         "operationId":22624,
         "totalContactCount":1,
         "completedContactCount":1,
         "receivedDateUtc":"2019-02-26T23:25:00",
         "status":"Completed",
         "lastStatusDateUtc":"2019-03-13T10:10:17.9",
         "deleteMethod":"Contact Key/ID"
      },
      {
         "operationId":22598,
         "totalContactCount":1,
         "completedContactCount":1,
         "receivedDateUtc":"2019-02-26T16:22:00",
         "status":"Completed",
         "lastStatusDateUtc":"2019-03-13T00:41:55.317",
         "deleteMethod":"Contact Key/ID"
      },
      {
         "operationId":22597,
         "totalContactCount":1,
         "completedContactCount":1,
         "receivedDateUtc":"2019-02-26T16:21:00",
         "status":"Completed",
         "lastStatusDateUtc":"2019-03-13T00:41:55.317",
         "deleteMethod":"Contact Key/ID"
      },
      {
         "operationId":22594,
         "totalContactCount":1,
         "completedContactCount":1,
         "receivedDateUtc":"2019-02-26T04:34:00",
         "status":"Completed",
         "lastStatusDateUtc":"2019-03-12T13:36:48.677",
         "deleteMethod":"Contact Key/ID"
      },
      {
         "operationId":22593,
         "totalContactCount":1,
         "completedContactCount":1,
         "receivedDateUtc":"2019-02-26T04:33:00",
         "status":"Completed",
         "lastStatusDateUtc":"2019-03-12T13:36:48.677",
         "deleteMethod":"Contact Key/ID"
      },
      {
         "operationId":22544,
         "totalContactCount":1,
         "completedContactCount":1,
         "receivedDateUtc":"2019-02-25T17:03:00",
         "status":"Completed",
         "lastStatusDateUtc":"2019-03-11T23:06:49.167",
         "deleteMethod":"Contact Key/ID"
      },
      {
         "operationId":22543,
         "totalContactCount":1,
         "completedContactCount":1,
         "receivedDateUtc":"2019-02-25T17:02:00",
         "status":"Completed",
         "lastStatusDateUtc":"2019-03-11T23:06:49.167",
         "deleteMethod":"Contact Key/ID"
      },
      {
         "operationId":22535,
         "totalContactCount":1,
         "completedContactCount":1,
         "receivedDateUtc":"2019-02-25T16:00:00",
         "status":"Completed",
         "lastStatusDateUtc":"2019-03-11T22:06:33.593",
         "deleteMethod":"Contact Key/ID"
      },
      {
         "operationId":22534,
         "totalContactCount":1,
         "completedContactCount":1,
         "receivedDateUtc":"2019-02-25T15:59:00",
         "status":"Completed",
         "lastStatusDateUtc":"2019-03-11T22:06:33.593",
         "deleteMethod":"Contact Key/ID"
      },
      {
         "operationId":22409,
         "totalContactCount":1,
         "completedContactCount":1,
         "receivedDateUtc":"2019-02-22T20:05:00",
         "status":"Completed",
         "lastStatusDateUtc":"2019-03-09T08:49:36.62",
         "deleteMethod":"Contact Key/ID"
      },
      {
         "operationId":22408,
         "totalContactCount":1,
         "completedContactCount":1,
         "receivedDateUtc":"2019-02-22T20:04:00",
         "status":"Completed",
         "lastStatusDateUtc":"2019-03-09T08:49:36.62",
         "deleteMethod":"Contact Key/ID"
      },
      {
         "operationId":22313,
         "totalContactCount":1,
         "completedContactCount":1,
         "receivedDateUtc":"2019-02-21T05:02:00",
         "status":"Completed",
         "lastStatusDateUtc":"2019-03-07T11:04:41.687",
         "deleteMethod":"Contact Key/ID"
      },
      {
         "operationId":22312,
         "totalContactCount":1,
         "completedContactCount":1,
         "receivedDateUtc":"2019-02-21T05:01:00",
         "status":"Completed",
         "lastStatusDateUtc":"2019-03-07T11:04:41.687",
         "deleteMethod":"Contact Key/ID"
      }
   ],
   "requestServiceMessageID":"e1198208-6432-40fd-b5ae-172c9d9bc44a",
   "responseDateTime":"2019-03-19T13:33:18.2141124-06:00",
   "resultMessages":[

   ],
   "serviceMessageID":"ef7d833c-509f-4dbc-8f99-060aac3c0382"
}
```

Last Updated: Jun 8, 2021
