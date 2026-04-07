---
title: "GET /contacts/v1/contacts/actions/delete/status?operationID="
domain: mc-apis
topic: get-contactsv1contactsactionsdeletestatusoperationid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:19.919Z
estimatedTokens: 1189
keywords: [contacts, actions, status?operationID=, Retrieves, status, contact, deletion, operation, **Overview**, Usage, GetStatusRoute, Operations, Completed, Suppression, ‘Delete]
---

# GET /contacts/v1/contacts/actions/delete/status?operationID=

> Retrieves status of contact deletion operation.

# GET /contacts/v1/contacts/actions/delete/status?operationID=

## **Overview**

Retrieves status of contact deletion operation.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| operationID | integer | Required | Query string parameter indicating ID of operation to check status |

## Usage

Use the OperationID value returned by a contact delete call in the query string parameter.

Since the contact delete call has 2 phases, there is a response example for each of the 2 phases.

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /contacts/v1/contacts/actions/delete/status?operationID=
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

```
{
  "operation": {
    "listTypeID": 5,
    "listIdentifier": "037c2811-ce62-4381-b3d2-1936e51fbf4d",
    "listKey": "037c2811-ce62-4381-b3d2-1936e51fbf4d",
    "expectedListCount": 1,
    "deleteType": "ContactAndAttributes",
    "deleteListOnCompleted": false,
    "operationID": 2,
    "eID": 12345,
    "mID": 12345,
    "employeeID": 30980,
    "operationRequestID": "21d0d10d-a15a-413c-bc3e-8b43b185e551",
    "status": "Completed",
    "scheduledTime": "2016-06-14T16:01:58.107",
    "retryCount": 0,
    "createdDate": "2016-06-14T16:02:00",
    "createdBy": 30980,
    "modifiedDate": "2016-06-14T16:02:00",
    "modifiedBy": 30980
  },
  "requestServiceMessageID": "93631be1-107f-4239-a8b7-cdae245d7403",
  "resultMessages": [],
  "serviceMessageID": "00e6add8-d79a-4bd6-9568-2f2a272538f0"
}
```

In the delete phase, the backgroundOperationStatusID under the backgroundOperationsSummary node provides that status. If you're implementing this API, should use the backgroundOperationStatusID to determine whether or not the deletion has been fully processed. The notable values of backgroundOperationStatusID are:

```
Completed
Aborted (this is usually done at customer's request - this means contacts were restored back to active after suppression phase was completed)
Invalid
```

All other status values should be interpreted as "Processing". Developers often use this status in their API implementation layer.

### Example Response - GetStatusRoute: Delete Operations

```
{
  "operationMappings": [],
  "numberofRestorableDays": 14,
  "operation": {
    "contextType": 0,
    "isRestrictedForProcessing": false,
    "listTypeID": 1,
    "listIdentifier": "TestListInput",
    "listKey": "TestListInput.Key",
    "expectedListCount": 1,
    "deleteType": "ContactAndAttributes",
    "deleteListOnCompleted": false,
    "errorsOccurredInBatchProcess": false,
    "lastProcessedMilestone": "Completed",
    "operationID": 1,
    "eID": 10650003,
    "mID": 10650003,
    "employeeID": -1000,
    "requestID": "c79583e2-cc79-4a38-8378-52714b00eaa1",
    "status": "Pending",
    "scheduledDate": "2019-07-02T14:24:48.013",
    "startDate": "2019-07-02T14:24:48.013",
    "endDate": "2019-07-02T14:24:48.013",
    "retryCount": 0,
    "createdDate": "2019-07-02T14:25:00",
    "createdBy": -1000,
    "modifiedDate": "2019-07-02T14:25:00",
    "modifiedBy": -1000
  },
  "requestServiceMessageID": "450f5391-3850-4d00-a0d7-3f3bb55abee3",
  "responseDateTime": "2019-07-02T14:24:48.5030664-04:00",
  "resultMessages": [],
  "serviceMessageID": "99e75027-deed-4441-b94a-bdfd335e730f"
}
```

### Example - Operation Completed Suppression, within ‘Delete Phase’ / Processing

```
{
  "operationMappings": [],
  "backgroundOperationsSummary": [
    {
      "backgroundOperationID": 1,
      "createdDate": "2019-07-02T14:27:42.4039",
      "backgroundOperationStatusID": "Processing"
    }
  ],
  "numberofRestorableDays": 14,
  "operation": {
    "contextType": 0,
    "isRestrictedForProcessing": false,
    "listTypeID": 1,
    "listIdentifier": "TestListInput",
    "listKey": "TestListInput.Key",
    "expectedListCount": 1,
    "deleteType": "ContactAndAttributes",
    "deleteListOnCompleted": false,
    "errorsOccurredInBatchProcess": false,
    "lastProcessedMilestone": "Completed",
    "operationID": 1,
    "eID": 10650003,
    "mID": 10650003,
    "employeeID": -1000,
    "requestID": "3b475bee-aa37-4aa4-9fcc-c58d2f9e6242",
    "status": "Completed",
    "scheduledDate": "2019-07-02T14:27:42.383",
    "startDate": "2019-07-02T14:27:42.383",
    "endDate": "2019-07-02T14:27:42.383",
    "retryCount": 0,
    "createdDate": "2019-07-02T14:28:00",
    "createdBy": -1000,
    "modifiedDate": "2019-07-02T14:28:00",
    "modifiedBy": -1000
  },
  "requestServiceMessageID": "e35a0144-8b75-4d9b-b75f-9c51037333d6",
  "responseDateTime": "2019-07-02T14:27:42.9189678-04:00",
  "resultMessages": [],
  "serviceMessageID": "e72e7086-3019-43e0-8858-088c7864d6c9"
}
```

Last Updated: Jun 8, 2021
