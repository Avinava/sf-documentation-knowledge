---
title: "PartnerMarketingBudget"
domain: object-reference
topic: partnermarketingbudget
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.319Z
estimatedTokens: 1242
keywords: [PartnerMarketingBudget, budget, funds, channel, partners, selling, marketing, products, services, API, version, 41.0, later, Calls, Associated]
---

# PartnerMarketingBudget

> Represents a budget that provides funds to channel partners for selling and marketing
		products and services. This object is available in API version 41.0 and later.

# PartnerMarketingBudget

Represents a budget that provides funds to channel partners for selling and marketing products and services. This object is available in API version 41.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionTotal amount of the budget. |
| ChannelPartnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the channel partner. This field is available in API version 45.0 and later.NoteThe ChannelPartnerId field isn’t supported for formula fields, custom buttons, or custom links for the PartnerMarketingBudget object. This limitation also applies to the PartnerFundAllocation and PartnerFundRequest objects. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the budget. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when the budget is no longer available. |
| IsIgnoreValidation | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhen enabled, ignores restrictions related to the child objects connected to the budget. Note that individual totals for allocation amounts, request amounts, and claims amounts cannot exceed the total of their parent budget. Field is default off (false) on create. Once enabled (true), this field cannot be disabled. This field is available in API version 44.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. Some sample scenarios are: |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of the budget. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when the budget becomes available. |
| Title | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionTitle of the budget. |
| TotalAllocatedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal funds allocated to channel partners or as a fund pool. |
| TotalApprovedFcs | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of approved fund claims. |
| TotalApprovedFrs | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of approved fund requests. |
| TotalReimbursedFcs | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of reimbursed fund claims. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of budget. Values are:Co-Operated Budget—Funds accrue based on a percentage of partner sales. The funds are available based on previous activity.Marketing Funds—Funds are issued to partners in advance of sales. The funds are awarded based on predicted or expected behavior. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[PartnerMarketingBudgetFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PartnerMarketingBudgetHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PartnerMarketingBudgetOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PartnerMarketingBudgetShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PartnerMarketingBudgetFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- PartnerMarketingBudgetHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- PartnerMarketingBudgetOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PartnerMarketingBudgetShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
