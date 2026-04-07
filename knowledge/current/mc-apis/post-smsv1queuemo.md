---
title: "POST /sms/v1/queueMO"
domain: mc-apis
topic: post-smsv1queuemo
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:23.093Z
estimatedTokens: 852
keywords: [POST, sms, queueMO, Queues, message, send, **Overview**, Usage]
---

# POST /sms/v1/queueMO

> Queues an MO message for send.

# POST /sms/v1/queueMO

## **Overview**

Queues an MO message for send.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| mobileNumbers | array | Required | An array of mobile numbers used in the send. Either the mobileNumbers or subscribers property is required, but not both. |
| subscribers | array | Required | An array of subscriber keys and mobile numbers used in the send. Either the mobileNumbers or subscribers property is required, but not both. |
| shortCode | string | Required | The short code |
| messageText | string | Required | The text value |

### Usage

The mobileNumbers value accepts only 250 or fewer normalized phone numbers. The subscribers value accepts only 250 or fewer string values (including 1 to 254 characters). You can use a single subscriberkey value with multiple mobileNumber values, depending on how your account manages contact information. You must provide values for either mobileNumbers or subscribers, but not both. If you populate both arrays, the API defaults to use subscriber information and ignores mobileNumbers information.

The mobileNumbers value must be no fewer than eight and no more than 15 characters. The mobileNumbers value must also use the correct format for the designated country code. For example, a phone number from the United States must include the numeric country code 1 and the applicable area code as displayed in the sample CSV file. Note that the numeric country code mentioned here applies only to the phone number itself, and that any separate field containing country code information must conform to [ISO-3306-1 alpha-2 standards](http://www.iso.org/iso/country_codes/iso-3166-1_decoding_table.htm "http://www.iso.org/iso/country_codes/iso-3166-1_decoding_table.htm").

**Example Request** This example shows a call referencing a single mobile number.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/queueMO/
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "mobileNumbers" : [
  "15555551212"
  ],
  "shortCode" : "86288",
  "messageText" : "CODETEST"
}
```

**Example Response**

```js
HTTP/1.1 202 Accepted
{
    "results": [{
        "identifier": "UnNxWDUwbGFMVTJjWnB4R0x1Qng4dzo3Njow",
        "mobileNumber": "15555551212",
        "result": "OK"
    }]
}
```

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/queueMO/
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
   "subscribers":[
     {
       "mobilenumber": "15555551212",
       "subscriberkey": "0_MC1652"
     },
     {
       "mobilenumber": "15555551213",
       "subscriberkey": "0_MC1652"
     }
   ],
   "shortCode" : "86288",
   "messageText" : "CODETEST"
}
```

**Example Response**

```js
HTTP/1.1 202 Accepted
{
     results: [{
         identifier: UnNxWDUwbGFMVTJjWnB4R0x1Qng4dzo3Njow,
         subscribers:[
           {
             mobilenumber: 15555551212,
             subscriberkey: 0_MC1652
           },
           {
             mobilenumber: 15555551213,
             subscriberkey: 0_MC1652
           }
         ],
         result: OK
     }]
}
```

Including values for both mobileNumbers and subscribers returns the following error.

```js
{
   "errors": [
     "An array of mobile numbers and an array of subscribers cannot be provided at the same time"
   ]
}
```

Last Updated: Jun 8, 2021

## Code Examples

```
HTTP/1.1 202 Accepted   
{   
     results: [{   
         identifier: UnNxWDUwbGFMVTJjWnB4R0x1Qng4dzo3Njow,   
         subscribers:[    
           {   
             mobilenumber: 15555551212,    
             subscriberkey: 0_MC1652   
           },    
           {   
             mobilenumber: 15555551213,    
             subscriberkey: 0_MC1652   
           }   
         ],   
         result: OK    
     }]    
}
```

```
{   
   "errors": [   
     "An array of mobile numbers and an array of subscribers cannot be provided at the same time"    
   ]   
}
```
