---
title: "POST /contacts/v1/contacts/id:{contactId}/Preferences"
domain: mc-apis
topic: post-contactsv1contactsidcontactidpreferences
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:20.077Z
estimatedTokens: 384
keywords: [POST, contacts, contactId, Preferences, Adds, consent, management, contact, records, data, protection, privacy, concerns, **Overview**, Usage]
---

# POST /contacts/v1/contacts/id:{contactId}/Preferences

> Adds consent management information to contact records by contact ID for data protection and privacy concerns.

# POST /contacts/v1/contacts/id:{contactId}/Preferences

## **Overview**

Adds consent management information to contact records by contact ID for data protection and privacy concerns.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| contactId | string | Required | Unique ID for the contact. |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| value | object | Required | Array of contact IDs and other properties to add. |
| value.contactID | long | Required | Unique ID for the contact. |
| value.hasOptedOutTracking | boolean |  | Indicates whether a contact opted out of tracking information. |

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
POST /contacts/v1/contacts/id:1234/Preferences
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
   "value":{
      "contactID":1234,
      "hasOptedOutTracking":false
   }
}
```

### Example Response

```js
HTTP/1.1 200 OK
{
   "value":{
      "contactID":1234,
      "hasOptedOutTracking":false
   },
   "rowsInserted":1,
   "rowsUpdated":0,
   "rowsDeleted":0,
   "requestServiceMessageID":"1e17845f-d020-48a8-8621-c318c964b5a6",
   "responseDateTime":"2019-01-24T11:37:13.1845624-06:00",
   "resultMessages":[

   ],
   "serviceMessageID":"a5866bea-02a0-4989-bd1d-7edd4dd95519"
}
```

Last Updated: Jun 8, 2021

## Code Examples

```
HTTP/1.1 200 OK
{  
   "value":{  
      "contactID":1234,
      "hasOptedOutTracking":false
   },
   "rowsInserted":1,
   "rowsUpdated":0,
   "rowsDeleted":0,
   "requestServiceMessageID":"1e17845f-d020-48a8-8621-c318c964b5a6",
   "responseDateTime":"2019-01-24T11:37:13.1845624-06:00",
   "resultMessages":[  

   ],
   "serviceMessageID":"a5866bea-02a0-4989-bd1d-7edd4dd95519"
}
```
