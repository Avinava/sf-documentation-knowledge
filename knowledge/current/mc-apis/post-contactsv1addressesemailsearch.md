---
title: "POST /contacts/v1/addresses/email/search"
domain: mc-apis
topic: post-contactsv1addressesemailsearch
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:23.511Z
estimatedTokens: 289
keywords: [POST, contacts, addresses, email, search, Retrieves, contact, key, channel, **Overview**, Usage]
---

# POST /contacts/v1/addresses/email/search

> Retrieves the contact key for one or more email channel addresses.

# POST /contacts/v1/addresses/email/search

## **Overview**

Retrieves the contact key for one or more email channel addresses.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| channelAddressList | array | Required | List of email channel addresses for which a contact key is requested |
| maximumCount | integer |  | Number of contact keys associated with an email channel address. The default value is 1. |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /contacts/v1/addresses/email/search
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "ChannelAddressList":["email@example.com"],
    "MaximumCount":1
}
```

**Example Response**

```
{
  "channelAddressResponseEntities": [
    {
      "contactKeyDetails": [
        {
          "contactKey": "12345@example.com",
          "createDate": "2014-11-15T11:51:00"
        }
      ],
      "channelAddress": "email@example.com"
    }
  ],
  "requestServiceMessageID": "unique-UUID-provided-by-SFMC",
  "resultMessages": [],
  "serviceMessageID": "unique-UUID-provided-by-SFMC"
}
```

Last Updated: Jun 8, 2021
