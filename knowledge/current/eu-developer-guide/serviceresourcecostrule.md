---
title: "ServiceResourceCostRule"
domain: eu-developer-guide
topic: serviceresourcecostrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:32.846Z
estimatedTokens: 553
keywords: [ServiceResourceCostRule, calculate, meal, equivalent, gifts, awarded, service, worker, API, 62.0]
---

> Represents the rules that calculate the value of a meal or equivalent gifts
         awarded to the field service worker. This object is available in API version 62.0 and
      later.

# ServiceResourceCostRule

Represents the rules that calculate the value of a meal or equivalent gifts awarded to the field service worker. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApexClassId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Apex class associated with the service resource cost rule.This field is a relationship field.Relationship NameApexClassRefers ToApexClass |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the category of the service resource cost rule.Possible values are:GiftOthersUnion Terms |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the service resource cost rule. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the service resource cost rule is active.The default value is false. |
| LaborUnionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe labor union associated with the service resource cost rule.This field is a relationship field.Relationship NameLaborUnionRefers ToLaborUnion |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the service resource cost rule. |
| Rule | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name of the rule that calculates the supplemental compensation or the time sheet entry item. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the service resource cost rule.Possible values are:MealCalculation—Meal CalculationsTimesheetValidations—Timesheet ValidationsTimesheetEntryItemCalculation—Timesheet Entry Item Calculation |
| StandardApexClass | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe standard Apex class associated with the service resource cost rule. |
