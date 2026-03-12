---
title: "ConvMessageSendRequest"
domain: object-reference
topic: convmessagesendrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:07.485Z
estimatedTokens: 1959
keywords: [ConvMessageSendRequest, send, template-based, messaging, component, series, users, enhanced, channel, In-App, API, version, 60.0, later, Calls]
---

# ConvMessageSendRequest

> Represents a request to send a template-based messaging component to a series
         of messaging users in an enhanced messaging channel or Messaging for In-App. This
      object is available in API version 60.0 and later.

# ConvMessageSendRequest

Represents a request to send a template-based messaging component to a series of messaging users in an enhanced messaging channel or Messaging for In-App. This object is available in API version 60.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Messaging and its associated objects are available only in Enterprise, Unlimited, and Developer Editions for Service Cloud or Sales Cloud with the Digital Engagement add-on license.

## Fields

| Field | Details |
| --- | --- |
| AllowExistingSessionStatus | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionIndicates whether the message can be sent only at certain times.Possible values are:Any—Send the message regardless of whether the messaging user is engaged in an active messaging session with the business.Closed—Send the message unless the messaging user is engaged in a messaging session with a status other than Error or Ended, in which case it’s never sent.NonActive—Send the message unless the messaging user is engaged in a messaging session with a status of Active, in which case it’s never sent. |
| CommSubscriptionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the related communication subscription, if applicable. This field is a relationship field that refers to CommSubscription. |
| CompletedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when the request completes and all messages associated with the request are sent or failed to be sent. |
| FailedMessageCount | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe number of messages that failed to be delivered to a messaging user. For example, if a flow sends the message to 50 messaging users and 4 don’t receive the message, this value is 4. |
| FailedMessageErrorReasons | TypetextareaPropertiesNillableDescriptionThe error reason for each of the failed messages. For example, if 4 messages fail to send, this field shows the error reason for each failed message. |
| FailedMessageIdentifiers | TypetextareaPropertiesNillableDescriptionThe IDs of the messages that failed to send. For example, if 4 messages fail to send, this field shows 4 message IDs. |
| FailedMeuPlatformKeys | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionA list of platform keys for messaging end users with messages that failed to send. Available in API version 65.0 and later. |
| InProgressMessageCount | TypeintPropertiesDefaulted on Create, Filter, Group, SortDescriptionThe number of messages in the process of being sent. |
| InProgressMessageIdentifiers | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionA list of IDs of the messages being sent. |
| InProgressMessagingEndUserIds | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionA list of IDs of messaging end users with messages that are being sent. Available in API version 65.0 and later. |
| InProgressMessagingSessionIds | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionA list of IDs of messaging sessions with messages that are being sent. Available in API version 65.0 and later. |
| InProgressMeuPlatformKeys | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionA list of platform keys for messaging end users with messages that are being sent. Available in API version 65.0 and later. |
| MessageDefinition | TypestringPropertiesFilter, Group, SortDescriptionThe name of the messaging component being sent. Only active messaging components can be sent. |
| MessageDefinitionParameters | TypetextareaPropertiesNillableDescriptionA list of parameters used to dynamically construct the message that is being sent. Available in API version 65.0 and later. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated ID for the request that uses the format MSJ-{00000000}. |
| PendingMessageCount | TypeintPropertiesFilter, Group, SortDescriptionThe number of messages that haven’t yet been sent. |
| PendingMessageEndUserIds | TypetextareaPropertiesNillableDescriptionA list of IDs of the messaging end users with pending messages. Available in API version 65.0 and later. |
| PendingMeuPlatformKeys | TypetextareaPropertiesNillableDescriptionA list of platform keys of the messaging end users with pending messages. Available in API version 65.0 and later. |
| PendingMessageIdentifiers | TypetextareaPropertiesNillableDescriptionA list of IDs of the pending messages. |
| RequestConsentType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates whether the flow applies the consent settings of the messaging end user or the communication subscription.Possible values are:CommunicationSubscriptionMessagingEndUser |
| RequestStatus | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status of the request.Possible values are:CompletedPendingIn Progress—The system is actively trying to send the message. If a message can’t be sent, the RequestStatus returns to Pending and sending is tried again later. |
| RequestType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of request.Possible values are:SendNotificationMessages |
| SessionLongevityPreference | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates whether to end the session after the message is sent.Possible values are:KeepSessionOpen—After the flow sends the message, keep the messaging session in a New state. If the end user doesn’t respond within 48 hours, the session ends. Use this option if you expect customers to respond to automated messages and want service reps to see their response in context.EndSession—After the flow sends the message, end the messaging session. If the customer responds, a new messaging session is created and routed to your support team.KeepSessionOpenOrAppend—If there’s an existing session with the messaging end user in the New state, use that session to send the message. Otherwise, follow the behavior documented for the KeepSessionOpen option. Available in API version 65.0 and later. |
| ShouldEnforceChannelConsent | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the existing Messaging channel consent preferences are applied when determining who receives the message. Setting this value to true is the most common approach. The default value, false, allows you to add custom consent logic—for example, to customize a flow to send the message to both implicitly opted-in users and explicitly opted-in users. |
| SuccessMessageCount | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe number of messages that were successfully sent to messaging users. Delivery can occur much later than sending, depending on factors such as the connectivity status of the recipient. Delivery is reflected in the messaging session transcript. |
| SuccessMessageIdentifiers | TypetextareaPropertiesNillableDescriptionA list of IDs of the messages that were sent. |
| SuccessMeuPlatformKeys | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionA list of platform keys for messaging end users with messages that were sent. Available in API version 65.0 and later. |
| TotalMessageCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of messages that the related flow attempted to send.This field is a calculated field. |

## Usage

A ConvMessageSendRequest can be generated by a flow, Apex code, or REST API call that invokes the sendConversationMessages invocable action. Use the ConvMessageSendRequest object to query messages sent by the sendConversationMessages invocable action.
