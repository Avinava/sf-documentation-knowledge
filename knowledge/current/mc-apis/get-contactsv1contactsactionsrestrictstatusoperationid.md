---
title: "GET /contacts/v1/contacts/actions/restrict/status?operationID="
domain: mc-apis
topic: get-contactsv1contactsactionsrestrictstatusoperationid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:19.924Z
estimatedTokens: 467
keywords: [contacts, actions, restrict, status?operationID=, Retrieves, status, contact, operation, **Overview**, Usage]
---

# GET /contacts/v1/contacts/actions/restrict/status?operationID=

> Retrieves the status of the contact restrict operation.

# GET /contacts/v1/contacts/actions/restrict/status?operationID=

## **Overview**

Retrieves the status of the contact restrict operation.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| operationID | GUID | Required | ID of the operation you are checking the status of. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /contacts/v1/contacts/actions/restrict/status?operationID=2105
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

```
{
    "backgroundOperationsSummary": [],
    "numberofRestorableDays": -1,
    "operation": {
        "listTypeID": 5,
        "listIdentifier": "aa11b2cc-d6ea-4f46-bbfc-a4b7afa3f449",
        "listKey": "bb11c2dd-d6ea-4f46-bbfc-a4b7afa3f449",
        "listName": "Prestaged List",
        "expectedListCount": 1,
        "actualListCount": 1,
        "deleteType": "ContactAndAttributes",
        "deleteListOnCompleted": false,
        "errorsOccurredInBatchProcess": false,
        "isRestrictedForProcessing": true,
        "operationID": 2105,
        "eID": 55555555,
        "mID": 55555555,
        "employeeID": 12345678,
        "operationRequestID": "1a22b33c-daf1-4ff9-b381-18658d74c547",
        "status": "Completed",
        "scheduledTime": "2018-01-30T12:40:09.06",
        "startTime": "2018-01-30T18:40:11.293",
        "endTime": "2018-01-30T18:40:11.963",
        "retryCount": 0,
        "createdDate": "2018-01-30T18:40:00",
        "createdBy": 12345678,
        "modifiedDate": "2018-01-30T18:40:00",
        "modifiedBy": 10898158
    },
    "requestServiceMessageID": "a12345b6-5490-4ecf-bed1-cb2112eddd7b",
    "responseDateTime": "2018-01-30T12:42:05.819137-06:00",
    "resultMessages": [],
    "serviceMessageID": "ab11cd2e-1f74-489e-98fb-ff6d2c33a5e4"
}
```

Last Updated: Jun 8, 2021
