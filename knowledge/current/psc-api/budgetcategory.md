---
title: "BudgetCategory"
domain: psc-api
topic: budgetcategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.256Z
estimatedTokens: 707
keywords: [BudgetCategory, purpose, budget, line, item, API, version, 57.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# BudgetCategory

> Represents the purpose of the budget line item. This object is
		available in API version 57.0 and later.

# BudgetCategory

Represents the purpose of the budget line item. This object is available in API version 57.0 and later.

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
| BudgetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent budget that's associated with the budget category.This field is a relationship field.Relationship NameBudgetRelationship TypeMaster-DetailRefers ToBudget |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the budget category. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the budget category. |
| Reason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason why an item is being included in the budget. |
| SequenceNumber | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number assigned to a budget category that's used to edit or show a category. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BudgetCategoryFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BudgetCategoryHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- BudgetCategoryFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- BudgetCategoryHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
