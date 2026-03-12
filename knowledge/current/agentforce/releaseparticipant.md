---
title: "ReleaseParticipant"
domain: agentforce
topic: releaseparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:16.145Z
estimatedTokens: 352
keywords: [ReleaseParticipant, relationship, release, user, group, participates, owner, manager, API, version, 65.0, later, Calls]
---

# ReleaseParticipant

> Represents the relationship between a release and a user or group who
         participates in a release, such as an owner or a manager. This object is available in
      API version 65.0 and later.

# ReleaseParticipant

Represents the relationship between a release and a user or group who participates in a release, such as an owner or a manager. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssignedToId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe user or group assigned to participate in a release.This field is a polymorphic relationship field.Relationship NameAssignedToRefers ToGroup, User |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ReleaseId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe release to which the participant is associated.This field is a relationship field.Relationship NameReleaseRefers ToRelease |
| Role | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the role of a user or a group in a release, such as an owner or a manager.Possible values are:MemberOwner |
