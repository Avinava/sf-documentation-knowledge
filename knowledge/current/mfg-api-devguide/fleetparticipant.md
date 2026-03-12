---
title: "FleetParticipant"
domain: mfg-api-devguide
topic: fleetparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.737Z
estimatedTokens: 517
keywords: [FleetParticipant, relationship, fleet, participant, account, contact, user, API, version, 59.0, later, Calls]
---

# FleetParticipant

> Represents the relationship between a fleet and a participant, such as an
         account, a contact, or a user. This object is available in API version 59.0 and
      later.

# FleetParticipant

Represents the relationship between a fleet and a participant, such as an account, a contact, or a user. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when a participant is associated with a fleet. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when a participant is associated with a fleet. |
| FleetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe fleet associated with the Fleet Participant record.This field is a relationship field.Relationship NameFleetRelationship TypeLookupRefers ToFleet |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe autopopulated name of a Fleet Participant record. |
| ParticipantId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe participant associated with a Fleet, such as an account, a user, or a contact.This field is a polymorphic relationship field.Relationship NameParticipantRelationship TypeLookupRefers ToAccount, Contact, User |
| ParticipantRole | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe role of a participant associated with a fleet.Possible values are:DriverMaintenance AssociateManagerOperations Manager |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the status of the participant in relation to a fleet.Possible values are:ActiveInactiveResigned |
