---
title: "ProgramCohortMember"
domain: psc-api
topic: programcohortmember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:32.369Z
estimatedTokens: 1090
keywords: [ProgramCohortMember, program, enrollees, part, cohort, API, version, 61.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# ProgramCohortMember

> Represents program enrollees that are part of a given cohort. This
      object is available in API version 61.0 and later.

# ProgramCohortMember

Represents program enrollees that are part of a given cohort. This object is available in API version 61.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=psc_api)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Advanced Program Management license is enabled, Program Cohorts are enabled, and the Advanced Program Management system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| IsRemovedFromCohort | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the program cohort member was removed from the cohort.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the program cohort member. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProgramCohortId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe program cohort associated with the program cohort member.This field is a relationship field.Relationship NameProgramCohortRelationship TypeMaster-detailRefers ToProgramCohort (the master object) |
| ProgramEnrolleeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe account or contact enrolled in the program.This field is a polymorphic relationship field.This field is a calculated field.Relationship NameProgramEnrolleeRelationship TypeLookupRefers ToAccount, Contact |
| ProgramEnrollmentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe program enrollment associated with the program cohort member.This field is a relationship field.Relationship NameProgramEnrollmentRelationship TypeLookupRefers ToProgramEnrollment |
| ProgramEnrollmentStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the status of the program enrollment associated with this cohort member.This field is a calculated field.Possible values are:AppliedCompletedDeniedIn ProgressWaitlistedWithdrawnThe default value is Applied. |
| RemovalDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the program cohort member was removed from the cohort. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProgramCohortMemberFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[ProgramCohortMemberHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[ProgramCohortMemberOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ProgramCohortMemberShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
