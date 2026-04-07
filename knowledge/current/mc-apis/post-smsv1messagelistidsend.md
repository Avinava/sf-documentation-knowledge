---
title: "POST /sms/v1/messageList/{id}/send"
domain: mc-apis
topic: post-smsv1messagelistidsend
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:23.060Z
estimatedTokens: 1873
keywords: [POST, sms, messageList, send, Initiates, message, contact, **Overview**, Usage]
---

# POST /sms/v1/messageList/{id}/send

> Initiates a message to one or more contact lists.

# POST /sms/v1/messageList/{id}/send

## **Overview**

Initiates a message to one or more contact lists.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| messageId | string |  | The encodedID can be found when creating a “API Entry Event” type Outbound message in the UI. If you have already passed that point you can find the ID by looking at the API resource behind the scenes when you open that message in the UI. |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| TargetListIds | array |  | A list of one or more List ID strings. The contacts in these Lists will be included in the send and will overwrite the Message’s default inclusion lists. |
| OverrideTemplateTargetLists | string |  | A flag indicating TargetListIds will be provided for overriding the message default Target List Ids |
| ExclusionListIds | array |  | A list of one or more List ID strings. The contacts in these Lists will be excluded in the send and will overwrite the Message’s default exclusion lists. |
| IgnoreExclusionLists | boolean |  | A flag indicating that exclusion lists (even the default message exclusion lists) will not be used in the send |
| OverrideMessageText | string |  | A flag indicating that the text provided should override the text stored with the Message |
| MessageText | string |  | Required when OverrideMessageText is true |
| blackoutWindow | object |  | Details about the window of time where messages should not be sent. Messages initiated inside of this window will be queued and delivered once the window is open. |
| blackoutWindow.UtcOffset | string |  | The UTC offset of the blackout window start and end times. UtcOffset is required in every REST call in order for the blackout window to be honored. |
| blackoutWindow.WindowStart | string |  | The start time of the blackout window, in the UTC offset specified. To see if the SendTime is within the blackout window, convert the WindowStart and WindowEnd times to UTC and compare them to the SendTime |
| blackoutWindow.WindowEnd | string |  | The end time of the blackout window, in the UTC offset specified. To see if the SendTime is within the blackout window, convert the WindowStart and WindowEnd times to UTC and compare them to the SendTime |
| sendTime | date |  | Date and Time in UTC that the message will go out. Example format: 2012-10-17 17:01. The BlackoutWindow will still be respected if used with this option. If the SendTime is set to a date and time in the past, the message will send immediately. |
| allowDuplication | boolean |  | The same mobile number may receive multiple texts if this value is true |
| ContentURL | string |  | The URL of the media content sent via an MMS message |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/messageList/MzA6Nzg6MA/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "TargetListIds": [
        "bzZ0cENGam1FZUtNX0poTDRYZzhlQTo2Mzow"
    ],
    "OverrideTemplateTargetLists": "true",
    "OverrideTemplateExclusionLists": "false",
    "IgnoreExclusionLists": "true",
    "OverrideMessageText": "false",
    "ContentURL" : "http://image.exct.net/lib/fe6d15707662057c7411/m/1/dj_CC_AUS.jpg"
    "BlackoutWindow": {
        "UtcOffset": "-0500",
        "WindowStart": "1500",
        "WindowEnd": "2200"
    },
    "AllowDuplication": "false"
}
```

**Example Response**

If all values in the request are valid, the API returns a token that can be used to make a follow-up call to check the status of the request.

```js
HTTP/1.1 202 Accepted
{
  "tokenId": "c21NCNSDNsd222as85dj92j2sMMWM2miosdjEHH",
}
```

**Error Response**

If the request was not valid, the API returns a 400 response with details on the error. This example includes the following errors:

-   The keyword does not exist in the account
-   The mobile number includes hyphens
    ```js
    HTTP/1.1 202 Accepted
    {
    "tokenId": "c21NCNSDNsd222as85dj92j2sMMWM2miosdjEHH",
    }
    ```


| Message | Details |
| --- | --- |
| Message id {0} is not valid. | The messageID value provided in the URL was not in a valid format. |
| Message {0} is not valid for the client. | The messageID value included in the URL does not match a valid value within the account. |
| The Message must be in Active status in order to send. | The message does not have a status of Active/Scheduled. |
| The count of Target List IDs cannot be zero. | Indicates that no valid Target List IDs were specified. |
| Target list id [{0}] is invalid. | Indicates that the Target List ID specified is invalid. |
| TargetListIds is not applicable when OverrideTemplateTargetLists is false. | Indicates that the OverrideTemplateTargetLists flag was not set to TRUE when specifying Target List IDs. |
| Cannot override template target lists when no target list ids are specified. | Indicates that no TargetListIDs were specified even though the OverrideTemplateTargetLists flag was set to TRUE. |
| The count of Exclusion List IDs cannot be zero. | Indicates that no valid Exclusion List IDs were specified. |
| Exclusion list id [{0}] is invalid. | Indicates that the Exclusion List ID specified is invalid. |
| ExclusionListIds is not applicable when OverrideTemplateExclusionLists is false. | Indicates that the OverrideTemplateExclusionLists flag was not set to TRUE when specifying Exclusion List IDs. |
| Cannot override template exclusion lists when no exclusion list ids are specified. | Indicates that no ExclusionListIDs were specified even though the OverrideTemplateExclusionLists flag was set to TRUE. |
| Exclusion list ids cannot be specified when IgnoreExclusionLists is true. | Indicates that IgnoreExclusionLists was set to TRUE even though ExclusionLists were specified. |
| OverrideTemplateExclusionLists cannot be true when IgnoreExclusionLists is true. | Indicates that IgnoreExclusionLists was set to TRUE even though OverrideTemplateExclusionLists was also set to TRUE . |
| Message is blank and no override message was provided. | Indicates that the Message’s stored text is blank and no override was provided. |
| Cannot override message text with a blank message. | Indicates that the override flag is true but a blank or missing MessageText field was submitted. |
| MessageText is not applicable when OverrideMessageText is false. | Indicates that no MessageText is needed and should not be included in the request. This is present to eliminate confusion and errant sends with the static message text. |
| A UTC offset must be specified when using a blackout window. | Indicates that no UTC time zone offset was provided in the BlackoutWindow object. |
| {0} is not a valid UTC offset. | Indicates that the UTC offset provided is not in the correct format. |
| A window start time must be specified when using a blackout window. | Indicates that no blackout window start time was provided in the BlackoutWindow object. |
| {0} is not a valid blackout window start time. | Indicates that the blackout window start time is not in the correct format. |
| A window end time must be specified when using a blackout window. | Indicates that no blackout window end time was provided in the BlackoutWindow object. |
| {0} is not a valid blackout window end time. | Indicates that the blackout window end time is not in the correct format. |
| {0} is not a valid send time (yyyy-MM-dd HH:mm). | Indicates that the send time is not in the proper format. |

Last Updated: Jun 8, 2021

## Code Examples

```
HTTP/1.1 202 Accepted
{
"tokenId": "c21NCNSDNsd222as85dj92j2sMMWM2miosdjEHH",
}
```
