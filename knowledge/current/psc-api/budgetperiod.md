---
title: "BudgetPeriod"
domain: psc-api
topic: budgetperiod
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.279Z
estimatedTokens: 756
keywords: [BudgetPeriod, distinct, time, interval, estimate, API, version, 57.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# BudgetPeriod

> Defines a distinct time interval in which the estimate applies. This object is available in API version 57.0 and later.

# BudgetPeriod

Defines a distinct time interval in which the estimate applies. This object is available in API version 57.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=psc_api)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Grantmaking license is enabled, Grantmaking is enabled, and the Manage Budgets system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| BudgetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent budget that's associated with the budget period.This field is a relationship field.Relationship NameBudgetRelationship TypeMaster-DetailRefers ToBudget |
| IsSubmitted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the budget has been submitted. This field is available from API version 59.0 and later.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the budget period. |
| PeriodEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the budget period ends. |
| PeriodStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the budget period. |
| SequenceNumber | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe order in which the budget period is shown. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BudgetPeriodFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BudgetPeriodHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- BudgetPeriodFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- BudgetPeriodHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
