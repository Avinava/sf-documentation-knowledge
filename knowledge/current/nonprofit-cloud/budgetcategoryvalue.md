---
title: "BudgetCategoryValue"
domain: nonprofit-cloud
topic: budgetcategoryvalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.210Z
estimatedTokens: 881
keywords: [BudgetCategoryValue, Captures, budget, category, time, period, API, version, 57.0, later, Calls, Special, Access, Rules, Associated]
---

# BudgetCategoryValue

> Captures budget values for category and time period. This object
      is available in API version 57.0 and later.

# BudgetCategoryValue

Captures budget values for category and time period. This object is available in API version 57.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Grantmaking license is enabled, Grantmaking is enabled, and the Manage Budgets system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| ActualAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual amount of the budget that was used.This field is available from API version 59.0 and later. |
| ActualQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual quantity of the budget that was used.This field is available from API version 59.0 and later. |
| Amount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe planned amount for the budget. |
| BudgetCategoryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID that's associated with this budget category value.This field is a relationship field.Relationship NameBudgetCategoryRelationship TypeMaster-DetailRefers ToBudgetCategory |
| BudgetDivisionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe budget period that's associated with the budget category value.This field is a relationship field.Relationship NameBudgetDivisionRelationship TypeLookupRefers ToBudgetPeriod |
| Comments | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe comments about how the budget was used.This field is available from API version 59.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of this budget category value. |
| Quantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe planned quantity for the budget. Use when establishing budgets for non-currency projects. |
| VarianceAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount over or under the planned budget that was used.This field is available from API version 59.0 and later.This field is a calculated field. |
| VarianceQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe quantity over or under the planned budget that was used.This field is available from API version 59.0 and later.This field is a calculated field. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

BudgetCategoryValueFeed

Feed tracking is available for the object.

BudgetCategoryValueHistory

History is available for tracked fields of the object.
