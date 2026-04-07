---
title: "POST /sms/v1/automation/importSend"
domain: mc-apis
topic: post-smsv1automationimportsend
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.385Z
estimatedTokens: 632
keywords: [POST, sms, automation, importSend, **Overview**, Usage]
---

# POST /sms/v1/automation/importSend

# POST /sms/v1/automation/importSend

## **Overview**

Imports and sends.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| messageId | string | Required | Encoded message Id |
| keyword | string | Required | A valid keyword on the shortcode for the message to opt the numbers on to |
| notificationEmail | string |  | If specified, email notifications will be sent on import and program completion |
| override | boolean |  | Flag to indicate whether the override text should be used |
| overrideText | string |  | Text to override the existing message. |
| isDuplicationAllowed | boolean |  | If true, duplicate messages may be sent |
| isVisible | boolean |  | If specified true, the import definition and list created will be visible |
| importDefinition | string | Required | List of Import Definitions to be created (currently limited to 1) |

### Usage

**Example Request for FILE ImportType**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/automation/importSend
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "MessageId": "MessageId",
  "Keyword": "Test_Keyword",
  "NotificationEmail": "myEmail@example.com",
  "IsDuplicationAllowed" : true,
  "ImportDefinition": [{
    "FileName": "MyTestList.csv",
    "ImportType": "FILE",
    "ImportMappingType": "ManualMap",
    "FieldMaps": [{
      "Destination": "_FirstName",
      "Source": "First Name"
    }, {
      "Destination": "_Subscriberkey",
      "Source": "Subscriber Key"
    }, {
      "Destination": "_LastName",
      "Source": "Last Name"
    }, {
      "Destination": "_MobileNumber",
      "Source": "Mobile"
    }, {
      "Destination": "_CountryCode",
      "Source": "Country"
    }]
  }]
}
```

**Example Request for DATA\_EXTENSION ImportType**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/automation/importSend
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "MessageId": "MessageId",
  "Keyword": "Test_Keyword",
  "NotificationEmail": "myEmail@example.com",
  "Override": true,
  "OverrideText": "Override Text for Demo!",
  "IsDuplicationAllowed" : true,
  "ImportDefinition": [{
    "ImportType": "DATA_EXTENSION",
    "ImportMappingType": "InferFromColumnHeadings",
    "DataExtensionName": "MyDataExtension",
    "IsFirstRowHeader": true
  }]
}
```

**Example Response**

```js
HTTP/1.1 202 Accepted
{
    "tokenId": "NDo8NDow",
    "lastPublishDate": "2012-12-18T15:38:12.030Z"
}
```

Last Updated: Jun 8, 2021
