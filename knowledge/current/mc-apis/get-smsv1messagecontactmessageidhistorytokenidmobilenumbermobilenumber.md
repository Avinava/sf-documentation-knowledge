---
title: "GET /sms/v1/messageContact/{messageId}/history/{tokenId}/mobileNumber/{mobileNumber}"
domain: mc-apis
topic: get-smsv1messagecontactmessageidhistorytokenidmobilenumbermobilenumber
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.101Z
estimatedTokens: 250
keywords: [sms, messageContact, messageId, history, tokenId, mobileNumber, Retrieves, message, sent, mobile, number, **Overview**, Usage]
---

# GET /sms/v1/messageContact/{messageId}/history/{tokenId}/mobileNumber/{mobileNumber}

> Retrieves the last message sent to a mobile number.

# GET /sms/v1/messageContact/{messageId}/history/{tokenId}/mobileNumber/{mobileNumber}

## **Overview**

Retrieves the last message sent to a mobile number.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| messageId | string | Required | Message Id provided for the messageContact |
| tokenId | string | Required | Token Id returned for the messageContact |
| mobileNumber | string | Required | Mobile number for the messageContact |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /sms/v1/messageContact/MTA3ODo3ODow/history/MENqMHZHV2x3a0M1dG1iOHVnam9LZzo3OTow/mobileNumber/1120816001
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
{
  "count": 1,
  "createDate": "2017-12-19T14:35:35.51",
  "status": "Active",
  "history": [
    {
      "type": "MT",
      "message": "Send your first name!",
      "date": "2013-12-19T14:35:35.51"
    }
  ]
}
```

Last Updated: Jun 8, 2021
