---
title: "Live Message Notification Actions"
domain: api-action
topic: live-message-notification-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.144Z
estimatedTokens: 672
keywords: [Live, Message, Notification, Actions, messaging, templates, send, notifications, users, over, communication, channels, SMS, WhatsApp, Facebook]
---

# Live Message Notification Actions

> Use messaging templates to send notifications to users over
			communication channels, such as SMS, WhatsApp, and Facebook Messenger, when certain
			conditions are met.

# Live Message Notification Actions

Use messaging templates to send notifications to users over communication channels, such as SMS, WhatsApp, and Facebook Messenger, when certain conditions are met.

This action is available in API version 43.0 and later.

For more information about using Live Message Notification actions in flows, see [Create Flows to Send Automatic Message Notifications](https://help.salesforce.com/HTViewHelpDoc?id=service.livemessage_automatic_notifications_flows.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

## Special Access Rules

To access Live Message Notification action for Surveys, you must have the Feedback Management Starter or Growth license and Salesforce org enabled with a default community.

## Supported REST HTTP Methods

URI

/services/data/v43.0/actions/standard/liveMessageNotification

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| channelDeveloperName | TypestringDescriptionRequired. The unique name of the messaging channel that’s used to send the messaging notification. |
| contextRecordId | TypeIDDescriptionThe entity ID of the sObject that’s used as the context for the merge field in a messaging template.To resolve a merge field, the contextRecordId input property is required. |
| conversationBroadcastId | TypeIDDescriptionThe entity ID of the sObject that links all the messages within a broadcast. |
| recipientPhone | TypestringDescriptionThe destination phone number that the message is sent to. If the messaging channel type is SMS and the recipientRecordId input property isn’t a messaging user, then the recipientPhone input property is required. |
| recipientRecordId | TypeIDDescriptionRequired. The MessagingEndUserId property or the Record ID associated with a recipient phone number, to send the message notification. |
| surveyDeveloperName | TypestringDescriptionThe API name of the survey that’s sent in the message. Available in API version 57.0 and later.This input property is applicable to Surveys only. |
| templateDeveloperName | TypestringDescriptionRequired. The unique name of the messaging template that’s used to generate the message. |
| triggeredOutboundTypeEnum | TypepicklistDescriptionThe type of triggered outbound message. Possible values are:StandardBroadcast |

## Outputs

None.

## Example

GET

The following example shows how to get information about the Live Message Notification action type:

```

```

POST

Here’s an example request for the Live Message Notification action:

```

```

Here’s an example response for the Live Message Notification action:

```

```

## Code Examples

```
curl --include --request GET \
--header "Authorization: Authorization: Bearer 00DR...xyz" \
--header "Content-Type: application/json" \
"https://instance.salesforce.com/services/data/v43.0/actions/standard/liveMessageNotification"
```

```
{
   "inputs":[{
      "templateDeveloperName":"MessageQ3Template",
      "channelDeveloperName":"MessageQ3Template",
      "contextRecordId":"003RO00000480RvYAM",
      "recipientRecordId":"0PARM000000GJzo4AG"
   }]
}
```

```
[
   {
      "actionName" : "liveMessageNotification",
      "errors" : null,
      "isSuccess" : true,
      "outputValues" : null
   }
]
```
