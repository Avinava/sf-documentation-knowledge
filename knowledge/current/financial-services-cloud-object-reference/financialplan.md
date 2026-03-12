---
title: "FinancialPlan"
domain: financial-services-cloud-object-reference
topic: financialplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.299Z
estimatedTokens: 480
keywords: [FinancialPlan, financial, plan, person, account, API, version, 59.0, later, Calls]
---

# FinancialPlan

> Represents a financial plan for a person account. This object is
      available in API version 59.0 and later.

# FinancialPlan

Represents a financial plan for a person account. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe household to which the financial plan is associated.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the financial plan. |
| EstimatedSuccessPercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe success percentage that's estimated for the financial plan. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the financial plan. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier for the financial plan in an external system. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the financial plan. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the finanical plan.Possible values are:CompletedInProgress—In ProgressNotStarted—Not Started |
| Type | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the type of financial plan.Possible values are:EducationOtherRetirement |
