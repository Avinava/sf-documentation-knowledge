---
title: "GET /data/v1/async/{requestId}/status"
domain: mc-apis
topic: get-datav1asyncrequestidstatus
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.243Z
estimatedTokens: 472
keywords: [data, async, requestId, status, Retrieve, originally, posted, asynchronous, determine, completed, whether, there, were, errors, processing]
---

# GET /data/v1/async/{requestId}/status

> Retrieve the status of the originally posted asynchronous request. Use the status to determine if the request has completed and whether or not there were errors in processing.

# GET /data/v1/async/{requestId}/status

## **Overview**

Retrieve the status of the originally posted asynchronous request. Use the status to determine if the request has completed and whether or not there were errors in processing.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| requestId | string | Required | The requestId returned from a previous and successfully submitted asynchronous request, in this case /data/v1/async/dataextensions/*. |

## Usage

### Example Request

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /data/v1/async/b7c1f98b-6648-4aae-8a73-7ba218b7e932/status
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

A successfully queued request returns the RequestId. Once the request is no longer pending, use this requestId in subsequent operations to determine the status of the asynchronous call and overall results of the persist operation.

```
HTTP/1.1 200
{
   "status": {
      "callDateTime": "2017-10-27T16:00:38.98",
      "completionDateTime": "2017-10-27T16:08:06.943",
      "hasErrors": false,
      "pickupDateTime": "2017-10-27T16:08:06.903",
      "requestStatus": "Complete",
      "resultStatus": "OK",
      "requestId": "b7c1f98b-6648-4aae-8a73-7ba218b7e932"
   },
   "requestId": "003fa441-0382-4953-a1c6-e8f67829f8fd"
}
```

Possible values for requestStatus are:

-   Pending
-   Complete
-   Error

Example Error Response

```
HTTP/1.1 200 OK
{
    "requestId": "c3e4c4da-4e44-4b79-b991-5ba5616e68d1",
    "resultMessages": [
        {
            "resultType": "Operational",
            "resultClass": "Error",
            "resultCode": "AsyncRequestStatusNotFound",
            "message": "Unable to locate an Async Request Status Record for the provided RequestId: efd98722-5826-418f-849e-c13a06ad3622."
        }
    ]
}
```

Last Updated: Jun 8, 2021
