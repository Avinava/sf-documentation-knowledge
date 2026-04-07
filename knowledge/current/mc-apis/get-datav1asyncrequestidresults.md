---
title: "GET /data/v1/async/{requestId}/results"
domain: mc-apis
topic: get-datav1asyncrequestidresults
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.180Z
estimatedTokens: 588
keywords: [data, async, requestId, results, Once, picked, asynchronous, framework, passed, off, appropriate, service, processing, resource, retrieve]
---

# GET /data/v1/async/{requestId}/results

> Once the request has been picked up by the asynchronous framework and passed off to the appropriate service for processing, use this resource to retrieve the results of that service operation.

# GET /data/v1/async/{requestId}/results

## **Overview**

Once the request has been picked up by the asynchronous framework and passed off to the appropriate service for processing, use this resource to retrieve the results of that service operation.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| requestId | string | Required | The requestId returned from a previous and successfully submitted asynchronous request, in this case /data/v1/async/dataextensions/*. |

## Usage

### Example Request

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /data/v1/async/ed0ec06e-dd78-4f30-80b6-07bfc77db289/results
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

A successfully queued request returns the RequestId and eventually shows a status of completed or error. Once the request is no longer pending use this RequestId in subsequent operations to retrieve the results of the service operation after it finishes processing.

```
HTTP/1.1 200 OK

{
    "page": 1,
    "pageSize": 50,
    "count": 2,
    "items": [
        {
            "errorCode": "UnexpectedError",
            "message": "Violation of PRIMARY KEY constraint 'PK_C20720_ed9b5f8e-ebb7-e711-8103-005056b37306'. Cannot insert duplicate key in object 'C20720.MCDE_1_2017-10-23T081313251215'. The duplicate key value is (12345_pk).\r
The statement has been terminated.",
            "status": "Error"
        },
        {
            "errorCode": "UnexpectedError",
            "message": "Violation of PRIMARY KEY constraint 'PK_C20720_ed9b5f8e-ebb7-e711-8103-005056b37306'. Cannot insert duplicate key in object 'C20720.MCDE_1_2017-10-23T081313251215'. The duplicate key value is (12346_pk).\r
The statement has been terminated.",
            "status": "Error"
        }
    ],
    "requestId": "9b13d627-b154-4e88-9ab9-4fa0bace9ddf"
}
```

### Example Error Response

```
HTTP/1.1 200 OK
{
   "requestId": "74e76c89-bef1-411c-9710-d79b49ee05f1"
   "resultMessages":[{
      "resultMessage": {
          "resultType": "Operational",
          "resultClass": "Error",
          "resultCode": "AsyncRequestStatusNotFound",
          "message": "Unable to locate an Async Request Status Record for the provided RequestId: 110c7be1-26f4-475c-b561-7756a79ed602."
      }
   }]
}
```

Last Updated: Jun 8, 2021

## Code Examples

```
HTTP/1.1 200 OK
{  
   "requestId": "74e76c89-bef1-411c-9710-d79b49ee05f1"
   "resultMessages":[{
      "resultMessage": {
          "resultType": "Operational",
          "resultClass": "Error",
          "resultCode": "AsyncRequestStatusNotFound",
          "message": "Unable to locate an Async Request Status Record for the provided RequestId: 110c7be1-26f4-475c-b561-7756a79ed602."
      }
   }]
}
```
