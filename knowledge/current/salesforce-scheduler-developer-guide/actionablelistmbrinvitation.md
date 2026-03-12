---
title: "ActionableListMbrInvitation"
domain: salesforce-scheduler-developer-guide
topic: actionablelistmbrinvitation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.599Z
estimatedTokens: 661
keywords: [ActionableListMbrInvitation, relationship, Actionable, Member, Appointment, Invitation, API, version, 59.0, later, Calls, Special, Access, Rules, Associated]
---

# ActionableListMbrInvitation

> Represents a relationship between an Actionable List Member and an
         Appointment Invitation. This object is available in API version 59.0 and
      later.

# ActionableListMbrInvitation

Represents a relationship between an Actionable List Member and an Appointment Invitation. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Salesforce Scheduler must be enabled.

## Fields

| Field | Details |
| --- | --- |
| ActionableListMemberId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the actionable list member that’s associated with the actionable list member invitation record.This field is a relationship field.Relationship NameActionableListMemberRelationship TypeLookupRefers ToActionableListMember |
| AppointmentInvitationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the appointment invitation that’s associated with the actionable list member invitation record.This field is a relationship field.Relationship NameAppointmentInvitationRelationship TypeLookupRefers ToAppointmentInvitation |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the current user last viewed a related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-assigned number that identifies the actionable list member invitation record. |
| ServiceAppointmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the service appointment that’s associated with the actionable list member invitation.This field is a relationship field.Relationship NameServiceAppointmentRelationship TypeLookupRefers ToServiceAppointment |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ActionableListMbrInvitationFeed](https://developer.salesforce.com/docs/atlas.en-us.244.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm " HTML (New Window)")

Feed tracking is available for the object.

[ActionableListMbrInvitationHistory](https://developer.salesforce.com/docs/atlas.en-us.244.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm " HTML (New Window)")

History is available for tracked fields of the object.
