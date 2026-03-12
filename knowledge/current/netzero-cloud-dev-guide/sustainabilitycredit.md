---
title: "SustainabilityCredit"
domain: netzero-cloud-dev-guide
topic: sustainabilitycredit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.184Z
estimatedTokens: 1377
keywords: [SustainabilityCredit, sustainability, credits, part, purchase, API, version, 56.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# SustainabilityCredit

> Represents information about the sustainability credits that are a part of a
         sustainability purchase. This object is available in API version 56.0 and later.

# SustainabilityCredit

Represents information about the sustainability credits that are a part of a sustainability purchase. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| CostPerUnit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cost of the credits for each unit of emissions. |
| CrbnCreditProjectId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe carbon credit project that's associated with sustainability credit.This field is a relationship field.Relationship NameCrbnCreditProjectRelationship TypeLookupRefers ToCrbnCreditProject |
| CreditsAllocated | TypedoublePropertiesFilter, Nillable, SortDescriptionThe credits that are allocated to the emissions inventory of the organization. |
| CreditsAvailable | TypedoublePropertiesFilter, Nillable, SortDescriptionThe credits that are available after allocation. |
| CreditsIssueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the credits were issued. |
| CreditsPurchased | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe credits that are purchased by the organization. |
| CreditsRetiredDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the credits are retired from the registry. |
| CreditsUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the credits.Possible values are:TCO2E—tCO2eThe default value is TCO2E. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the sustainability credit item. |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external identifier of the data that is imported for the carbon credit project. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the sustainability credit item. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PurchaseDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the sustainability credits were purchased. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the sustainability credit.Possible values are:HELD_WITH_REGISTRY—Held with RegistryRETIRED—Retired |
| SupplierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the organization responsible for supplying the sustainability credits.This field is a relationship field.Relationship NameSupplierRelationship TypeLookupRefers ToSupplier |
| SustainabilityPurchaseId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe sustainability purchase record that's associated with the purchase of sustainability credits, such as carbon credits.This field is a relationship field.Relationship NameSustainabilityPurchaseRelationship TypeLookupRefers ToSustainabilityPurchase |
| TotalCost | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount spent on the credits. |
| VintageYear | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe year when the sustainability credits were issued. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SustainabilityCreditFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[SustainabilityCreditHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[SustainabilityCreditShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- SustainabilityCreditFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- SustainabilityCreditHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- SustainabilityCreditShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
