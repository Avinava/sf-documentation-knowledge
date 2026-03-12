---
title: "PartnerFundClaim"
domain: object-reference
topic: partnerfundclaim
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.300Z
estimatedTokens: 874
keywords: [PartnerFundClaim, claim, funds, partner, marketing, budget, channel, API, version, 41.0, later, Calls, Associated, Objects]
---

# PartnerFundClaim

> Represents a claim of funds from the partner marketing budget by a
			channel partner. This object is available in API version 41.0 and
		later.

# PartnerFundClaim

Represents a claim of funds from the partner marketing budget by a channel partner. This object is available in API version 41.0 and later.

## Supported Calls

create()delete()describeLayout()describeSObjects()getDeleted()getUpdated()query()retrieve() search()update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| AllocationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the partner fund allocation. |
| Amount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionAmount of the claim. |
| BudgetId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the partner marketing budget. |
| ChannelPartnerId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the channel partner. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the fund claim. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. Some sample scenarios are: |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of the fund claim. |
| RequestId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the partner fund request. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable Restricted picklist, Sort, UpdateDescriptionStatus of the fund claim. Values are:DraftApprovedRejectedPaid |
| Title | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionTitle of the fund claim. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[PartnerFundClaimFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PartnerFundClaimHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PartnerFundClaimOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PartnerFundClaimShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PartnerFundClaimFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- PartnerFundClaimHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- PartnerFundClaimOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PartnerFundClaimShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
