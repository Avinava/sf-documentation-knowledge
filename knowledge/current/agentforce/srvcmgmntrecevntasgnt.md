---
title: "SrvcMgmntRecEvntAsgnt"
domain: agentforce
topic: srvcmgmntrecevntasgnt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:08:17.952Z
keywords: [SrvcMgmntRecEvntAsgnt, Supported, Calls, Fields]
---

# SrvcMgmntRecEvntAsgnt

# SrvcMgmntRecEvntAsgnt

Represents the relationship between events automatically created by the system and assigned to a related record, such as a release or a change request. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| EventId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe event automatically generated for a service management record.This field is a relationship field.Relationship NameEventRefers ToEvent |
| EventType | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe user-defined event type for which events for a specific reference record are created.Possible values are:CallEmailMeetingOther |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescription |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ReferenceRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe service management record for which an event is automatically generated.This field is a polymorphic relationship field.Relationship NameReferenceRecordRefers ToChangeRequest, Release |
| Usage | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe usage type of the event for which a specific reference record is created.Possible values are:GeneralScheduleITSMEvent |