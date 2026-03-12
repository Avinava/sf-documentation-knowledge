---
title: "PartnerFundAllocation"
domain: object-reference
topic: partnerfundallocation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.291Z
estimatedTokens: 934
keywords: [PartnerFundAllocation, allocated, funds, partner, marketing, budget, channel, partners, API, version, 41.0, later, Calls, Associated, Objects]
---

# PartnerFundAllocation

> Represents allocated funds from a partner marketing budget for channel partners. This
		object is available in API version 41.0 and later.

# PartnerFundAllocation

Represents allocated funds from a partner marketing budget for channel partners. This object is available in API version 41.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionTotal amount of the allocation. |
| BudgetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the partner marketing budget. |
| ChannelPartnerId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the channel partner.NoteThe ChannelPartnerId field isn’t supported for formula fields, custom buttons, or custom links for the PartnerFundAllocation object. This limitation also applies to the PartnerMarketingBudget and PartnerFundRequest objects. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the allocation. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. Some sample scenarios are: |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of the allocation. |
| Title | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe title of the allocation. |
| TotalApprovedFcs | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of approved fund claims. |
| TotalApprovedFrs | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of approved fund requests. |
| TotalReimbursedFcs | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of reimbursed fund claims. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[PartnerFundAllocationFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PartnerFundAllocationHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PartnerFundAllocationOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PartnerFundAllocationShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PartnerFundAllocationFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- PartnerFundAllocationHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- PartnerFundAllocationOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PartnerFundAllocationShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
