---
title: "MessagingSession"
domain: object-reference
topic: messagingsession
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:12.858Z
estimatedTokens: 2444
keywords: [MessagingSession, session, Messaging, channel, API, version, 47.0, later, Calls, Usage, Associated, Objects]
---

# MessagingSession

> Represents a session on a Messaging channel. This object is
    available in API version 47.0 and later.

# MessagingSession

Represents a session on a Messaging channel. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcceptTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time when an agent accepts an incoming Messaging session. |
| AgentMessageCount | TypeintPropertiesNillableDescriptionThe number of messages sent by the agent during the session. |
| AgentType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe type of agent that is assigned to the Messaging session. Possible values are:AgentBotBotToAgent—Bot & AgentSystem—Used for triggered outbound messages |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the case associated with this Messaging session. |
| ChannelEndUserFormula | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionA concatenation of the Messaging channel and Messaging user. |
|  |  |
|  |  |
| ChannelKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier for the associated Messaging channel. |
| ChannelLocale | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe locale of the associated Messaging channel. |
| ChannelName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the associated Messaging channel. |
| ChannelType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of the associated Messaging channel. Possible values are:AlexaAppleBusinessChat—Represents Apple Messages for Business.EmbeddedMessaging—Available in API version 55.0 and later.FacebookGoogleHomeLineOmegaPhoneTextVoiceWeChatWebChatWhatsApp |
| ConversationId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the related conversation. Available in API version 55.0 and later.This field is a relationship field.Relationship NameConversationRelationship TypeLookupRefers ToConversation |
| EndedByType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionWho or what ended the enhanced messaging session. Possible values are:AgentBotEndUserSystem:The session is inactive for a while, so the session ends.An automation ends the session.The session ended because of an error. |
| EndTime | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe time when the Messaging session ended. |
| EndUserAccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the end user's account record.This is a relationship field.Relationship NameEndUserAccountRelationship TypeLookupRefers ToAccount |
| EndUserContactId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the end user's contact record.This is a relationship field.Relationship NameEndUserContactRelationship TypeLookupRefers ToContact |
| EndUserLanguage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe preferred language of the messaging user who participated in the messaging session. |
| EndUserMessageCount | TypeintPropertiesNillableDescriptionThe number of messages sent by the Messaging end user. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| LeadId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Lead associated with this Messaging session. |
| MessagingChannelId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the Messaging channel associated with this Messaging session.This is a relationship field.Relationship NameMessagingChannelRelationship TypeLookupRefers ToMessagingChannel |
| MessagingEndUserId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the Messaging end user associated with this Messaging session.This is a relationship field.Relationship NameMessagingEndUserRelationship TypeLookupRefers ToMessagingEndUser |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of this Messaging session. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the opportunity record associated with this Messaging session. |
| Origin | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe origin of this Messaging session. Possible values are:AgentInitiatedConversationClose—Messaging user deleted the conversation in Apple MessagesConversationControlLost—Third-party bot resumes control from Salesforce bot or agentHelpInboundInitiatedOptIn—Opt In Status ChangeOptOut—Opt Out Status ChangeTriggeredOutboundMessaging sessions can’t be created using Apex code. They can be created only through customer initiation or by using Process Builder, flows, or the Start Conversation action. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner associated with this Messaging session.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PreviewDetails | TypestringPropertiesNillableDescriptionThe preview shown to an agent for this Messaging session. |
| SessionKey | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe identifier for the Messaging session. |
| StartTime | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe time when the Messaging session started. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe status of the Messaging session. Possible values are:New (standard channels only)ActiveConsent (enhanced channels only)WaitingPaused (enhanced channels only)Inactive (enhanced channels only)EndedError (enhanced channels only)To learn more about these statuses, see Lifecycle of a Messaging Session in Salesforce Help. |
| TargetUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the target user associated with this Messaging session.This is a relationship field.Relationship NameTargetUserRelationship TypeLookupRefers ToUser |

## Usage

To monitor messaging session activity, report on the MessagingSession and [MessagingSessionMetrics](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_messagingsessionmetrics.htm "Represents a metric gathered about a specific enhanced messaging session, such as average agent response time. This object is available starting in October 2024 in API version 62.0 and later.") objects. MessagingSessionMetrics captures metrics about a messaging session, such as agent and end user response time. See [Report on Messaging Activity in Service Cloud](https://help.salesforce.com/s/articleView?id=service.messaging_reporting.htm&type=5&language=en_US "HTML (New Window)").

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[MessagingSessionChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

[MessagingSessionFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[MessagingSessionHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[MessagingSessionOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[MessagingSessionShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- MessagingSessionMetrics (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_messagingsessionmetrics.htm)
- MessagingSessionChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- MessagingSessionFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- MessagingSessionHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- MessagingSessionOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- MessagingSessionShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
