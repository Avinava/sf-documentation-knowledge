---
title: "EngagementTopic"
domain: mfg-api-devguide
topic: engagementtopic
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.714Z
estimatedTokens: 1382
keywords: [EngagementTopic, topics, discussed, customer, attendees, engagement, initiates, interaction, calling, service, representative, inquire, insurance, claim, topic]
---

# EngagementTopic

> Represents information about the
         topics discussed by a customer and other attendees during an engagement. For example, when
         a customer initiates an engagement interaction by calling a service representative to
         inquire about an insurance claim, the topic of the engagement is Claim. This object is
      available in API version 55.0 and later.

# EngagementTopic

Represents information about the topics discussed by a customer and other attendees during an engagement. For example, when a customer initiates an engagement interaction by calling a service representative to inquire about an insurance claim, the topic of the engagement is Claim. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

The Manufacturing Cloud permission set license is required to use this object.

## Fields

| Field | Details |
| --- | --- |
| EngagementId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe engagement interaction, messaging session, or voice call record that’s related to the topic discussed during the engagement.This field is a relationship field.Relationship NameEngagementRelationship TypeLookupRefers ToEngagementInteraction, MessagingSession, VoiceCall |
| InteractionSummary | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe summary of the engagement interaction. This field is available in API version 56.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the engagement topic record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe Salesforce ID of the person who owns this engagement topic record.This field is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| ParentTopicId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent engagement topic record that’s associated with this engagement topic.This field is a relationship field.Relationship NameParentTopicRelationship TypeLookupRefers ToEngagementTopic |
| ProcessFailureReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the reason the process failed during the engagement interaction. The source is selected from a picklist of available values, which are set by your Salesforce administrator. |
| ProcessName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the process executed during the engagement interaction. |
| ProcessStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the current status of the process that’s executed during the engagement interaction.Possible values are:CancelledCompletedFailedInitiatedYour Salesforce administrator can define new or update the existing field values. |
| ProcessType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of the process executed during the engagement interaction.Possible values are:FlowOmniScriptQuickAction |
| RelatedPersonId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person for whom the engagement interaction has been initiated.This field is a polymorphic relationship field. A polymorphic field is one where the related object might be one of several different types of objects. For example, the Who relationship field of a Task can be a Contact or a Lead.Relationship NameRelatedPersonRelationship TypeLookupRefers ToAccount, Contact, Lead |
| TopicId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe engagement topic record that’s associated with the parent engagement topic.This field is a polymorphic relationship field. A polymorphic field is one where the related object might be one of several different types of objects. For example, the Who relationship field of a Task can be a Contact or a Lead.Relationship NameTopicRelationship TypeLookupRefers ToAsset, Case, Claim, LoyaltyMemberTier, LoyaltyProgramMember, Opportunity, Order, ServiceAppointment, Voucher, TransactionJournal, and custom object |

## Usage

This object is used in the Verify Customer Identity and the Verify Customer Identity Base Flow flow templates.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EngagementTopicChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[EngagementTopicFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[EngagementTopicHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
