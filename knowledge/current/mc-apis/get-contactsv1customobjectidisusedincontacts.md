---
title: "GET /contacts/v1/customObject/{id}/isUsedInContacts"
domain: mc-apis
topic: get-contactsv1customobjectidisusedincontacts
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.166Z
estimatedTokens: 187
keywords: [contacts, customObject, isUsedInContacts, Retrieves, whether, contact, model, account, uses, **Overview**]
---

> Retrieves information on whether the contact model for an account uses the custom object.

# GET /contacts/v1/customObject/{id}/isUsedInContacts

## **Overview**

Retrieves information on whether the contact model for an account uses the custom object.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| id | guid | Required | ID of the custom object as GUID value |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /contacts/v1/customObject/unique-UUID-from-SFMC/isUsedInContacts
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
{
    "isUsedByContacts": true
    "requestServiceMessageID": "unique-GUID-from-SFMC"
    "resultMessages": [0]
    "serviceMessageID": "unique-GUID-from-SFMC"
}
```

Last Updated: Jun 8, 2021
