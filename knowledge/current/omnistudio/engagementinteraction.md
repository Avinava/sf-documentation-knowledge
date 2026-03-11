---
title: "EngagementInteraction"
domain: omnistudio
topic: engagementinteraction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.953Z
keywords: [EngagementInteraction, Supported, Calls, Special, Access, Rules, Fields, Usage, Associated, Objects]
---

# EngagementInteraction

# EngagementInteraction

Represents information about an interaction between a service representative or any other specialist in an organization and the organization’s customer. Engagement interactions can be initiated through communication channels and can cover one or more topics. For example, a customer can initiate an engagement interaction by calling a service representative to inquire about an insurance claim. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| AttendeeVerificationTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time when the attendee was verified for the engagement interaction. You can manually set this time. If isAttendeeVerified is set to true, then if you don’t manually set this time, it’s set based on the current system date and time. |
| CommunicationChannel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. The communication channel through which engagement interaction occurs.Possible values are:In PersonVideo CallVoice CallWeb ChatYour Salesforce admin can define new field values or update the existing field values. |
| ContextId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the record that’s considered as the context for the engagement interaction. For example, when a customer initiates an engagement interaction by booking a service appointment for an inquiry, the service appointment is the context for that engagement interaction.This field is a polymorphic relationship field. A polymorphic field is one where the related object can be one of several different types of objects. For example, the Who relationship field of a Task can be a Contact or a Lead.Relationship NameContextRelationship TypeLookupRefers ToServiceAppointment, Visit |
| Duration | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRead-only. The duration of the engagement interaction based on the start date time and end date time. The duration is calculated when the end time is updated. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the engagement interaction ends. |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique external identifier of the engagement interaction. |
| InitiatingAttendeeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe attendee who initiated the engagement interaction.This field is a polymorphic relationship field. A polymorphic field is one where the related object can be one of several different types of objects. For example, the Who relationship field of a Task can be a Contact or a Lead.Relationship NameInitiatingAttendeeRelationship TypeLookupRefers ToAccount, Contact, Lead |
| IsAttendeeAuthenticated | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the initiating attendee of the engagement interaction has been authenticated through IVR or Web channel (true) or not (false).The default value is false. |
| IsAttendeeVerified | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the initiating attendee of the engagement interaction has been verified (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| MappedState | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the state of the engagement interaction that changes when the status of the interaction gets updated.Possible values are:CompletedInProgressNewThe default value is New. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the Engagement Interaction record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe Salesforce ID of the person who owns this engagement interaction record.This field is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| PhoneNumber | TypephonePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe phone number of the caller to get the context about the previous engagement interaction. This field is available in API version 57.0 and later. |
| Reason | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe reason for the engagement as stated by the customer or their representative during the engagement interaction. This field is available from API version 56.0 and later. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the record type object. Available in API version 62.0 and later.Relationship NameRecordTypeRefers ToRecordType |
| Sentiment | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe analyzed sentiment of the engagement interaction attendee about the engagement interaction.Possible values are:NegativeNeutralPositiveYour Salesforce admin can define new field values or update the existing field values. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRequired. The date and time when the engagement interaction starts. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the engagement interaction, which also impacts the interaction state.Possible values are:CompletedIn ProgressNewYour Salesforce admin can define new field values or update the existing field values. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of interaction that was initiated by the attendee.Possible values are:InboundOutboundYour Salesforce admin can define new field values or update the existing field values. |

## Usage

This object is used in the Verify Customer Identity and the Verify Customer Identity Base Flow flow templates.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EngagementAttendeeChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "HTML (New Window)")

[EngagementAttendeeFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

[EngagementAttendeeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")