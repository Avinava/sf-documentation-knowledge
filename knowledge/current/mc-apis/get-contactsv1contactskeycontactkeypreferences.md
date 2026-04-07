---
title: "GET /contacts/v1/contacts/key:{contactKey}/Preferences"
domain: mc-apis
topic: get-contactsv1contactskeycontactkeypreferences
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.161Z
estimatedTokens: 326
keywords: [contacts, key, contactKey, Preferences, Retrieves, consent, management, contact, records, requests, display, reserved, future, don't, perform, any, actions, time, documented, best, performance, batches, whenever, possib, **Overview**, Marketing, Cloud, Permissions, Scope]
---

> Retrieves consent management information from contact records by contact key. GET requests might display values that are reserved for future use and don't perform any actions at this time. Use only the parameters documented here. For best performance, use batches of contact ID values whenever possib

# GET /contacts/v1/contacts/key:{contactKey}/Preferences

## **Overview**

Retrieves consent management information from contact records by contact key. GET requests might display values that are reserved for future use and don't perform any actions at this time. Use only the parameters documented here. For best performance, use batches of contact ID values whenever possible.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| contactKey | string | Required | Primary address for the contact. |

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
get /contacts/v1/contacts/key:1ab2/Preferences
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

```js
HTTP/1.1 200 OK
{
   "value":{
      "contactID":123456,
      "hasOptedOutTracking":false
   },
   "rowsAffected":1,
   "requestServiceMessageID":"105d74f2-9eab-450f-b799-6a845ebe4a4b",
   "responseDateTime":"2019-01-24T10:44:12.2334945-06:00",
   "resultMessages":[

   ],
   "serviceMessageID":"0bfd9831-58cd-4db1-99bc-2f499e43a026"
}
```

Last Updated: Jun 8, 2021

## Code Examples

```
HTTP/1.1 200 OK
{  
   "value":{  
      "contactID":123456,
      "hasOptedOutTracking":false
   },
   "rowsAffected":1,
   "requestServiceMessageID":"105d74f2-9eab-450f-b799-6a845ebe4a4b",
   "responseDateTime":"2019-01-24T10:44:12.2334945-06:00",
   "resultMessages":[  

   ],
   "serviceMessageID":"0bfd9831-58cd-4db1-99bc-2f499e43a026"
}
```
