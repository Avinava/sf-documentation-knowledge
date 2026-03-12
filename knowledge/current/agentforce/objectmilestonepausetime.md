---
title: "ObjectMilestonePauseTime"
domain: agentforce
topic: objectmilestonepausetime
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:16.112Z
estimatedTokens: 313
keywords: [ObjectMilestonePauseTime, duration, start, end, times, users, pause, resume, milestones, specific, API, version, 65.0, later, Calls]
---

# ObjectMilestonePauseTime

> Represents the details related to the duration, start and end times of when
         users pause and resume milestones for a specific object. This object is available in
      API version 65.0 and later.

# ObjectMilestonePauseTime

Represents the details related to the duration, start and end times of when users pause and resume milestones for a specific object. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EntityMilestoneId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe entity milestone that is paused by a user.This field is a relationship field.Relationship NameEntityMilestoneRelationship TypeMaster-detailRefers ToEntityMilestone (the master object) |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| PauseDurationInSecs | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe duration for which an entity milestone is paused calculated in minutes. |
| PauseEndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time at which a user unpauses an entity milestone. |
| PauseStartTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe time at which a user pauses an entity milestone. |
