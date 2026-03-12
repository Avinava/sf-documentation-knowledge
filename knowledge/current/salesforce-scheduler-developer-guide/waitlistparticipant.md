---
title: "WaitlistParticipant"
domain: salesforce-scheduler-developer-guide
topic: waitlistparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.886Z
estimatedTokens: 1029
keywords: [WaitlistParticipant, customer, added, waitlist, API, version, 58.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# WaitlistParticipant

> Represents a customer who is added to a waitlist. This object is
      available in API version 58.0 and later.

# WaitlistParticipant

Represents a customer who is added to a waitlist. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Salesforce Scheduler must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AcceptanceTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time the service resource accepts the appointment request of the waitlist participant. This field is available in API version 59.0 and later. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the waitlist participant. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the waitlist participant record was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the waitlist participant record was last viewed. |
| ParticipantId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the participant that's associated as a parent for the service appointment.This field is a polymorphic relationship field.Relationship NameParticipantRelationship TypeLookupRefers ToAccount, Contact, Lead |
| RelatedRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is a relationship field.Relationship NameRelatedRequestRefers ToClinicalServiceRequest |
| ParticipantIdentifier | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe alphanumeric unique identifier of the participant in a waitlist. For example, D101, E63, A5015 |
| ServiceAppointmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the service appointment that’s related to the waitlist participant.This field is a relationship field.Relationship NameServiceAppointmentRelationship TypeLookupRefers ToServiceAppointment |
| ServiceResourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the service resource that’s related to the service appointment for the waitlist participant.This field is a relationship field.Relationship NameServiceResourceRelationship TypeLookupRefers ToServiceResource |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is a relationship field.Relationship NameServiceTerritoryRefers ToServiceTerritory |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of waitlist participant.Possible values are:Assigned - Assigned to a service resource.Unassigned - Waiting to be assigned.The default value is Unassigned. |
| WaitlistId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the Waitlist that’s related to the participant.This field is a relationship field.Relationship NameWaitlistRelationship TypeLookupRefers ToWaitlist |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the work type that's associated with the service appointment.This field is a relationship field.Relationship NameWorkTypeRelationship TypeLookupRefers ToWorkType |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WaitlistParticipantFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_feed.htm " HTML (New Window)")

Feed tracking is available for the object.

[WaitlistParticipantHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_history.htm " HTML (New Window)")

History is available for tracked fields of the object.
