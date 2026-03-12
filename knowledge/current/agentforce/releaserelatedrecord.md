---
title: "ReleaseRelatedRecord"
domain: agentforce
topic: releaserelatedrecord
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:16.150Z
estimatedTokens: 394
keywords: [ReleaseRelatedRecord, relationship, release, record, incident, problem, change, API, version, 65.0, later, Calls]
---

# ReleaseRelatedRecord

> Represents the relationship between a release and a record, such as incident,
         problem, or change request. This object is available in API version 65.0 and later.

# ReleaseRelatedRecord

Represents the relationship between a release and a record, such as incident, problem, or change request. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe issue associated with a release, which can be an incident, problem, or change request.This field is a polymorphic relationship field.Relationship NameRelatedRecordRefers ToChangeRequest, Incident, Problem, Release |
| RelationshipType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the Incident, Problem, or Change (IPC) is related to a release as a source or created after the release is created.Possible values are:linked_to_release—Linked to Releasesource_of_release—Source of Release |
| ReleaseId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe parent release associated with the issue.This field is a relationship field.Relationship NameReleaseRefers ToRelease |
