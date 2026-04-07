---
title: "GET /sms/v1/messageContact/{messageId}/deliveries/{tokenId}"
domain: mc-apis
topic: get-smsv1messagecontactmessageiddeliveriestokenid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.096Z
estimatedTokens: 900
keywords: [sms, messageContact, messageId, deliveries, tokenId, Retrieves, overall, delivery, status, message, contact, standard, codes, descriptions, universal]
---

# GET /sms/v1/messageContact/{messageId}/deliveries/{tokenId}

> Retrieves the overall delivery status of a message to a contact and the standard SMS status codes and descriptions. Standard SMS status codes are universal regardless of where messages are sent. This API returns status codes in the order received from carriers, so Marketing Cloud can receive codes a

# GET /sms/v1/messageContact/{messageId}/deliveries/{tokenId}

## **Overview**

Retrieves the overall delivery status of a message to a contact and the standard SMS status codes and descriptions. Standard SMS status codes are universal regardless of where messages are sent. This API returns status codes in the order received from carriers, so Marketing Cloud can receive codes after the delivered or undelivered status has been returned. Infer the final message status from the status code with the highest numerical value.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| messageId | string | Required | Message Id provided for the messageContact |
| tokenId | string | Required | Token Id returned for the messageContact |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /sms/v1/messageContact/MzA6Nzg6MA/deliveries/c21NCNSDN2sMMWM2miosdjEHH
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 200
{
    "message": "Test Delivery Receipt",
    "count": 1,
    "createDate": "2013-04-25T15:01:04.147",
    "completeDate": "2013-04-25T15:01:55.197",
    "status": "Finished",
    "tracking": [
        {
            "mobileNumber": "15555555510",
            "statusCode": "20",
            "message": "NA"
            "standardStatusCode": "3000",
            "description": "Message enroute"
        },
        {
            "mobileNumber": "15555555510",
            "statusCode": "200",
            "message": "Carrier Success",
            "standardStatusCode": "4000",
            "description": "Delivered to handset"
        },
        {
            "mobileNumber": "15555555510",
            "statusCode": "20",
            "message": "Message sent to carrier",
            "standardStatusCode": "3001",
            "description": "Message Sent to Carrier"
        },
        {
            "mobileNumber": "15555555510",
            "statusCode": "0",
            "message": "DELIVERED TO Air2Web",
            "standardStatusCode": "2000",
            "description": "Message was Delivered to Aggregator"
        }
    ]
}
```

Status values:

-   message - The message text sent in the SMS message
-   count - The total of mobile numbers included in the send request subtracting the number of unsubscribed recipients
-   createdDate - Date when the MessageContact send was submitted, returned in CST
-   createdDate - Date when the send completed, returned in CST
-   Status
    -   Finished
    -   Error
    -   New
    -   Queuing
    -   Started

**Error Response**

If the request included an invalid messageId or tokenId, the API returns an appropriate error.

```js
HTTP/1.1 400 Bad Request
{
  "errors" : ["Message id cI217sdksi3 is not valid."]
}
```
| Message | Details |
| --- | --- |
| Message id {0} is not valid. | The messageID value provided in the URL was not in a valid format. |
| "Token id {0} is not valid." | The tokenId value provided in the URL was not in a valid format. |
| Token id {0} is not valid for this client. | The tokenId value provided is valid but was created for another client. |
| TokenId {0} is not valid for MessageId {1}. | The tokenId value provided is valid for your account but not for the MessageId provided. |
| An unexpected error occurred, please contact Customer Support with reference id {0}. | If this unexpected error is presented when making a call, please take note of the reference id value returned in the error and contact ExactTarget Global Support for more information. |

Last Updated: Jun 8, 2021
