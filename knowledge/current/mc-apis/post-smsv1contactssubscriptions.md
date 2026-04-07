---
title: "POST /sms/v1/contacts/subscriptions"
domain: mc-apis
topic: post-smsv1contactssubscriptions
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:20.711Z
estimatedTokens: 371
keywords: [POST, sms, contacts, subscriptions, subscription, status, mobile, number, subscriber, key, **Overview**, Usage]
---

# POST /sms/v1/contacts/subscriptions

> Returns subscription status for a mobile number or subscriber key.

# POST /sms/v1/contacts/subscriptions

## **Overview**

Returns subscription status for a mobile number or subscriber key.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| mobileNumber | string |  | An array of mobile numbers |
| subscriberKey | string |  | An array of subscriber keys |

### Usage

The phone number must use the correct format for the designated country code. For example, a mobile number from the United States must include the numerical country code 1 and the applicable area code as displayed in the sample CSV file. Note that the numerical country code mentioned here applies only to the phone number itself, and that any separate field containing country code information must conform to [ISO-3306-1 alpha-2 standards](http://www.iso.org/iso/country_codes/iso-3166-1_decoding_table.htm "http://www.iso.org/iso/country_codes/iso-3166-1_decoding_table.htm").

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/contacts/subscriptions
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "mobileNumber": ["15555555555"]
}
```

**Example Response**

```js
{
  "count": "1",
  "createDate": "2014-01-06T00:24:21.8577113Z",
  "completeDate": "2014-01-06T00:24:21.8637119Z",
  "contacts": [
    {
      "mobileNumber": "15555555555",
      "shortCode": "55555",
      "keyword": "SINGLE_OPTIN",
      "optInDate": "2013-12-30T14:10:32.2330000"
    }
  ]
}
```

Last Updated: Jun 8, 2021
