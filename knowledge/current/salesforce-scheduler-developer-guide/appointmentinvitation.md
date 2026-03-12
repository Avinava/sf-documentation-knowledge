---
title: "AppointmentInvitation"
domain: salesforce-scheduler-developer-guide
topic: appointmentinvitation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.623Z
estimatedTokens: 1390
keywords: [AppointmentInvitation, appointment, invitation, that’s, created, customers, booking, appointments, API, version, 55.0, later, Calls, Special, Access]
---

# AppointmentInvitation

> Represents information about an appointment invitation that’s created
         for customers who can use it for booking appointments. This object is available in API
      version 55.0 and
      later.

# AppointmentInvitation

Represents information about an appointment invitation that’s created for customers who can use it for booking appointments. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Salesforce Scheduler must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AppointmentTopicId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionAppointment topic that's associated with this invitation.This field is a polymorphic relationship field.Relationship NameAppointmentTopicRelationship TypeLookupRefers ToWorkType, WorkTypeGroup |
| AppointmentTopicType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionType of appointment topic that's related to this invitation. For example, work type or work type group. |
| AppointmentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, SortDescriptionAppointment type for the appointment invitation. This field is available in API version 57.0 and later.Recommended values are:groups—Groupresource_territory—In Personphone_portrait—Phonevideo—Video callSalesforce Scheduler verifies whether the API name of a picklist value matches the name of a utility icon that Lightning Design System provides. If the names match, Salesforce Scheduler uses the icon with the same name. If the names don't match, Salesforce Scheduler uses the default groups icon. |
| BookingEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate until which an appointment can be booked by using the appointment invitation URL. |
| BookingStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate from which an appointment can be booked by using the appointment invitation URL.Default value: current date. |
| EngagementChannelTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionEngagement channel type for the appointment invitation. For example, users can choose video call as the engagement channel type when they create an appointment invitation. This field is available in API version 57.0 and later.This field is a relationship field.Relationship NameEngagementChannelTypeRelationship TypeLookupRefers ToEngagementChannelType |
| InvitationIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionInvitation URL identifier that’s used to book an appointment in a flow. |
| InvitationNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-assigned number that identifies the appointment invitation. |
| InvitationUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, SortDescriptionAppointment invitation URL that’s shared with users to book appointments. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the invitation URL is available for a customer to book an appointment.The default value is true. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate on which the appointment invitation was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate on which the appointment invitation was last viewed. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionOwner of the appointment invitation.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionService territory that's associated with the appointment invitation.This field is a relationship field.Relationship NameServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
| UrlExpiryDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionExpiration date of the appointment invitation URL. |

## Usage

An appointment invitation can show the availability of one or more resources represented in the Appointment Invitee object.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AppointmentInvitationChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_change_event.htm "HTML (New Window)")

Change events are available for the object.

[AppointmentInvitationFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[AppointmentInvitationHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[AppointmentInvitationOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[AppointmentInvitationShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
