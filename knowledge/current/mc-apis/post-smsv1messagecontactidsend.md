---
title: "POST /sms/v1/messageContact/{id}/send"
domain: mc-apis
topic: post-smsv1messagecontactidsend
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:18.225Z
estimatedTokens: 2158
keywords: [POST, sms, messageContact, send, Initiates, message, mobile, numbers, **Overview**]
---

> Initiates a message to one or more mobile numbers.

# POST /sms/v1/messageContact/{id}/send

## **Overview**

Initiates a message to one or more mobile numbers.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| id | string | Required | The encoded message ID |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| mobileNumbers | array | Required | An array of one or more mobile numbers |
| Subscribers | array |  | Array of up to 250 subscriber records where the message is sent to. Subscribers is different from mobileNumbers because it allows you to specify a SubscriberKey value and the mobile number as the unique identifier for that record. |
| Subscribers.MobileNumber | string |  | Specifies the mobile number used as the unique identifier for that record. |
| Subscribers.SubscriberKey | string |  | Specifies the SubscriberKey value used as the unique identifier for that record. |
| Subscribers.Attributes | array |  | Set real-time attributes for individual personalization strings, per subscriber. The subscriber attribute must match the attribute string in the message. You can pass attributes that are not used as attributes in the message into the SMS send log. The dictionary key is available as a standard replacement string in AMPScript. |
| subscribe | boolean |  | Flag to indicate a subscription should be created if none exist |
| resubscribe | boolean |  | Flag to indicate a subscription should be reset if currently unsubscribed |
| keyword | string |  | The keyword must align with code on message. Required when subscribe and/or resubscribe are true. |
| override | boolean |  | Flag to indicate that the contact is receive the messageText as provided instead of the message's original text |
| messageText | string |  | Text value to be used in place of the message's original text. This value is required when override is true. |
| blackoutWindow | object |  | Details about the window of time where messages should not be sent. Messages initiated inside of this window will be queued and delivered once the window is open. |
| blackoutWindow.UtcOffset | string |  | The UTC offset of the blackout window start and end times. UtcOffset is required in every REST call in order for the blackout window to be honored. |
| blackoutWindow.WindowStart | string |  | The start time of the blackout window, in the UTC offset specified. To see if the SendTime is within the blackout window, convert the WindowStart and WindowEnd times to UTC and compare them to the SendTime. |
| blackoutWindow.WindowEnd | string |  | The end time of the blackout window, in the UTC offset specified. To see if the SendTime is within the blackout window, convert the WindowStart and WindowEnd times to UTC and compare them to the SendTime. |
| SendTime | UTC Time |  | Date and Time in UTC that the message will go out. Example format: 2012-10-17 17:01. The blackoutWindow will still be respected if used with this option. If you attempt to send during the blackoutWindow, the message is scheduled to send one second after the blackout window ends. If the SendTime is set to a date and time in the past, the message will send immediately. |
| ContentURL | string |  | The URL of the media content sent via an MMS message. |

### Usage

The phone number must use the correct format for the designated country code. For example, a mobile number from the United States must include the numerical country code 1 and the area code displayed in the sample CSV file. The numerical country code mentioned here applies only to the phone number itself, and that any separate field containing country code information must conform to [ISO-3306-1 alpha-2 standards](http://www.iso.org/iso/country_codes/iso-3166-1_decoding_table.htm "http://www.iso.org/iso/country_codes/iso-3166-1_decoding_table.htm").

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/messageContact/MzA6Nzg6MA/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "mobileNumbers": [
    "13175551212"
    ],
    "Subscribe": true,
    "Resubscribe": true,
    "keyword": "JOINSMS",
    "Override": true,
    "messageText": "Welcome to Code@",
    "ContentURL" : "http://image.exct.net/lib/fe6d15707662057c7411/m/1/dj_CC_AUS.jpg",
    "SendTime": "2012-10-05 20:01"
}
```

To ensure that the mobile number exists for the contact and that the contact subscribed to the specified keyword on your short code, set the Subscribe and Resubscribe values to true.

To provide an alternate unique value for referencing these records, pass another identifier with the mobile number. You cannot pass both the Subscribers parameter and a mobileNumber parameter outside of a Subscribers parameter. Choose the option that best fits your call.

The MobileConnect message with API key MzA6Nzg6MA is saved in Marketing Cloud with only one open personalization string equal to %%FirstName%%. The following call sends two messages: one with "Michael" used for first name, the other with "Kristen".

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/messageContact/MzA6Nzg6MA/send
Content-Type: application/json
{
    "Subscribers": [
        {
        "MobileNumber": "15555554410",
        "SubscriberKey": "ExampleSubKey1",
        "Attributes":{
            "FirstName":"Michael"
            }
        },
        {
        "MobileNumber": "15555552254",
        "SubscriberKey": "ExampleSubKey2",
        "Attributes":{
            "FirstName":"Kristen"
            }
        }
    ],
    "Subscribe": "true",
    "Resubscribe": "true",
    "keyword": "JOINSMS",
    "Override": "false",
    "SendTime": "2012-10-05 20:01"
}
```

**Example Response**

If the request is valid, the API returns a token that can be used to make a follow-up call to check the status of the request.

```js
HTTP/1.1 202 Accepted
{
  "tokenId": "c21NCNSDN2sMMWM2miosdjEHH",
}
```

**Error Response**

If the request was not valid, the API returns a 400 response with details on the error. This example includes the following errors:

-   The keyword does not exist in the account
-   The mobile number includes hyphens
    ```js
    HTTP/1.1 400 Bad Request
    {
    "errors" : ["1-317-555-1212 is not a numeric string",
        "Keyword TestKeyword is invalid for the code on the message"]
    }
    ```


| Message | Details |
| --- | --- |
| Message id {0} is not valid. | The messageID value provided in the URL was not in a valid format. |
| Message {0} is not valid for the client. | The messageID value included in the URL does not match a valid value within the account. |
| The count of mobile numbers or subscribers cannot be zero. | Pass at least one number in the mobileNumbers parameter or in the Subscribers parameter. |
| An array of mobile numbers and an array of subscribers cannot be provided at the same time. | When passing in the target audience, either the mobileNumbers parameter or the Subscribers parameter must be used, but not both in a single request. |
| A subscriber object must have both a mobile number and subscriber key defined. | The subscriber details being passed is missing either the MobileNumber or SubscriberKey parameter. |
| Keyword cannot be blank when Subscribe or Resubscribe are true. | If the Subscribe or Resubscribe options are set to true, specify the keyword parameter. |
| Keyword is not necessary when Subscribe and Resubscribe are false. | Keyword value is not needed if the Subscribe and Resubscribe options are not being used. |
| Keyword {0} is invalid for the code on the message. | The keyword provided does not exist for the provided messageId. |
| Message is blank and no override message was provided. | The message definition within the MobileConnect interface does not have a message specified so the messageText parameter is required. |
| Cannot override message text with a blank message. | The parameter for Override was set to true, but the value passed for messageText does not contain a value. |
| MessageText is not applicable when Override is false. | If Override is set to true, the call does not require passing a value for messageText. |
| An unexpected error occurred, please contact Customer Support with reference id {0}. | If this unexpected error is presented, take note of the reference id value returned in the error and contact Salesforce Global Support for more information. |
| Invalid phone number | Enter a valid phone number in the mobileNumber parameter for the subscriber. |
| No valid subscribers were provided | None of the numbers provided were valid. Check the mobileNumber parameter for all of the subscribers. |

Last Updated: Jun 8, 2021

## Code Examples

```
HTTP/1.1 400 Bad Request
{
"errors" : ["1-317-555-1212 is not a numeric string",
    "Keyword TestKeyword is invalid for the code on the message"]
}
```
