---
title: "AccountRelationship"
domain: object-reference
topic: accountrelationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.691Z
estimatedTokens: 876
keywords: [AccountRelationship, relationship, two, accounts, API, version, 45.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# AccountRelationship

> Represents a relationship of a given type between two accounts.
		This object is available in API version 45.0 and later.

# AccountRelationship

Represents a relationship of a given type between two accounts. This object is available in API version 45.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

In Digital Experience Settings, turn on the Enable Account Relationships org preference, which is off by default.

## Fields

| Field | Details |
| --- | --- |
| AccountFromID | TypereferencePropertiesCreate, Filter, Group, Sort,DescriptionID of the account that gains access to data from AccountTo. |
| AccountToId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the account sharing data with AccountFrom. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user accessed this record or list view (LastReferencedDate) but didn’t viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the account relationship. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the account relationship. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe relationship type. All account relationship sharing rules of that type are to this account relationship.Standard values are:System IntegratorAgencyAdvertiserResellerDistributorDeveloperBrokerLenderInstitutionContractorDealerConsultantClientVendorAgentRetailerSubContractorSupplierPicklist items can be updated with your own values. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[AccountRelationshipFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AccountRelationshipHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AccountRelationshipOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[AccountRelationshipShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AccountRelationshipFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- AccountRelationshipHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- AccountRelationshipOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- AccountRelationshipShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
