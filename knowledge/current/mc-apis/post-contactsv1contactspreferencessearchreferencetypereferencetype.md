---
title: "POST /contacts/v1/contacts/preferences/search?ReferenceType={ReferenceType}"
domain: mc-apis
topic: post-contactsv1contactspreferencessearchreferencetypereferencetype
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:24.878Z
estimatedTokens: 350
keywords: [POST, contacts, preferences, search?ReferenceType=, ReferenceType, Searches, consent, management, contact, records, best, performance, batches, whenever, possible]
---

# POST /contacts/v1/contacts/preferences/search?ReferenceType={ReferenceType}

> Searches for consent management information in contact records by reference type. For best performance, use batches of contact ID values whenever possible.

# POST /contacts/v1/contacts/preferences/search?ReferenceType={ReferenceType}

## **Overview**

Searches for consent management information in contact records by reference type. For best performance, use batches of contact ID values whenever possible.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| ReferenceType | integer | Required | For contact key, use 1. For contact ID, use 2. |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| items | array | Required | Array of contact IDs or contact keys to search. |

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
POST /contacts/v1/contacts/preferences/search?ReferenceType=2
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "items": [
    12345
  ]
}
```

### Example Response

```js
HTTP/1.1 200 OK
{
   "items":[
      {
         "contactID":12345,
         "hasOptedOutTracking":false
      }
   ],
   "rowsAffected":1,
   "requestServiceMessageID":"d613f535-eea8-435e-a59c-59ec6ab4bebd",
   "responseDateTime":"2019-01-23T15:04:14.7305707-06:00",
   "resultMessages":[

   ],
   "serviceMessageID":"29029de0-abe4-4216-985d-4a8d78883dfa"
}
```

Last Updated: Jun 8, 2021

## Code Examples

```
HTTP/1.1 200 OK
{  
   "items":[  
      {  
         "contactID":12345,
         "hasOptedOutTracking":false
      }
   ],
   "rowsAffected":1,
   "requestServiceMessageID":"d613f535-eea8-435e-a59c-59ec6ab4bebd",
   "responseDateTime":"2019-01-23T15:04:14.7305707-06:00",
   "resultMessages":[  

   ],
   "serviceMessageID":"29029de0-abe4-4216-985d-4a8d78883dfa"
}
```
