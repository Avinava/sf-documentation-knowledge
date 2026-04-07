---
title: "GET /sms/v1/messageList/{id}/deliveries/{tokenId}"
domain: mc-apis
topic: get-smsv1messagelistiddeliveriestokenid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.257Z
estimatedTokens: 594
keywords: [sms, messageList, deliveries, tokenId, status, message, sent, group, mobile, numbers, **Overview**]
---

> Returns status for a message sent to a group of mobile numbers.

# GET /sms/v1/messageList/{id}/deliveries/{tokenId}

## **Overview**

Returns status for a message sent to a group of mobile numbers.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| messageId | string |  | Message Id provided for the messageList |
| tokenId | string |  | Token Id returned for the messageList |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /sms/v1/messageList/MzA6Nzg6MA/deliveries/c21NCNSDN2sMMWM2miosdjEHH
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

If the request included an invalid messageId or tokenId, the API returns the appropriate error.

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
