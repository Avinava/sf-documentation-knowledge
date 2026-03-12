---
title: "BudgetAllocation"
domain: psc-api
topic: budgetallocation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.251Z
estimatedTokens: 822
keywords: [BudgetAllocation, subsection, Budget, allocated, resources, applied, API, version, 53.0, later, Calls, Special, Access, Rules, Associated]
---

# BudgetAllocation

> Represents a subsection of a Budget that shows where allocated
         resources are being applied. This object is available in API version 53.0 and later.

# BudgetAllocation

Represents a subsection of a Budget that shows where allocated resources are being applied. This object is available in API version 53.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=psc_api)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Grants Management or Grantmaking license is enabled, Grants Management or Grantmaking is enabled, and the Manage Budgets system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of allocated funds. |
| BudgetCategoryValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe budget category value that's associated with the grants allocation.This field is a relationship field.Relationship NameBudgetCategoryValueRelationship TypeLookupRefers ToBudgetCategoryValue |
| BudgetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe budget that this allocation is related to.This field is a relationship field.Relationship NameBudgetRelationship TypeMaster-DetailRefers ToBudget |
| FundingDisbursementId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe funding disbursement associated with the budget allocation.This field is available from API version 58.0 and later.This field is a relationship field.Relationship NameFundingDisbursementRelationship TypeLookupRefers ToFundingDisbursement |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionA descriptive name for the allocation. |
| Quantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity amount allocated for non-currency projects. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the budget allocation.Possible values are:AllocatedCommittedFinalized |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BudgetAllocationFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[BudgetAllocationHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.
