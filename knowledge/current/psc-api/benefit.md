---
title: "Benefit"
domain: psc-api
topic: benefit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.670Z
estimatedTokens: 1594
keywords: [Benefit, benefits, provided, sector, agencies, aim, support, citizens, their, businesses, stores, whether, financial, service-based, organizations]
---

# Benefit

> Represents the benefits provided by public sector agencies that aim to
         support citizens and their businesses. This object stores whether the benefit is for
         financial or service-based organizations.

# Benefit

Represents the benefits provided by public sector agencies that aim to support citizens and their businesses. This object stores whether the benefit is for financial or service-based organizations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BenefitManagerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person in charge of the benefit.This field is a relationship field.Relationship NameBenefitManagerRelationship TypeLookupRefers ToUser |
| BenefitStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the benefit.Possible values are:ActiveCancelledCompletedPlannedThe default value is Active. |
| BenefitTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. Specifies the type of the benefit.This field is a relationship field.Relationship NameBenefitTypeRelationship TypeLookupRefers ToBenefitType |
| BnftDisbFieldSetApiName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of the field set that groups benefit specific fields for the benefit disbursement object. |
| BudgetAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe budget assigned to the benefit. |
| CurrentMonthDisbursedQty | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of benefits disbursed in the current month. |
| CurrentYearAssignedQty | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of benefits assigned in the current year. |
| CurrentYearDisbursedQty | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of benefits disbursed in the current year. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the public program benefit. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date until when the benefit is valid. |
| EnrollmentCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of times the benefit is applicable to an individual. |
| GoalDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe goal definition associated with the benefit.This field is a relationship field.Relationship NameGoalDefinitionRelationship TypeLookupRefers ToGoalDefinition |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the benefit is active.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MaxBenefitAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum amount that can be disbursed for a period. |
| MinBenefitAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum amount that can be disbursed for a period. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the public program benefit. |
| PayoutFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the frequency of the benefit payment.Possible values are:AnnualBiWeekly—Bi-WeeklyMonthlyQuaterlyWeekly |
| PreviousMonthDisbursedQty | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of benefits disbursed in the previous month. |
| PreviousYearAssignedQty | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of benefits assigned in the previous year. |
| PreviousYearDisbursedQty | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of benefits disbursed in the previous year. |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the program that's associated with the benefit.This field is a relationship field.Relationship NameProgramRelationship TypeLookupRefers ToProgram |
| RecertificationFrequency | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe frequency in days after which an enrolee must recertify eligibility to receive the benefit.Available in API version 58.0 and later. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the benefit starts. |
| StartRecertificationFrom | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates when a constituent can recertify for the benefit before the recertification due date.Available in API version 61.0 and later. |
| UnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for quantity.This field is a relationship field.Relationship NameUnitRelationship TypeLookupRefers ToUnitOfMeasure |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BenefitFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BenefitHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- BenefitFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- BenefitHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
