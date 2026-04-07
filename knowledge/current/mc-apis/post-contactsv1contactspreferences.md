---
title: "POST /contacts/v1/contacts/preferences"
domain: mc-apis
topic: post-contactsv1contactspreferences
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:15.095Z
estimatedTokens: 433
keywords: [POST, contacts, preferences, Adds, consent, management, contact, records, protection, privacy, concerns, include, multiple, IDs, JSON, payload, best, performance, batches, whenever, possible, **Overview**, Marketing, Cloud, Permissions, Scope]
---

> Adds consent management information to contact records for data protection and privacy concerns. The request can include multiple contact IDs in a single JSON payload. For best performance, use batches of contact ID values whenever possible.

# POST /contacts/v1/contacts/preferences

## **Overview**

Adds consent management information to contact records for data protection and privacy concerns. The request can include multiple contact IDs in a single JSON payload. For best performance, use batches of contact ID values whenever possible.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| items | array | Required | Array of contact IDs and other properties to add. |
| items.contactID | long | Required | Unique ID for the contact. |
| items.hasOptedOutTracking | boolean |  | Indicates whether a contact opted out of tracking information. |

## Usage

### Required Marketing Cloud Permissions

-   Assets, Upload
-   Assets, Publish

### Required Scope

-   Documents and Images, Read and Write
-   Saved Content, Read and Write

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /contacts/v1/contacts/preferences
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
   "items":[
      {
         "contactID":45678,
         "hasOptedOutTracking":false
      },
      {
         "contactID":12345,
         "hasOptedOutTracking":false
      }
   ]
}
```

### Example Response

```js
HTTP/1.1 200 OK

{
   "items":[
      {
         "contactID":45678,
         "hasOptedOutTracking":false
      },
      {
         "contactID":12345,
         "hasOptedOutTracking":false
      }
   ],
   "rowsInserted":2,
   "rowsUpdated":0,
   "rowsDeleted":0,
   "requestServiceMessageID":"4d08d1ff-1377-4f7b-9afe-937e3805c67f",
   "responseDateTime":"2019-01-22T16:17:32.0041492-06:00",
   "resultMessages":[

   ],
   "serviceMessageID":"47ec0720-81d1-4fee-8e03-d8a9d42af1c1"
}
```

Last Updated: Jun 8, 2021
