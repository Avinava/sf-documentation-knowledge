---
title: "AppointmentInvitee"
domain: salesforce-scheduler-developer-guide
topic: appointmentinvitee
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.630Z
estimatedTokens: 814
keywords: [AppointmentInvitee, participant, resources, creating, appointment, invitation, URL, API, version, 55.0, later, Calls, Special, Access, Rules]
---

# AppointmentInvitee

> Represents information about the participant and resources required
         for creating an appointment invitation URL. This object is available in API version
      55.0 and later.

# AppointmentInvitee

Represents information about the participant and resources required for creating an appointment invitation URL. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Salesforce Scheduler must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AppointmentInvitationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the appointment invitation.This field is a relationship field.Relationship NameAppointmentInvitationRelationship TypeLookupRefers ToAppointmentInvitation |
| IsPrimaryResource | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a service resource that's used to book an appointment is a primary resource. The default value is false. |
| IsRequiredResource | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a service resource is required to book an appointment. The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate on which the appointment invitee record was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate on which the appointment invitee record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-assigned number that identifies the appointment invitee. |
| ParticipantServiceResourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionService resource who's assigned to the appointment invitation.This field is a relationship field.Relationship NameParticipantServiceResourceRelationship TypeLookupRefers ToServiceResource |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AppointmentInviteeChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_change_event.htm "HTML (New Window)")

Change events are available for the object.

[AppointmentInviteeFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[AppointmentInviteeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[AppointmentInviteeOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[AppointmentInviteeShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
