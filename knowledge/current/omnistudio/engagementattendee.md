---
title: "EngagementAttendee"
domain: omnistudio
topic: engagementattendee
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:52.369Z
estimatedTokens: 1336
keywords: [EngagementAttendee, attendee, engagement, customer, initiates, interaction, calling, service, representative, inquire, insurance, claim, stores, API, version]
---

# EngagementAttendee

> Represents information about an
   attendee of an engagement. For example, when a customer initiates an engagement interaction by
   calling a service representative to inquire about an insurance claim, this object stores
   information about the customer and the service representative. This object is available in
  API version 55.0 and later

# EngagementAttendee

Represents information about an attendee of an engagement. For example, when a customer initiates an engagement interaction by calling a service representative to inquire about an insurance claim, this object stores information about the customer and the service representative. This object is available in API version 55.0 and later

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the engagement with the attendee ends. |
| EngagementId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The engagement interaction, messaging session, or voice call that’s related to the attendee.This field is a relationship field.Relationship NameEngagementRelationship TypeLookupRefers ToEngagementInteraction, MessagingSession, VoiceCall |
| ExternalAttendeeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external user related to the engagement, such as the customer or partner. To avoid an error, either this field or the InternalAttendeeId field must have a value.This field is a polymorphic relationship field. A polymorphic field is one where the related object might be one of several different types of objects. For example, the Who relationship field of a Task can be a Contact or a Lead.Relationship NameExternalAttendeeRelationship TypeLookupRefers ToAccount, Contact, Lead |
| InternalAttendeeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe internal user related to the engagement, such as the call center agent. To avoid an error, either this field or the ExternalAttendeeId field must have a value.This field is a relationship field.Relationship NameInternalAttendeeRelationship TypeLookupRefers ToUser |
| IsAuthenticated | TypebooleanPropertiesCreate, Defaulted on Create, Filter, Group, Sort, UpdateDescriptionIndicates whether the initiating attendee of the engagement interaction was authenticated through interactive voice response (IVR) or Web channel (true) or not (false). The default value is false.This field is available in API version 56.0 and later. |
| IsVerified | TypebooleanPropertiesCreate, Defaulted on Create, Filter, Group, Sort, UpdateDescriptionIndicates whether the initiating attendee of the engagement interaction was verified (true) or not (false). The default value is false.This field is available in API version 56.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the Engagement Attendee record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe Salesforce ID of the person who owns this engagement attendee record.This field is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the record type object. Available in API version 65.0 and later.Relationship NameRecordTypeRefers ToRecordType |
| Role | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe role of an engagement attendee. This field is available in API version 56.0 and later.Possible values are:OnBehalfSelf |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRequired. The date and time when the engagement with the attendee starts. |
| VerificationTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time when the attendee was verified for the engagement interaction. This field is available in API version 56.0 and later. |

## Usage

This object is used in the Verify Customer Identity and the Verify Customer Identity Base Flow flow templates.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EngagementAttendeeChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "HTML (New Window)")

[EngagementAttendeeFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

[EngagementAttendeeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")
