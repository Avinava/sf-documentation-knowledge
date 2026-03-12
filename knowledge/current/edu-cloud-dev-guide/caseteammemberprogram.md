---
title: "CaseTeamMemberProgram"
domain: edu-cloud-dev-guide
topic: caseteammemberprogram
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.985Z
estimatedTokens: 456
keywords: [CaseTeamMemberProgram, mapping, Case, Team, Member, Program, API, version, 59.0, later, Calls]
---

# CaseTeamMemberProgram

> Represents mapping information between Case Team Member and Program.
      This object is available in API version 59.0 and later.

# CaseTeamMemberProgram

Represents mapping information between Case Team Member and Program. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CaseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe case that's associated with the case team member.This field is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| CaseTeamMember | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe case team member that is mapped to one or more programs. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the case team member program record. |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe program that is mapped to case team members.This field is a relationship field.Relationship NameProgramRelationship TypeLookupRefers ToProgram |
