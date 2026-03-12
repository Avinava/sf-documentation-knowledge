---
title: "VoiceCall"
domain: object-reference
topic: voicecall
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.196Z
estimatedTokens: 5085
keywords: [VoiceCall, call, Service, Cloud, Voice, Sales, Dialer, connectors, phone, over, Internet, Protocol, VoIP, API, version]
---

# VoiceCall

> Represents a call in Service Cloud Voice, Sales Dialer, or other
			supported voice connectors. For Service Cloud Voice, this can be a phone or Voice over
			Internet Protocol (VoIP) call. This object is available in API version 40.0 and
			later.

# VoiceCall

Represents a call in Service Cloud Voice, Sales Dialer, or other supported voice connectors. For Service Cloud Voice, this can be a phone or Voice over Internet Protocol (VoIP) call. This object is available in API version 40.0 and later.

To manage VoiceCall records when using Service Cloud Voice, see the [Telephony Integration REST API](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_overview.htm).

The fields in the VoiceCall object apply to the Sales Dialer and Service Cloud Voice features unless otherwise stated in the field description.

In addition to the standard fields listed in this page, you can define up to 300 custom fields for the VoiceCall object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The VoiceCall object supports implicit sharing. When a VoiceCall record is associated with a parent record via the RelatedRecordId field, users with access to the parent record inherit access to the VoiceCall. The parent record can be a supported standard object such as an Account, Case, Contact, Lead, Collection Plan, Contact Request, or Opportunity, or a custom object. This applies even if the Organization-Wide Defaults for VoiceCall is set to Private.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

Only users with the Modify All Data permission can delete call records.

To edit voice call records, Sales Dialer or Service Cloud Voice permissions are required. This includes the Dialer Outbound permission set for Sales Dialer, or the Contact Center Agent or Contact Center Admin permission sets for Service Cloud Voice, or Agentforce Contact Center Admin (Salesforce Voice) permission set.

## Fields

| Field Name | Details |
| --- | --- |
| ActivityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique ID of the activity record. Available in API version 48.0 and later.This is a relationship field.Relationship NameActivityRefers ToTask |
| AgentSentimentScore | TypedoublePropertiesFilter, Nillable, SortDescriptionIf Sentiment Journey in Service Cloud Voice is set up, this field represents the rep’s overall sentiment score post-call in a conversation event. The value must be between -5 (lowest negative sentiment score) and 5 (highest positive sentiment score), with 0 being a neutral sentiment score. Available in API version 59.0 and later. |
| CallAcceptDateTime | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionIf Service Cloud Voice is enabled, this field represents the date and time (in UTC) when an agent accepts the call. Available in API version 48.0 and later. |
| CallCenterId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionIf Service Cloud Voice is enabled, this field represents the unique ID of the call center (CallCenter Id) where the activity took place. Available in API version 48.0 and later.This is a relationship field. |
| CallConnectDateTime | TypedatetimePropertiesCreate, Filter, Nillable, SortDescriptionFor Sales Dialer, this field represents the date and time (in UTC) when the call was connected. |
| CallDisposition | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe status of the phone call.For Sales Dialer, possible values are:in progressbusyfailedFor Service Cloud Voice, possible values are:new—The voice call record has been created.in-progress—The call has been accepted (or, for outbound messages, initiated) by an agent.completed—The call has ended. This includes calls that are transferred. (If a call is transferred, another voice call record is created to track the state of the transferred call.) If After Conversation Work (ACW) is enabled, that work begins after the call completes. |
| CallDurationInSeconds | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe total duration (in seconds) of the call. |
| CallEndDateTime | TypedateTimePropertiesCreate, Filter, SortDescriptionThe date and time (in UTC) when the call ended. |
| CallerId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionFor Service Cloud Voice, this field represents the unique ID of the participant who initiated the call. If “Match Callers to End User Records” is enabled in Lightning Experience, the value is null and the EndUserId field is used instead to determine the end user associated with this voice call. Available in API version 48.0 and later.This is a relationship field.Relationship NameCallerRelationship TypeLookupRefer ToConversationParticipant |
| CallerIdType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionFor Sales Dialer, this field represents the number displayed for outbound calls. Possible values are:VendorLine—User.CompanyNumber—Company.LocalPresence—Local Presence.CustomCallerId—Custom Caller ID.Available in API version 41.0 and later. |
| CallOrigin | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionInformation about how this call originated. For Service Cloud Voice, possible values are:Preview—Preview dialer.Progressive—Progressive dialer.Voicemail—Voicemail call.Available in API version 56.0 and later. |
| CallQueuedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionIf Service Cloud Voice is enabled, this field represents the date and time (in UTC) when the call was added to a queue to be routed to an agent. Available in API version 48.0 and later. |
| CallRecordingId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionFor Service Cloud Voice, this field represents the unique ID of the call recording for the voice call. An update to the CallRecordingId value is an internal process and doesn't trigger automation such as flows. Available in API version 41.0 and later.This is a relationship field.Relationship NameCallRecordingRelationship TypeLookupRefers ToVoiceCallRecording |
| CallResolution | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe resolution outcome of the call. The default value is Resolved, meaning the call has been resolved. Available in API version 48.0 and later. |
| CallStartDateTime | TypedateTimePropertiesCreate, Filter, SortDescriptionThe date and time (UTC) when the call started. |
| CallStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionFor internal use only.Available in API version 63.0 and later. |
| CallSubtype | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionFor Service Cloud Voice, this field represents the network or protocol over which the phone or Voice over Internet Protocol (VoIP) call is made. Possible values are:PSTNWebRTCAvailable in API version 62.0 and later. |
| CallType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe types of call.For Sales Dialer, possible values are:BridgeCoachInboundInternalOutboundFor Service Cloud Voice, possible values are:CallbackConsultInboundInternalCallOutboundTransfer |
| CoachingDurationInSeconds | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionFor Sales Dialer, this field represents the total duration (in seconds) of the coaching session. This field only appears if call coaching is enabled. Available in API version 41.0 and later. |
| ConferenceKey | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionFor Sales Dialer, this field represents the related conference key. This field is only available if call monitoring is enabled. Available in API version 41.0 and later. |
| ConversationId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionIf Service Cloud Voice is enabled, this field represents the unique ID of the conversation. This field is only available if call monitoring is enabled. Available in API version 48.0 and later.This is a relationship field.Relationship NameConversationRelationship TypeLookupRefers ToConversation |
| CurrencyCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionFor Sales Dialer, this field represents the ISO currency code used to bill the call. |
| CustomerHoldDuration | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionIf Service Cloud Voice is enabled, this field represents the total duration (in seconds) of all the holds that occurred during the voice call. Available in API version 49.0 and later. |
| CustomerSentimentScore | TypedoublePropertiesFilter, Nillable, SortDescriptionIf Sentiment Journey in Service Cloud Voice is set up, this field represents the customer’s overall sentiment score post-call in a conversation event. The value must be between -5 (lowest negative sentiment score) and 5 (highest positive sentiment score), with 0 being a neutral sentiment score. Available in API version 59.0 and later. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionIf Service Cloud Voice is enabled, this field represents a text field where the agent can enter a summary of the call. Available in API version 48.0 and later. |
| DisconnectReason | TypestringPropertiesCreate, Filter, Group, NillableDescriptionIf Service Cloud Voice is enabled, this field represents the reason why the voice call was disconnected. The reason is provided by the partner telephony. For Amazon Connect instances, this value is automatically populated through the contact record if you have Contact Center version 13.0 or later. See DisconnectReason in the Amazon Connect contact records data model page for a list of possible reasons why a voice call may be disconnected. For all other partner telephony models, configure this feature through the disconnectReason parameter in the Update a Voice Call Record Telephony Integration API. Available in API version 59.0 and later. |
| EndUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionFor Service Cloud Voice, if “Match Callers to End User Records” is enabled in Lightning Experience, this field represents the unique ID of the messaging end user (MessagingEndUser ID) associated with this voice call. Available in API version 53.0 and later.This is a relationship field.Relationship NameEndUserRelationship TypeLookupRefers ToMessagingEndUser |
| FromPhoneNumber | TypephonePropertiesCreate, Filter, Group, SortDescriptionThe number of the user who initiated the call. |
| IsDiarizationOptIn | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether optimal speaker separation (diarization) is opted in (true) or not (false) for the call. |
| IsRecorded | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether a Voice Call Recording record was created (true) or not (false) for this voice call. The default value is false. Available in API version 44.0 and later. |
| IvrDuration | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTotal duration, in seconds, that a caller spends in the Interactive Voice Response (IVR) system. The duration includes time spent on automated prompts and responses before being placed in a queue or connected to a service rep. This field is available in API version 66.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time (in UTC) when the current user last viewed a record related to this voice call. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time (in UTC) when the current user last viewed this voice call. If the record has not been viewed before, this value is null. Referencing a record (LastReferencedDate) doesn’t count as viewing it. |
| LongestHoldDuration | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionIf Service Cloud Voice is enabled, this field represents the longest hold duration (in seconds) that occurred during the call. Available in API version 49.0 and later. |
| MediaProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe unique ID of the related media provider. Available in API version 49.0 and later.This is a relationship field.Relationship NameMediaProviderRelationship TypeLookupRefers ToCallCoachingMediaProvider |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the voice call record. For example, VC-00000001. Available in API version 60.0 and later. |
| NextCallId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionIf Service Cloud Voice is enabled, this field represents the unique ID of the next call if the call was transferred to another agent. If there is no other agent, this value is null. Available in API version 48.0 and later.This is a relationship field.Relationship NameNextCallRelationship TypeLookupRefers ToVoiceCall |
| NumberOfHolds | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionIf Service Cloud Voice is enabled, this field represents the number of times the customer was put on hold. Available in API version 49.0 and later. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe unique ID of the user who owns the voice call record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PreviousCallId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionIf Service Cloud Voice is enabled, this field represents the unique ID of the previous call if the call was transferred from another agent. When there is no previous call, this value is null. Available in API version 48.0 and later.This is a relationship field.Relationship NamePreviousCallRelationship TypeLookupRefers ToVoiceCall |
| Price | TypedoublePropertiesCreate, Filter, Nillable, SortDescriptionFor Sales Dialer, this field represents the cost of the phone call. |
| QualityScore | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIf Service Cloud Voice is enabled, this field represents the value of the Mean Opinion Score (MOS) that measures voice call quality. This algorithm is based on packet loss percentage, average latency, and average jitter. Available in API version 53.0 and later. |
| QueueName | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionIf Service Cloud Voice is enabled, this field represents the name of the agent queue. Available in API version 49.0 and later. |
| RecipientId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionFor Service Cloud Voice, this field represents the unique ID of the participant who received the call. If “Match Callers to End User Records” is enabled in Lightning Experience, this value is null and the EndUserId field is used instead to determine the end user associated with this voice call.This is a relationship field.Relationship NameRecipientRelationship TypeLookupRefers ToConversationParticipant |
| RecordyTypeId | TypereferencePropertiesCreate, Filter, Nillable, UpdatesDescriptionThe ID of the voice call record type assigned to this voice call. If a record type isn't assigned to this voice call, the value is null. Available in API version 59.0 and later.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique ID of the related record. Associates the VoiceCall record to a standard or custom object record. For Service Cloud Voice, supported related records include the standard objects Account, Case, Collection Plan, Contact, Contact Request, Lead, and Opportunity. For Sales Dialer, supported related records include custom objects.This is a polymorphic relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToAccount, Case, CollectionPlan, Contact, ContactRequest, Lead, Opportunity |
| SourceType | TypepicklistPropertiesCreate, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe general purpose of the call. The permission sets assigned to the voice call owner determine the value. A call’s source type controls which insights Einstein Conversation Insights applies during analysis.Possible values are:SalesServiceAvailable in API version 52.0 and later. |
| ToPhoneNumber | TypephonePropertiesCreate, Filter, Group, SortDescriptionThe recipient of the call. For inbound, transfer, and callback calls, this value is the agent's number. For outbound calls, this value is the customer's number. |
| TranscribedLanguage | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe language that is transcribed for this voice call. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe unique ID of the Salesforce user who initiates an outbound call or accepts an inbound call. If no one takes the call, this value defaults to null.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
| VendorCallKey | TypestringPropertiesCreate, Filter, Group, Nillable, idLookup, SortDescriptionThe unique ID of the child leg of the call that’s provided by the Sales Dialer vendor or Service Cloud Voice telephony provider. |
| VendorParentCallKey | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionFor Sales Dialer, this field represents the unique ID of the parent leg of the call that’s provided by the Dialer vendor. |
| VendorType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionFor Sales Dialer, this field represents the type of Dialer vendor. For Service Cloud Voice, this field is always set to ContactCenter. Available in API version 41.0 and later. |
| VoiceVendorLineId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionFor Sales Dialer, this field represents the unique ID of the associated Dialer vendor line.This is a relationship field.Relationship NameVoiceVendorLineRelationship TypeLookupRefers ToVoiceVendorLine |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[VoiceCallChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (Available in API version 48.0 and later)

Change events are available for the object.

[VoiceCallFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.") (Available in API version 50.0 and later.)

Feed tracking is available for the object.

[VoiceCallOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[VoiceCallShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- VoiceCallChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- VoiceCallFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- VoiceCallOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- VoiceCallShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
