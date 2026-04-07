---
title: "GET /contacts/v1/contacts/id:{contactId}/Preferences"
domain: mc-apis
topic: get-contactsv1contactsidcontactidpreferences
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.000Z
estimatedTokens: 314
keywords: [contacts, contactId, Preferences, Retrieves, consent, management, contact, records, data, protection, privacy, concerns, requests, display, reserved]
---

# GET /contacts/v1/contacts/id:{contactId}/Preferences

> Retrieves consent management information from contact records by contact ID for data protection and privacy concerns. GET requests might display values that are reserved for future use and don't perform any actions at this time. Use only the parameters documented here.

# GET /contacts/v1/contacts/id:{contactId}/Preferences

## **Overview**

Retrieves consent management information from contact records by contact ID for data protection and privacy concerns. GET requests might display values that are reserved for future use and don't perform any actions at this time. Use only the parameters documented here.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| contactId | string | Required | Unique ID for the contact. |

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
GET /contacts/v1/contacts/id:1234/Preferences
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

```js
HTTP/1.1 200 OK

{
   "value":{
      "contactID":1234,
      "hasOptedOutTracking":false
   },
   "rowsAffected":1,
   "requestServiceMessageID":"315871d9-7ac3-4452-85ea-1b82e7912ec9",
   "responseDateTime":"2019-01-22T16:16:14.6290807-06:00",
   "resultMessages":[

   ],
   "serviceMessageID":"31be4073-0d58-467e-8c2e-9e5d0851c5fd"
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
   "rowsAffected":1,
   "requestServiceMessageID":"315871d9-7ac3-4452-85ea-1b82e7912ec9",
   "responseDateTime":"2019-01-22T16:16:14.6290807-06:00",
   "resultMessages":[  

   ],
   "serviceMessageID":"31be4073-0d58-467e-8c2e-9e5d0851c5fd"
}
```
