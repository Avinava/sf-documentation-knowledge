---
title: "GET /contacts/v1/contacts/analytics/deleterequests/summary"
domain: mc-apis
topic: get-contactsv1contactsanalyticsdeleterequestssummary
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:19.908Z
estimatedTokens: 675
keywords: [contacts, analytics, deleterequests, summary, Retrieves, contact, requests, date, range, **Overview**, Usage]
---

# GET /contacts/v1/contacts/analytics/deleterequests/summary

> Retrieves a summary of contact delete requests for a date range.

# GET /contacts/v1/contacts/analytics/deleterequests/summary

## **Overview**

Retrieves a summary of contact delete requests for a date range.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| startdateutc | datetime | Required | Start date and time in UTC of the date range. |
| enddateutc | datetime | Required | End date and time in UTC of the date range. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /contacts/analytics/deleterequests/summary?startdateutc=2018-01-15T00:00:00Z&enddateutc=2018-01-15T05:00:00Z
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

```js
{
    "startdateutc":"2018-01-15T00:00:00Z",
    "enddateutc":"2018-01-15T04:30:00Z",
    "statusofdateutc": "2018-01-17T04:30:00Z",
"interval":"0",
"itemcount":5,
"totaltimeseries":[
    {
    "requestcount":500,
    "minvalue":100,
    "maxvalue":100,
    "items":[
        {time:"01-15-2018 00:00:00","value":100},
        {time:"01-15-2018 01:00:00","value":100},
        {time:"01-15-2018 02:00:00","value":100},
        {time:"01-15-2018 03:0000:","value":100},
        {time:"01-15-2018 04:00:00","value":100}
        ]
        }],
"statustimeseries":[
         {
       "statusid": 5,
       "status": "Completed"
       "requestcount":350,
       "minvalue":0,
       "maxvalue":100,
       "items":[
              {time:"01-15-2018 00:00:00","value":100},
              {time:"01-15-2018 01:00:00","value":100},
              {time:"01-15-2018 02:00:00","value":100},
              {time:"01-15-2018 03:00:00","value":50},
              {time:"01-15-2018 04:00:00","value":0}
              ]
          },
          {
          "statusid": 1,
          "status": “Processing”
          "requestcount":100,
          "minvalue":0,
          "maxvalue":75,
          "items":[
                {time:"01-15-2018 00:00:00","value":0},
                {time:"01-15-2018 01:00:00","value":0},
                {time:"01-15-2018 02:00:00","value":0},
                {time:"01-15-2018 03:00:00","value":25},
                {time:"01-15-2018 04:00:00","value":75}
                ]
          },
          {
          "statusid": 7,
          "Status": "Invalid",
          "requestcount":50,
          "minvalue":0,
          "maxvalue":50,
          "items":[
                {time:"01-15-2018 00:00:00","value":0},
                {time:"01-15-2018 01:00:00","value":0},
                {time:"01-15-2018 02:00:00","value":0},
                {time:"01-15-2018 03:00:00","value":25},
                {time:"01-15-2018 04:00:00","value":25}
                ]
          }]
    }
```

Last Updated: Jun 8, 2021
