---
title: "Program"
domain: eu-developer-guide
topic: program
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.337Z
estimatedTokens: 1805
keywords: [Program, enrollment, disbursement, benefits, API, version, 57.0, later, Calls, Associated, Objects]
---

# Program

> Represents information about the enrollment and disbursement of
         benefits in a program. This object is available in API version 57.0 and
      later.

# Program

Represents information about the enrollment and disbursement of benefits in a program. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActiveEnrolleeCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe count of program enrollees in Active status. This field is accessible if you enabled Data Protection and Privacy in Setup. |
| AdditionalContext | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe additional context about the program. This field is accessible if you enabled Data Protection and Privacy in Setup. |
| ApplicationFormTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Application Form Template associated with the program.This field is a relationship field.Relationship NameApplicationFormTemplateRelationship TypeLookupRefers ToApplicationFormTemplate |
| BusinessSector | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the business sector for the program.Possible values are:C&ILow IncomeResidential |
| EffectiveYear | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe year the program becomes effective. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the program is active.The default value is false. |
| IsRegulatoryProgram | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the program is a regulatory program.The default value is false. |
| ProgramDeliveryType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies if the program is delivered upstream, midstream, or downstream.Possible values are:DownstreamMidstreamUpstream |
| ProgramManagerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe program manager for the program.This field is a relationship field.Relationship NameProgramManagerRelationship TypeLookupRefers ToUser |
| ProgramType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of program.Possible values are:ElectrificationEnergy EfficiencyFleet ElectrificationGasification ProgramsLow Income Programs |
| RegulatoryProgramName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the regulatory program. |
| ShortForm | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe abbreviation of the program |
| Stakeholder | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the stakeholders for the program.Possible values are:C&IResidential |
| CurrentMonthDisbCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe count of benefit that's disbursed in the current month. This field is accessible if you enabled Data Protection and Privacy in Setup. |
| CurrentYearDisbCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe count of benefit that's disbursed in the current year. This field is accessible if you enabled Data Protection and Privacy in Setup. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the program ends. This field is accessible if you enabled Data Protection and Privacy in Setup. |
| EnrollmentCompletedCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe count of program enrollees in Completed status. This field is accessible if you enabled Data Protection and Privacy in Setup. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the program. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns the object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PreviousMonthDisbCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe count of benefit that's disbursed in the previous month. This field is accessible if you enabled Data Protection and Privacy in Setup. |
| PreviousYearDisbCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe count of benefit that's disbursed in the previous year. This field is accessible if you enabled Data Protection and Privacy in Setup. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the program begins. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the program.Possible values are:ActiveCancelledCompletedPlannedThis field is accessible if you enabled Data Protection and Privacy in Setup. |
| Summary | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe summary of the program. This field is accessible if you enabled Data Protection and Privacy in Setup. |
| TotalEnrolleeCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total enrollee count in the program. This field is accessible if you enabled Data Protection and Privacy in Setup. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage type of the program.Possible value is:ProgramManagementThis field is accessible if you enabled Data Protection and Privacy in Setup. |
| DefaultImageComment | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe comments about the default image that's associated with the program. |
| DefaultImageUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe URL of the default image that's associated with the program. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProgramFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ProgramHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ProgramOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

Sharing rules are available for the object.
