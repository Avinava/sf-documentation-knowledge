---
title: "EmissionsAllocation"
domain: netzero-cloud-dev-guide
topic: emissionsallocation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.944Z
estimatedTokens: 1318
keywords: [EmissionsAllocation, emissions, child, partner, account, allocated, API, version, 58.0, later, Calls, Associated, Objects]
---

# EmissionsAllocation

> Represents information about the emissions from a child or partner account
         that are allocated to an account. This object is available in API version 58.0 and
      later.

# EmissionsAllocation

Represents information about the emissions from a child or partner account that are allocated to an account. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AllocatedFromAccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe child or partner account from which the emissions are allocated to the parent account.This field is a relationship field.Relationship NameAllocatedFromAccountRelationship TypeLookupRefers ToAccount |
| AllocatedFromGhgCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the GHG category of the child or partner account from which the emissions are allocated to the parent account.Possible values are:Business TravelCapital GoodsCommercial BuildingsData CentersDownstream Leased AssetsDownstream Transportation and DistributionEmployee CommutingEnd-of-Life Treatment of Sold ProductsFleet VehiclesFranchisesFuel and Energy-Related ActivitiesInvestmentsPrivate JetsProcessing of Sold ProductsPurchased Goods and ServicesUncategorizedUpstream Leased AssetsUpstream Transportation and DistributionUse of Sold ProductsWaste GeneratedWaste Generated In Operations |
| AllocatedFromScope | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the scope of the child or partner account from which the emissions are allocated to the parent account.Possible values are:Scope1—Scope 1Scope1AndScope2—Scope 1 and Scope 2Scope2—Scope 2Scope3—Scope 3TotalEmissions—Total Emissions |
| AllocatedToAccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe parent account to which the emissions are allocated.This field is a relationship field.Relationship NameAllocatedToAccountRelationship TypeLookupRefers ToAccount |
| AllocatedToGhgCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the GHG category of the parent account to which the emissions are allocated.Possible values are:Business TravelCapital GoodsCommercial BuildingsData CentersDownstream Leased AssetsDownstream Transportation and DistributionEmployee CommutingEnd-of-Life Treatment of Sold ProductsFleet VehiclesFranchisesFuel and Energy-Related ActivitiesInvestmentsPrivate JetsProcessing of Sold ProductsPurchased Goods and ServicesUncategorizedUpstream Leased AssetsUpstream Transportation and DistributionUse of Sold ProductsWaste GeneratedWaste Generated In Operations |
| AllocatedToScope | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the scope of the parent account to which the emissions are allocated.Possible values are:Scope1—Scope 1Scope2—Scope 2Scope3—Scope 3 |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name for this energy use record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Percentage | TypepercentPropertiesCreate, Filter, Sort, UpdateDescriptionThe percentage of emissions from a child or partner account that are allocated to the parent account. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EmissionsAllocationFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[EmissionsAllocationHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[EmissionsAllocationShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- EmissionsAllocationFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- EmissionsAllocationHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- EmissionsAllocationShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
