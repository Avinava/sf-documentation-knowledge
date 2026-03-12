---
title: "PartnerFundRequest"
domain: object-reference
topic: partnerfundrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.309Z
estimatedTokens: 1091
keywords: [PartnerFundRequest, funds, partner, marketing, budget, channel, API, version, 41.0, later, Calls, Associated, Objects]
---

# PartnerFundRequest

> Represents a request for funds from the partner marketing budget by a channel
		partner. This object is available in API version 41.0 and later.

# PartnerFundRequest

Represents a request for funds from the partner marketing budget by a channel partner. This object is available in API version 41.0 and later.

## Supported Calls

create(), delete()describeLayout()describeSObjects() getDeleted()getUpdated()query()retrieve()search() update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| Activity | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionActivity that is covered by the funds, for example, a trade show or seminar. |
| AllocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the partner fund allocation. |
| Amount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionApproved amount of request. |
| BudgetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the partner marketing budget. |
| ChannelPartnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the channel partner.NoteThe ChannelPartnerId field isn’t supported for formula fields, custom buttons, or custom links for the PartnerFundRequest object. This limitation also applies to the PartnerFundAllocation and PartnerMarketingBudget objects. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the fund request. |
| DesiredOutcome | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDesired outcome if requested funds are used. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. Some sample scenarios are: |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of the fund request. |
| RequestedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAmount of the fund request. |
| Status | TypepicklistPropertiesCreate, Filter, Nillable, Group, Restricted picklist, Sort, UpdateDescriptionStatus of the fund request. Values are:DraftApprovedRejected |
| Title | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionTitle of the fund request. |
| TotalApprovedFcs | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of approved fund claims. |
| TotalReimbursedFcs | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of reimbursed fund claims. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[PartnerFundRequestFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PartnerFundRequestHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PartnerFundRequestOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PartnerFundRequestShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PartnerFundRequestFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- PartnerFundRequestHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- PartnerFundRequestOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PartnerFundRequestShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
