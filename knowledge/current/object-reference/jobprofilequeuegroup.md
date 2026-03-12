---
title: "JobProfileQueueGroup"
domain: object-reference
topic: jobprofilequeuegroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.382Z
estimatedTokens: 541
keywords: [JobProfileQueueGroup, mapping, Queue, JobProfile, configurations, capacity, plans, Workforce, Engagement, API, version, 53.0, later, Calls, Special]
---

# JobProfileQueueGroup

> JobProfileQueueGroup defines the mapping between Queue and JobProfile and
         configurations for capacity plans in Workforce Engagement. This object is available in
      API version 53.0 and later.

# JobProfileQueueGroup

JobProfileQueueGroup defines the mapping between Queue and JobProfile and configurations for capacity plans in Workforce Engagement. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Org must have the Workforce Engagement, Workforce Engagement Configuration, and Omni org preferences enabled. User must have the Workforce Engagement Analyst or Planner user permission set.

## Fields

| Field | Details |
| --- | --- |
| AnswerTime | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe answer time (in seconds) for a specific group. |
| CapacityPerJobProfile | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe max number of work units that an agent can handle for a specific job profile. |
| GroupCapacity | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe distributed number of work units among groups to which a specific job profile is associated. |
| GroupId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionIdentifies the group or queue record.This is a relationship field.Relationship NameGroupRelationship TypeLookupRefers ToGroup |
| JobProfileId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionIdentifies the job profile record.This is a relationship field.Relationship NameJobProfileRelationship TypeLookupRefers ToJobProfile |
| JobProfileShrinkage | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe shrinkage for a specific job profile. |
| Priority | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe priority of a group per job profile. |
| ServiceLevelAgreementPerc | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe expected SLA percentage for a specific group. |
| WorkType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionA type of group, indicating whether a queue is synchronous or asynchronous.Possible values are:A—AsyncS—SyncThe default value is 'S'. |
