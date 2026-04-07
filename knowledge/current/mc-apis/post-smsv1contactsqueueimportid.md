---
title: "POST /sms/v1/contacts/queueImport/{id}"
domain: mc-apis
topic: post-smsv1contactsqueueimportid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:23.224Z
estimatedTokens: 479
keywords: [POST, sms, contacts, queueImport, Queues, contact, import, **Overview**, Usage]
---

# POST /sms/v1/contacts/queueImport/{id}

> Queues a contact import.

# POST /sms/v1/contacts/queueImport/{id}

## **Overview**

Queues a contact import.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| listId | string | Required | the list id |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| shortCode | string |  | The short code |
| keyword | string |  | The keyword |
| sendEmailNotification | boolean |  | Send email notification |
| emailAddress | string |  | Email address the notification goes to |
| importMappingType | string |  | Field mapping type |
| fileName | string |  | The name of the file, including extensions |
| fileType | string |  | The only type supported is csv |
| isFirstRowHeader | boolean |  | Flag indicating whether or not the first row is the header |
| fieldMaps | array |  | List of field maps includes destination, ordinal, and source |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/contacts/queueImport/UEhwdktFWXpFZUs3Z3hRUW45R2dBQTo2Mzow
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "ListId": "UEhwdktFWXpFZUs3Z3hRUW45R2dBQTo2Mzow",
    "ShortCode": "90913",
    "Keyword": "WELCOME",
    "SendEmailNotification": "true",
    "EmailAddress": "example@example.com",
    "ImportMappingType": "MapByOrdinal",
    "FileName": "testdata.csv",
    "FileType": "csv",
    "IsFirstRowHeader": "true",
    "FieldMaps": [
        {
            "destination": "_MobileNumber",
            "ordinal": 2,
            "source": "mobile number"
        },
        {
            "destination": "_CountryCode",
            "ordinal": 3,
            "source": "locale"
        },
        {
            "destination": "_SubscriberKey",
            "ordinal": 1,
            "source": "subscriber key"
        }
    ]
}
```

**Example Response**

```js
HTTP/1.1 202 Accepted
{
    "tokenId": "NzY2MTU6NDI6MA"
}
```

Last Updated: Jun 8, 2021
