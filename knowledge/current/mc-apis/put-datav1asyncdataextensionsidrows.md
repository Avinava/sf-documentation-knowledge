---
title: "PUT /data/v1/async/dataextensions/{id}/rows"
domain: mc-apis
topic: put-datav1asyncdataextensionsidrows
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:25.617Z
estimatedTokens: 689
keywords: [PUT, data, async, dataextensions, rows, Asynchronously, upsert, identified, extension, key, unique, identifier, external, customer, **Overview**]
---

# PUT /data/v1/async/dataextensions/{id}/rows

> Asynchronously upsert data into an identified data extension by id or key, where id is the unique identifier of the data extension and key is the external key (customer key) of the data extension.

# PUT /data/v1/async/dataextensions/{id}/rows

## **Overview**

Asynchronously upsert data into an identified data extension by id or key, where id is the unique identifier of the data extension and key is the external key (customer key) of the data extension.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| id | guid | Required | Unique identifier of the data extension. Required if not using a key. |
| key | string | Required | External customer key of the data extension. Required if not using an ID. Prepend the parameter with key:. For example, /dataextensions/key:{key}/rows. |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| items | array | Required | An array of objects, where each object represents a row of data in the target data extension. Each object is expected to contain name-value pairs matching the column name and value of the target. |

## Usage

### Example Request

The request body consists of **items**, which is an array of json objects. Each object is expected to be a name-value pair that corresponds to the columns of the destination data extension. In this example, this data extension must have the fields FirstName, LastName and ZipCode. Partial payloads are valid if they include all required fields.

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /data/v1/async/dataextensions/key:ExternalKey12345/rows
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
   "items": [{
      "FirstName":"Bobby",
      "LastName" : "Jones",
      "ZipCode": "23456"
   },
   {
      "FirstName":"Sam",
      "LastName" : "Sneed",
      "ZipCode": "23456"
   }]
}
```

### Example Success Response (202 Accepted)

A successfully queued request returns the RequestId. Use this RequestId in subsequent operations to determine the status of the asynchronous call and overall results of the persist operation.

```
HTTP/1.1 202 OK
{
   "requestId": "ed0ec06e-dd78-4f30-80b6-07bfc77db289"
}
```

### Example Error Response

This error response shows when the custom object cannot be found before the request gets queued. Any errors that occur during the processing of the request by the business service are recorded with the results and are retrievable using the /data/v1/async/{requestId}/results?includeDetail=true resource.

```
HTTP/1.1 200 OK
{
    "requestId": "524059b7-bf60-4fa6-9271-32aaf3479091",
    "resultMessages": [
        {
            "resultType": "Operational",
            "resultClass": "Error",
            "resultCode": "CustomObjectNotFound",
            "message": "Failed to resolve the Custom Object from the provided ObjectReferenceIdentifier [Id: ed9b5f8e-ebb7-e711-8103-005056b37304, Key: ]."
        }
    ]
}
```

Last Updated: Jun 8, 2021
