---
title: "Send Conversation Messages Actions"
domain: api-action
topic: send-conversation-messages-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.201Z
estimatedTokens: 1489
keywords: [Send, Conversation, Messages, Actions, messaging, component, users, enhanced, WhatsApp, Apple, Business, SMS, In-App, targeted, channel]
---

# Send Conversation Messages Actions

> Send a messaging component to users in enhanced WhatsApp, enhanced Apple Messages for
  Business, enhanced SMS, or Messaging for In-App when the targeted channel has bandwidth. Each Send
  Conversation Messages action corresponds to a supported messaging component.

# Send Conversation Messages Actions

Send a messaging component to users in enhanced WhatsApp, enhanced Apple Messages for Business, enhanced SMS, or Messaging for In-App when the targeted channel has bandwidth. Each Send Conversation Messages action corresponds to a supported messaging component.

This object is available in API version 59.0 and later.

On invocation, this action inserts and enqueues a message for handling the request and sending out the messages async. The request record can be used to track the progress.

Typical use cases include:

-   Confirmation of a purchase or booking
-   Shipping or delivery updates
-   Password reset requests
-   Account verification messages
-   Payment reminders
-   Abandoned cart reminders

Messages are sent immediately as long as the following conditions are met. If these conditions aren’t met, messages can be queued for sending, resulting in a slight delay.

-   The invocation of the Send Conversation Messages action includes 5 or fewer messages. If it includes more, the additional messages are queued.
-   No more than 200 invocations of the Send Conversation Messages action are in progress. If this limit is reached, additional requests are queued and sent when the number of in-progress requests falls below 200. For queued requests, the messaging session owner for automated messages is the Platform Integration User. Otherwise, it’s the user triggering the action.
-   The conversation platform has capacity available to send the message. Messages in active conversations are always prioritized over automated outbound messages.

## Supported REST HTTP Methods

URI

/services/data/v59.0/actions/standard/sendConversationMessages

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| allowedSessionStatus | TypestringDescriptionLimits the time when the message can be sent. Valid values are:Any—Send the message whether the messaging user is engaged in a messaging session with the business or not.NonActive—Send the message unless the messaging user is engaged in a messaging session with a status of Active. The message is sent after the session’s status changes.Closed—Send the message unless the messaging user is engaged in a messaging session. The message is sent after the session is closed. |
| channelConsentType | TypestringDescriptionHow to apply consent preferences when determining which messaging users receive the message. Valid values are:MessagingEndUser—Apply messaging users' consent settings for a channel. This is the most common approach.CommunicationSubscription— Send the message only to messaging end users who have opted into a particular subscription. When selected, a communicationSubscriptionId must also be provided. This option is visible only if you have a unified channel that supports marketing interactions.Custom—Apply custom consent preferences. Used if isEnforceMessagingChannelConsent is set to false. |
| communicationSubscriptionId | TypestringDescription(Available if channelConsentType is set to CommunicationSubscription) The subscription that controls which messaging users the message is sent to. The subscription must be tied to the channel where the message is sent, and the message is sent only to users who opted in to the subscription. |
| isEnforceMessagingChannelConsent | TypebooleanDescriptionIndicates whether messaging consent must be verified after messages are queued for sending. |
| messageDefinitionName | TypestringDescriptionThe API name of a ConversationMessageDefinition (messaging component) record that's used to render the messages. |
| messagingDefinitionInputParameters | TypelistDescriptionOptional. A collection of Apex richmessaging__MessageDefinitionInputParameter records that contain messaging component details to use when rendering messages. |
| messagingEndUserIds | TypelistDescriptionA collection of up to 100 messaging end user record IDs to use as recipients of the messages. To send more than 100 messages, divide your end user recipients into batches of 100 or fewer and repeat the action invocation for each batch. |
| requestType | TypestringDescriptionSpecifies the type of the request. Valid values are: SendNotificationMessages. |

## Outputs

| Input | Details |
| --- | --- |
| requestId | TypestringDescriptionThe ID of the ConvMessageSendActionRequest record created by the request that's used to track the message progress. |
| messageIdentifiers | TypelistDescriptionA collection of generated message UUIDs with one entry for each recipient specified in messagingUserIds. |

## Usage

Sample Input

The following sample input attempts to create a ConvMessageSendRequest record using a Messaging Component (messageDefinitionName), the request for the type of component being sent (requestType), the consent preferences (isEnforceMessagingChannelConsent), the consent type (channelConsentType), when the message can be sent (allowedSessionStatus), and the message recipients (messagingEndUserIds). Additionally, the request contains a list of custom parameters (messagingDefinitionInputParameters). These parameters are mapped to parameters configured in the messaging component, which can be optional. Applicable data types for parameters are textValue, recordIdValue, dateValue, dateTimeValue, numberValue, and booleanValue.

```

```

Sample Output

The following sample output illustrates a response after a successful request.

```

```

For more information about this action, see [Flow Core Actions: Send Conversation Messages](https://help.salesforce.com/s/articleView?id=platform.flow_ref_elements_actions_sendconversationmessages.htm&type=5&language=en_US "HTML (New Window)") and [Send Automated Messages in Enhanced Messaging Channels](https://help.salesforce.com/s/articleView?id=service.messaging_automated_enhanced.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

## Code Examples

```
{
  "inputs": [{
      "messageDefinitionName":"Notification",
      "requestType":"SendNotificationMessages",
      "isEnforceMessagingChannelConsent":true,
      "channelConsentType":"MessagingEndUser",
      "allowedSessionStatus":"Any",
      "messagingEndUserIds":"0PARM000000Lc3I,0PARM000000MZ3p",
      "messagingDefinitionInputParameters":[{"name":"custom_parameter_name","textValue":"custom parameter value"}]
  }]
}
```

```
[
  {
    "actionName":"sendConversationMessages",
    "errors":null,
    "isSuccess":true,
    "outputValues":{
 "messageIdentifiers":"c581098c-5db6-4ed8-915f-c9aaa016c671,d8e1990e-5d67-414c-9713-180107d7d1bb",
"requestId":"1srM000000000p"
    }
  }
]
```
