---
title: "Custom Notification Actions"
domain: pushImplGuide
topic: custom-notification-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:35.544Z
estimatedTokens: 838
keywords: [Custom, Notification, Actions, Send, notifications, recipients, via, desktop, mobile, channels, REST, HTTP, Inputs, Usage]
---

# Custom Notification Actions

> Send custom notifications to recipients via desktop or mobile
			channels.

# Custom Notification Actions

Send custom notifications to recipients via desktop or mobile channels.

Before you send a custom notification, you must first create a notification type.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pushImplGuide)

#### Important

In orgs created in Winter ’21 or later, the Send Custom Notifications user permission is required to trigger the Send Custom Notification action in [flows that run in user context](https://help.salesforce.com/articleView?id=flow_distribute_context.htm&type=5&language=en_US "HTML (New Window)"), REST API calls, and Apex callouts.

The Send Custom Notifications user permission isn’t required to trigger the Send Custom Notification action in processes or flows that run in system context.

This object is available in API version 46.0 and later.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/customNotificationAction

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| actionGroup | TypestringDescriptionOptional. Action group for custom notification type. This makes the mobile push notifications actionable. |
| customNotifTypeId | TypereferenceDescriptionRequired. The ID of the Custom Notification Type being used for the notification. |
| recipientIds | TypereferenceDescriptionRequired. The ID of the recipient or recipient type of the notification. Valid recipient or recipient type values are:UserId — The notification is sent to this user, if this user is active.AccountId — The notification is sent to all active users who are members of this account’s Account Team.This recipient type is valid if account teams are enabled for your org.OpportunityId — The notification is sent to all active users who are members of this opportunity’s Opportunity Team.This recipient type is valid if team selling is enabled for your org.GroupId — The notification is sent to all active users who are members of this group.QueueId — The notification is sent to all active users who are members of this queue.Values can be combined in a list up to the maximum of 500 values. |
| senderId | TypereferenceDescriptionOptional. The User ID of the sender of the notification. |
| title | TypestringDescriptionRequired. The title of the notification, as seen by recipients. Maximum characters: 250.The content of mobile push notifications depends on the content push notification setting. |
| body | TypestringDescriptionRequired. The body of the notification, as seen by recipients. Maximum characters: 750.The content of mobile push notifications depends on the content push notification setting.. |
| targetId | TypereferenceDescriptionOptional. The Record ID for the target record of the notification.You must specify either a targetID or a targetPageRef. |
| targetPageRef | TypestringDescriptionOptional. The PageReference for the navigation target of the notification.To see how to specify the target using JSON, see pageReference.You must specify either a targetID or a targetPageRef. |

## Usage

GET

The following example shows how to get information about the custom notification action type:

```

```

POST

The following example shows how to create a custom notification action:

```

```

The response is:

```

```

## Code Examples

```
curl --include --request GET \
--header "Authorization: Authorization: Bearer 00DR...xyz" \
--header "Content-Type: application/json" \
"https://instance.salesforce.com/services/data/v46.0/actions/standard/customNotificationAction"
```

```
curl --include --request POST \
--header "Authorization: Authorization: Bearer 00DR...xyz" \
--header "Content-Type: application/json" \
--data '{ "inputs" :
  [
  {
    "customNotifTypeId" : "0MLR0000000008eOAA",
    "recipientIds" : ["005R0000000LSqtIAG"],
    "title" : "Custom Notification",
    "body" : "This is a custom notification.",
    "targetId" : "001R0000003fSUDIA2"
  }
  ]
}' \
"https://instance.salesforce.com/services/data/v46.0/actions/standard/customNotificationAction"
```

```
[
   {
      "actionName" : "customNotificationAction",
      "errors" : null,
      "isSuccess" : true,
      "outputValues" : {
         "SuccessMessage" : "Your custom notification is processed successfully."
      }
   }
]
```
