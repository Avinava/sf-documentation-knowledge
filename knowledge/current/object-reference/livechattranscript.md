---
title: "LiveChatTranscript"
domain: object-reference
topic: livechattranscript
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.407Z
estimatedTokens: 2335
keywords: [LiveChatTranscript, automatically, created, Live, Agent, chat, session, stores, API, version, 24.0, later, Calls, Usage, Associated]
---

# LiveChatTranscript

> This object is automatically created for each Live Agent chat session
   and stores information about the session. This object is available in API version 24.0 and
  later.

# LiveChatTranscript

This object is automatically created for each Live Agent chat session and stores information about the session. This object is available in API version 24.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| Abandoned | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe amount of time in seconds an incoming chat request remained unanswered by an agent before the chat was disconnected by the customer. |
| AccountId | TypeIDPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the account associated with the chat transcript. |
| AverageResponseTimeOperator | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe agent’s average response time (in seconds) to chat messages from the visitor. |
| AverageResponseTimeVisitor | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe visitor’s average response time (in seconds) to chat messages from the agent. |
| Body | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe contents of the chat. |
| Browser | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe browser the visitor used for the chat. |
| BrowserLanguage | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe language of the visitor’s browser. |
| CaseID | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the case associated with the chat transcript. |
| ChatDuration | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total duration of the chat in seconds. |
| ChatKey | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, SortDescriptionThe session ID of the chat before it is persisted. ChatKey can be used with advanced integrations in the Salesforce console. This field is available in API version 25.0 and later. |
| ContactID | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the contact associated with the chat transcript. |
| EndedBy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe way the chat was ended: by the operator, the visitor, or the system. |
| EndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time the chat ended. |
| IpAddress | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe auto-populated visitor’s IP address. Do not edit. Create a custom field if you need an IP address field for your use case. |
| IsChatbotSession | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionWhether the visitor is chatting with a chatbot (true) or not (false). |
| LastReferencedDate | TypedatePropertiesFilter, Nillable, Sort, UpdateDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedatePropertiesFilter, Nillable, Sort, UpdateDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| LeadID | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the lead associated with the chat transcript. |
| LiveChatButtonID | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the LiveChatButton the chat session originated from. |
| LiveChatDeploymentID | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the LiveChatDeployment the chat session originated from. |
| LiveChatVisitorID | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the visitor associated with the chat transcript. |
| Location | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe auto-populated best-guess approximation of the visitor’s location. Do not edit. |
| MaxResponseTimeOperator | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe maximum time in seconds it took an agent to respond to a chat visitor’s message. |
| MaxResponseTimeVisitor | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe maximum time in seconds it took a customer to respond to an agent’s message. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the transcript. |
| OperatorMessageCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of messages sent by one or more agents during the chat. |
| OwnerID | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the operator who participated in the chat last; for missed chats, this is a system user. |
| Platform | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe visitor’s operating system platform. |
| ReferrerUri | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe auto-populated URI where the chat request originated. Do not edit. |
| RequestTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time the visitor requested the chat. |
| ScreenResolution | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe visitor’s screen resolution. |
| SkillId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe auto-populated record ID of the primary Skill associated with the LiveChatButton the chat session originated from. Do not edit. To associate multiple skills with a LiveChatTranscript, use LiveChatTranscriptSkill junction objects. |
| StartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time the chat started. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe final status of the chat: completed, missed, or blocked. |
| SupervisorTranscriptBody | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe text body of the supervisor’s chat transcript. |
| UserAgent | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe visitor’s user agent string. |
| VisitorMessageCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of messages sent by the visitor during the chat. |
| VisitorNetwork | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe network or service provider the chat visitor used for the chat. |
| WaitTime | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total amount of time in seconds a chat request was waiting to be accepted by an agent. |

## Usage

Use this object to query and manage live chat transcripts.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LiveChatTranscriptChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 44.0)

Change events are available for the object.

[LiveChatTranscriptFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.") (API version 47.0)

Feed tracking is available for the object.

[LiveChatTranscriptHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[LiveChatTranscriptOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API version 29.0)

Sharing rules are available for the object.

[LiveChatTranscriptShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LiveChatTranscriptChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- LiveChatTranscriptFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- LiveChatTranscriptHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- LiveChatTranscriptOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- LiveChatTranscriptShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
