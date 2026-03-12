---
title: "CarePgmTeamMbrRolePeriod"
domain: life-sciences-dev-guide
topic: carepgmteammbrroleperiod
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.310Z
estimatedTokens: 473
keywords: [CarePgmTeamMbrRolePeriod, historical, changes, role, care, program, team, member, API, version, 61.0, later, Calls]
---

# CarePgmTeamMbrRolePeriod

> Represents the historical changes in the role of a care program team
         member. This object is available in API version 61.0 and later.

# CarePgmTeamMbrRolePeriod

Represents the historical changes in the role of a care program team member. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CareProgramTeamMemberId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent care program team member associated with the role.This field is a relationship field.Relationship NameCareProgramTeamMemberRelationship TypeMaster-detailRefers ToCareProgramTeamMember (the master object) |
| EffectiveEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time until when the team member is assigned the role. |
| EffectiveStartDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the team member was assigned the role. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the care program team member role period. |
| Role | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the role of the care program team member.Possible values are:CollaboratorContact-GeneralContact-RecruitmentFunding SourcePrimary InvestigatorSponsorSponsor-InvestigatorSponsor-LeadStudy-ChairStudy-DirectorSubinvestigator |
